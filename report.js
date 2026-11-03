document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("reportForm");if(!form)return;
 form.addEventListener("submit",e=>{e.preventDefault();const report={id:"R"+Date.now().toString().slice(-7),category:document.getElementById("category").value,details:document.getElementById("details").value,date:new Date().toLocaleString()};
 const list=JSON.parse(localStorage.getItem("sb_reports")||"[]");list.push(report);localStorage.setItem("sb_reports",JSON.stringify(list));showMessage(document.getElementById("reportMessage"),`Your demo report has been submitted. Reference number: ${report.id}`);form.reset();
 });
});
