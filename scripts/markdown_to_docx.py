"""Synchronize the Word master from Markdown, retaining existing Word styles."""
from pathlib import Path
import re, shutil, json
from docx import Document
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT
from docx.shared import RGBColor
root=Path(__file__).resolve().parents[1]
source=root/'content/ai-writing-signs-and-rules.md'
target=root/'docs/references/AI-Writing-Signs-and-Rules.docx'
backup=root/'working/word-sync/original.docx';backup.parent.mkdir(parents=True,exist_ok=True)
if not backup.exists():shutil.copy2(target,backup)
doc=Document(target)
for el in list(doc._element.body):
 if el.tag!=qn('w:sectPr'):doc._element.body.remove(el)
expected=[];anchor=None;bookmark_id=1

def inline(p,text):
 parts=re.split(r'(\*\*[^*]+\*\*|(?<!\*)\*[^*]+\*(?!\*)|`[^`]+`|\[[^\]]+\]\([^)]+\))',text)
 for part in parts:
  m=re.fullmatch(r'\[([^\]]+)\]\(([^)]+)\)',part)
  if m:
   h=OxmlElement('w:hyperlink')
   if m[2].startswith('#'):h.set(qn('w:anchor'),m[2][1:])
   else:h.set(qn('r:id'),p.part.relate_to(m[2],RT.HYPERLINK,is_external=True))
   r=OxmlElement('w:r');t=OxmlElement('w:t');t.text=m[1];r.append(t);h.append(r);p._p.append(h)
  elif part.startswith('**') and part.endswith('**'):p.add_run(part[2:-2]).bold=True
  elif part.startswith('*') and part.endswith('*'):p.add_run(part[1:-1]).italic=True
  elif part.startswith('`') and part.endswith('`'):p.add_run(part[1:-1]).font.name='Consolas'
  else:p.add_run(part)
 return ''.join(p._p.itertext()) if False else ''.join(x.text or '' for x in p._p.iter(qn('w:t')))

def plain(s):
 s=re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',s)
 return re.sub(r'\*\*([^*]+)\*\*|(?<!\*)\*([^*]+)\*(?!\*)|`([^`]+)`',lambda m:next(x for x in m.groups() if x is not None),s)
lines=source.read_text(encoding='utf-8').splitlines();i=0;code=False
while i<len(lines):
 line=lines[i];i+=1
 if line.startswith('```'):code=not code;continue
 if code:
  p=doc.add_paragraph(line,'Source Code');expected.append(line);continue
 if not line.strip():continue
 m=re.fullmatch(r'<a id="([^"]+)"></a>',line)
 if m:anchor=m[1];continue
 if line.startswith('|'):
  table_lines=[line]
  while i<len(lines) and lines[i].startswith('|'):table_lines.append(lines[i]);i+=1
  rows=[[c.strip() for c in x.strip('|').split('|')] for x in table_lines if not re.match(r'^\|[\s:|\-]+\|$',x)]
  table=doc.add_table(rows=0,cols=len(rows[0]));table.style='Table Grid'
  for k,values in enumerate(rows):
   row=table.add_row()
   for c,value in zip(row.cells,values):inline(c.paragraphs[0],value);expected.append(plain(value))
   if k==0:
    props=row._tr.get_or_add_trPr();props.append(OxmlElement('w:tblHeader'))
    for c in row.cells:
     for r in c.paragraphs[0].runs:r.bold=True
  continue
 m=re.match(r'^(#{1,6}) (.*)',line)
 if m:style={1:'Title',2:'Heading 1',3:'Heading 2',4:'Heading 3'}.get(len(m[1]),'Heading 3');text=m[2]
 elif line.startswith('- '):style='List Bullet';text=line[2:]
 elif re.match(r'^\d+\. ',line):style='List Number';text=re.sub(r'^\d+\. ','',line)
 else:style='Normal';text=re.sub(r'^\\(?=#)', '',line)
 p=doc.add_paragraph(style=style);inline(p,text);expected.append(plain(text))
 if anchor:
  start=OxmlElement('w:bookmarkStart');start.set(qn('w:id'),str(bookmark_id));start.set(qn('w:name'),anchor)
  end=OxmlElement('w:bookmarkEnd');end.set(qn('w:id'),str(bookmark_id));p._p.insert(0,start);p._p.append(end);bookmark_id+=1;anchor=None
for name in ['Title','Heading 1','Heading 2','Heading 3']:
 doc.styles[name].font.color.rgb=RGBColor(0,0,0)
doc.core_properties.last_modified_by='raj-shroff'
doc.save(target)
check=Document(target)
actual=[''.join(x.text or '' for x in p.iter(qn('w:t'))) for p in check._element.body.iter(qn('w:p'))]
assert actual==expected, 'Text/order mismatch'
assert bookmark_id-1==143
report={'paragraphs_and_cells':len(expected),'pattern_bookmarks':143,'source_records':23,'additional_examples':47,'text_and_order_verified':True}
(root/'working/word-sync/verification.json').write_text(json.dumps(report,indent=2))
print(report)
