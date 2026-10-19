import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {selectModels} from "../docs/router.mjs";
const data=JSON.parse(await readFile(new URL("../docs/data/atlas.json",import.meta.url),"utf8"));
let count=0;
for(const task of ["writing","code","research","analysis","extract","agent"])
for(const complexity of ["normal","hard"])
for(const priority of ["balanced","economy"])
for(const input of ["text","image","audio","video"])
for(const context of ["normal","large"])
for(const provider of ["any","openai","anthropic","google","xai"]){
 const request={task,complexity,priority,input,context,provider};
 const matches=selectModels(data,request);
 for(const model of matches){
  assert(model.inputs.includes(input));
  assert(provider==="any"||model.provider===provider);
  assert(complexity!=="hard"||model.tier!=="fast");
  assert(context!=="large"||(model.context!==null&&model.context>=900000));
 }
 count++;
}
const base={task:"extract",complexity:"normal",priority:"economy",input:"text",context:"normal",provider:"openai"};
assert.equal(selectModels(data,base)[0].id,"gpt-6-luna");
assert.equal(selectModels(data,{...base,input:"video"}).length,0);
assert(selectModels(data,{...base,complexity:"hard"}).every(m=>m.tier!=="fast"));
console.log(count+" routing combinations and task regressions passed.");
