import {selectModels} from "./router.mjs";
const form = document.querySelector("form");
const results = document.querySelector("#results");
const status = document.querySelector("#status");
let data;
function node(tag, text, className) { const el=document.createElement(tag); el.textContent=text; if(className)el.className=className; return el; }
function render() {
 if(!data)return;
 const request=Object.fromEntries(new FormData(form));
 const matches=selectModels(data,request);
 results.replaceChildren();
 status.textContent=matches.length+" compatible candidates. Ordered by editorial fit, not benchmark rank.";
 if(!matches.length) { document.querySelector("#notes").replaceChildren(); results.append(node("p","No verified match for these constraints. Change your provider or input, or preprocess the input into text. Unknown context limits are excluded for large inputs.")); return; }
 matches.slice(0,4).forEach((m,i)=>{
 const card=node("article",""); card.className="candidate";
 card.append(node("p",m.provider.toUpperCase()+" / "+m.tier,"eyebrow"),node("h3",m.name),node("code",m.id),node("p",m.description),node("h4","Why it fits"),node("p",m.reason),node("h4","Reasoning starting point"),node("p",m.effort));
 const link=node("a","Verify model and pricing");link.href=m.source;card.append(link);results.append(card);
 });
 const notes=document.querySelector("#notes");notes.replaceChildren();
 const advice=[request.task==="research"?"Enable web search or supply current sources. A model name alone does not provide current information.":request.task==="analysis"?"Use calculation tools, reconcile units, and validate results against source data.":request.task==="code"?"Supply repository context and tests. Validate the patch with your build and regression suite.":request.task==="extract"?"Define a schema, validate fields, and send ambiguous records to an exception queue.":request.task==="agent"?"Provide tools, stopping rules, and a recoverable execution environment.":"Provide audience, purpose, tone, and examples of the desired output.",
 request.complexity==="hard"?"For consequential decisions, add independent review and checks. More reasoning does not guarantee correctness.":"Escalate only after inspecting a repeatable failure on representative examples.",
 "Provider and modality are eligibility rules. Tier and task fit order candidates. Ties are alphabetical; no cross-provider winner is claimed."];
 advice.forEach(t=>notes.append(node("li",t)));
}
form.addEventListener("change",render);
form.addEventListener("submit",e=>{e.preventDefault();render();});
async function init(){
 try {const response=await fetch("data/atlas.json");if(!response.ok)throw new Error("Catalog unavailable"); data=await response.json();document.querySelector("#reviewed").textContent=data.reviewed;
 const catalog=document.querySelector("#catalog");
 data.models.forEach(m=>{const row=node("tr","");[m.name,m.provider,m.tier,m.context?m.context.toLocaleString():"Not verified here"].forEach(t=>row.append(node("td",t)));catalog.append(row);});
 render();}catch(e){status.textContent="The catalog could not load. Refresh or visit the repository guides.";document.querySelector("button").disabled=true;}
}
init();
