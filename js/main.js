// main.js — small helpers for the mock UI
document.addEventListener('DOMContentLoaded', ()=>{
  // highlight active sidebar link
  document.querySelectorAll('.sidebar nav a').forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href'))){
      a.classList.add('active')
    }
  })
})
