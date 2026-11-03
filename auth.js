// Academic-only mock authentication. Never enter real banking credentials.
document.addEventListener("DOMContentLoaded",()=>{
 const login=document.getElementById("loginForm");
 if(login)login.addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("email").value.trim();const pass=document.getElementById("password").value;const msg=document.getElementById("formMessage");
 if(!email||pass.length<4){showMessage(msg,"Please enter a valid demo email and a demo password of at least 4 characters.","danger-note");return;}
 localStorage.setItem("sb_user",JSON.stringify({name:email.split("@")[0],email}));showMessage(msg,"Demo login successful! Opening your dashboard.");setTimeout(()=>location.href="dashboard.html",700);
 });
 const reg=document.getElementById("registerForm");
 if(reg)reg.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("name").value.trim(),email=document.getElementById("regEmail").value.trim(),pass=document.getElementById("regPassword").value;const msg=document.getElementById("formMessage");
 if(!name||!email||pass.length<8){showMessage(msg,"Please enter your name, email, and a demo password of at least 8 characters.","danger-note");return;}
 localStorage.setItem("sb_user",JSON.stringify({name,email}));showMessage(msg,"Your demo profile has been created. You can now log in.");reg.reset();
 });
});
