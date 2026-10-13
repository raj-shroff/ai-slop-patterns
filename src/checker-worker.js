/* Same-origin worker. Text remains in this browser tab. */
importScripts('./checker-rules.js','./checker-text.js','./checker-families.js','./checker-engine.js');
self.onmessage=function(event){
  const message=event.data||{};
  if(!Number.isSafeInteger(message.revision))return;
  try{
    const result=self.SignatureChecker.analyze(message.text);
    self.postMessage({revision:message.revision,result});
  }catch(error){
    self.postMessage({revision:message.revision,error:error instanceof Error?error.message:'The checker could not read this text.'});
  }
};
