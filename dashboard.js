document.addEventListener("DOMContentLoaded",()=>{
 const user=JSON.parse(localStorage.getItem("sb_user")||"null");
 const name=document.getElementById("userName");if(name)name.textContent=user?user.name:"Demo User";
 const rows=getTransactions(),total=rows.length,flagged=rows.filter(x=>x.status!=="Normal").length;
 const t=document.getElementById("transactionCount"),f=document.getElementById("flaggedCount");if(t)t.textContent=total;if(f)f.textContent=flagged;
 const tbody=document.getElementById("recentRows");if(tbody)tbody.innerHTML=rows.slice(-5).reverse().map(r=>`<tr><td>#${r.id}</td><td>${r.date}</td><td>${r.type}</td><td>${money(r.amount)}</td><td>${badge(r.status)}</td></tr>`).join("");
 const logout=document.getElementById("logoutBtn");if(logout)logout.onclick=()=>{localStorage.removeItem("sb_user");location.href="index.html"};
 const txBody=document.getElementById("allRows");if(txBody)txBody.innerHTML=rows.slice().reverse().map(r=>`<tr><td>#${r.id}</td><td>${r.date}</td><td>${r.type}</td><td>${money(r.amount)}</td><td>${badge(r.status)}</td><td>${r.risk}</td></tr>`).join("");
 const form=document.getElementById("transactionForm");if(form)form.addEventListener("submit",e=>{e.preventDefault();const amount=Number(document.getElementById("amount").value),type=document.getElementById("type").value,msg=document.getElementById("transactionMessage");if(!amount||amount<1){showMessage(msg,"Please enter a valid amount.","danger-note");return}
 const high=amount>=50000;const row={id:Date.now(),date:new Date().toLocaleString(),type,amount,status:high?"Review":"Normal",risk:high?"High":"Low"};rows.push(row);saveTransactions(rows);showMessage(msg,high?"This demo transaction has been marked for review because the amount is high.":"Demo transaction added successfully.",high?"danger-note":"success");form.reset();setTimeout(()=>location.reload(),900);
 });
});
