"""Convert this project's Word reference to verified, editable Markdown.

Uses standard-library OOXML parsing; never executes embedded content.
"""
from pathlib import Path
import argparse
import re
import zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'


def plain(element):
    return ''.join(node.text or '' for node in element.iter(W + 't'))


def rich(paragraph):
    result = []
    for run in paragraph.iter(W + 'r'):
        text = plain(run)
        if not text:
            continue
        props = run.find(W + 'rPr')
        if props is not None:
            for tag, marker in [('i', '*'), ('b', '**')]:
                flag = props.find(W + tag)
                if flag is not None and flag.get(W + 'val', '1') not in ('0', 'false', 'off') and text.strip():
                    leading = text[:len(text) - len(text.lstrip())]
                    trailing = text[len(text.rstrip()):]
                    text = leading + marker + text.strip() + marker + trailing
        result.append(text)
    return ''.join(result)


def convert(source, destination):
    with zipfile.ZipFile(source) as archive:
        document = ET.fromstring(archive.read('word/document.xml'))
        styles_xml = ET.fromstring(archive.read('word/styles.xml'))
    styles = {}
    for style in styles_xml.findall(W + 'style'):
        name = style.find(W + 'name')
        styles[style.get(W + 'styleId')] = name.get(W + 'val') if name is not None else ''
    body = document.find(W + 'body')
    if body.findall(W + 'tbl'):
        raise ValueError('Tables require an explicit conversion before continuing.')
    output, preserved, anchors = [], [], []
    code = False
    nonempty = 0
    for paragraph in body.findall(W + 'p'):
        text = plain(paragraph)
        prop = paragraph.find('./' + W + 'pPr/' + W + 'pStyle')
        style = styles.get(prop.get(W + 'val'), '') if prop is not None else ''
        is_code = style == 'Source Code'
        if code and not is_code:
            output.extend(['```', ''])
            code = False
        if not text and not is_code:
            continue
        if text:
            nonempty += 1
        preserved.append(text)
        if is_code:
            if not code:
                output.append('```ini' if text.startswith('StylesPath') else '```yaml')
                code = True
            output.append(text)
            continue
        heading = {'Title': '# ', 'heading 1': '## ', 'heading 2': '### '}.get(style)
        if heading:
            match = re.match(r'^(P\d{3})\s+', text)
            if match:
                anchor = match.group(1).lower()
                # Later reconciliation headings refer back to existing IDs.
                # Only the first occurrence is the canonical pattern heading.
                if anchor not in anchors:
                    anchors.append(anchor)
                    output.extend([f'<a id="{anchor}"></a>', ''])
            output.append(heading + text)
        elif style == 'List Bullet':
            output.append('- ' + rich(paragraph))
        elif style == 'List Number':
            output.append('1. ' + rich(paragraph))
        else:
            value = rich(paragraph)
            # Normal paragraphs may contain source-fixture Markdown markers.
            # Escape a leading heading marker to keep it literal in the master.
            value = re.sub(r'^(#{1,6})(?=\s)', r'\\\1', value)
            output.append(value)
        output.append('')
    if code:
        output.extend(['```', ''])
    expected = {f'p{i:03}' for i in range(1, 139)}
    if set(anchors) != expected:
        raise ValueError(f'Pattern coverage mismatch: {sorted(expected - set(anchors))}')
    original = [plain(p) for p in body.findall(W + 'p') if plain(p)]
    if [t for t in preserved if t] != original:
        raise ValueError('Paragraph content or order changed.')
    result = '\n'.join(output).rstrip() + '\n'
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(result, encoding='utf-8', newline='\n')
    print(f'Converted {nonempty} paragraphs; preserved text/order; verified {len(anchors)} pattern anchors.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('destination', type=Path)
    args = parser.parse_args()
    convert(args.source, args.destination)
