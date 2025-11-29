// auth.js — handles simple tab switching and mock submission
document.addEventListener('DOMContentLoaded', ()=>{
  // Tab switching for login/signup (elements with data-target)
  const tabs = document.querySelectorAll('.tabs [data-target], .admin-tabs .tablist [data-target]');
  tabs.forEach(tab => tab.addEventListener('click', (e)=>{
    const group = tab.closest('.tabs') || tab.closest('.tablist') || document;
    // deactivate siblings
    group.querySelectorAll('[data-target]').forEach(b => b.classList.remove('active'));
    tab.classList.add('active');
    // switch content
    const targetId = tab.dataset.target;
    if(targetId){
      // hide other tab-content within same container (if any)
      const container = document.querySelectorAll(`#${targetId}`)[0]?.closest ? document.getElementById(targetId).parentElement : document.body;
      document.querySelectorAll(`#${targetId}`).forEach(el=>el.classList.add('active'));
      document.querySelectorAll('.tab-content').forEach(c=>{ if(c.id !== targetId) c.classList.remove('active') })
    }
  }));

  // Mock form submissions — redirect to dashboard
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  if(loginForm) loginForm.addEventListener('submit', (e)=>{ e.preventDefault(); window.location.href='dashboard.html' });
  if(signupForm) signupForm.addEventListener('submit', (e)=>{ e.preventDefault(); window.location.href='dashboard.html' });

});
