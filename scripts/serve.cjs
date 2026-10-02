const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
require('./build.cjs');
const root=path.resolve(__dirname,'../dist');
const args=process.argv.slice(2),value=(k,d)=>args.includes(k)?args[args.indexOf(k)+1]:d;
const port=Number(value('--port',4173)),host=value('--host','127.0.0.1');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.md':'text/plain; charset=utf-8','.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'};
const server=http.createServer((req,res)=>{
 let target;try{target=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);return res.end('Bad request');}
 const file=path.resolve(root,'.'+target+(target.endsWith('/')?'index.html':''));
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);return res.end();}
 fs.readFile(file,(err,body)=>{if(err){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain; charset=utf-8','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:body);});
});
server.on('error',e=>{console.error(e.code==='EADDRINUSE'?`Port ${port} is in use. Choose another with --port.`:e.message);process.exit(1);});
server.listen(port,host,()=>console.log(`AI Writing Patterns: http://${host}:${port}`));
