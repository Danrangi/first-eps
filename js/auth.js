// Tabs
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'))
  document.querySelectorAll('.form').forEach(f=>f.classList.remove('active'))
  btn.classList.add('active')
  document.getElementById(btn.dataset.tab).classList.add('active')
}))

// Signup (store basic user locally for demo)
document.getElementById('signup').addEventListener('submit',e=>{
  e.preventDefault()
  const u=document.getElementById('signup-username').value
  const em=document.getElementById('signup-email').value
  const r=document.getElementById('signup-role').value
  // store small user record
  localStorage.setItem('eps_user',JSON.stringify({username:u,email:em,role:r}))
  alert('Account created — now login')
  document.querySelector('[data-tab="login"]').click()
})

// Login
document.getElementById('login').addEventListener('submit',e=>{
  e.preventDefault()
  const u=document.getElementById('login-username').value
  const r=document.getElementById('login-role').value
  // store minimal user session
  localStorage.setItem('eps_user',JSON.stringify({username:u,role:r}))
  if(r==='admin') location.href='admin.html'
  else location.href='dashboard.html'
})
