// auth.js — handles simple tab switching and mock submission
document.addEventListener('DOMContentLoaded', ()=>{
  // tab switching for login/signup
  document.querySelectorAll('.tabs .tab, .admin-tabs .tablist .tab, .admin-tabs .tab').forEach(()=>{});
  const tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(t=>t.addEventListener('click', ()=>{
    tabs.forEach(b=>b.classList.remove('active'))
    t.classList.add('active')
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'))
    const id = t.dataset.target
    const target = document.getElementById(id)
    if(target) target.classList.add('active')
  }))

  // admin page tabs (if present)
  const adminTabs = document.querySelectorAll('.admin-tabs .tablist .tab')
  adminTabs.forEach(t=>t.addEventListener('click', ()=>{
    adminTabs.forEach(b=>b.classList.remove('active'))
    t.classList.add('active')
    document.querySelectorAll('.admin-tabs .tab-content').forEach(c=>c.classList.remove('active'))
    const id = t.dataset.target
    const target = document.getElementById(id)
    if(target) target.classList.add('active')
  }))

  // mock form submissions — redirect to dashboard
  const loginForm = document.getElementById('loginForm')
  const signupForm = document.getElementById('signupForm')
  if(loginForm) loginForm.addEventListener('submit', (e)=>{e.preventDefault(); window.location.href='dashboard.html'})
  if(signupForm) signupForm.addEventListener('submit', (e)=>{e.preventDefault(); window.location.href='dashboard.html'})
})
