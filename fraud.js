document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("checkForm");if(!form)return;
 form.addEventListener("submit",e=>{e.preventDefault();const amount=Number(document.getElementById("checkAmount").value),count=Number(document.getElementById("attempts").value),locationName=document.getElementById("location").value;let risks=[];
 if(amount>=50000)risks.push("The amount is above the demo threshold (Rs. 50,000).");
 if(count>=5)risks.push("Multiple transaction attempts were recorded within a short period.");
 if(locationName==="unknown")risks.push("An unfamiliar location was selected.");
 const out=document.getElementById("riskResult");
 if(risks.length){out.innerHTML=`<div class="notice danger-note"><strong>Demo Alert: Review Required</strong><ul>${risks.map(x=>`<li>${x}</li>`).join("")}</ul><small>یہ صرف تعلیمی Rule-Based مثال ہے، حقیقی فراڈ کی تشخیص نہیں۔</small></div>`}
 else out.innerHTML=`<div class="notice success"><strong>Low Risk — Demo Check Passed</strong><p>None of the demo risk rules were triggered by the information entered.</p></div>`;
 });
});
