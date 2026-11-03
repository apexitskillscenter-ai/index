const navLinks = [
  ["Home","index.html"],["About","about.html"],["Security Center","security-center.html"],
  ["Report Fraud","report-fraud.html"],["Login","login.html"]
];
function renderShell(active=""){
  const nav=document.getElementById("site-nav");
  if(nav){nav.innerHTML=`<div class="container nav-inner"><a class="brand" href="index.html">Secure<span>Bank</span></a><button class="menu-btn" id="menuBtn">Menu ☰</button><div class="links" id="navLinks">${navLinks.map(([n,u])=>`<a class="${active===u?"active":""}" href="${u}">${n}</a>`).join("")}<a href="dashboard.html">Dashboard</a><a href="admin.html">Admin Demo</a></div></div>`;document.getElementById("menuBtn").onclick=()=>document.getElementById("navLinks").classList.toggle("open");}
  const foot=document.getElementById("site-footer");
  if(foot)foot.innerHTML=`<div class="container footer-inner"><div><strong>SecureBank</strong><br><small>Smart Banking Security & Fraud Detection — Academic Demo</small></div><small>© ${new Date().getFullYear()} SecureBank. Not a real bank.</small></div>`;
}
function getTransactions(){return JSON.parse(localStorage.getItem("sb_transactions")||"null")||[
{id:1001,date:"2026-10-28 10:30",type:"Online Purchase",amount:4200,status:"Normal",risk:"Low"},
{id:1002,date:"2026-10-28 11:02",type:"Utility Bill",amount:1850,status:"Normal",risk:"Low"},
{id:1003,date:"2026-10-29 09:15",type:"Large Transfer",amount:85000,status:"Review",risk:"High"},
{id:1004,date:"2026-10-29 09:17",type:"Online Purchase",amount:2200,status:"Review",risk:"Medium"},
{id:1005,date:"2026-10-30 14:10",type:"ATM Withdrawal",amount:5000,status:"Normal",risk:"Low"}]};
function saveTransactions(rows){localStorage.setItem("sb_transactions",JSON.stringify(rows))}
function money(n){return "Rs. "+Number(n).toLocaleString("en-PK")}
function badge(s){let c=s==="Normal"?"normal":s==="Blocked"?"blocked":"review";return `<span class="status ${c}">${s}</span>`}
function showMessage(el,msg,kind="success"){if(el)el.innerHTML=`<div class="notice ${kind}">${msg}</div>`}
document.addEventListener("DOMContentLoaded",()=>renderShell(location.pathname.split("/").pop()));
