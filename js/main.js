// main.js — small helpers for the mock UI
document.addEventListener('DOMContentLoaded', ()=>{
  // highlight active sidebar link by matching filenames
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar nav a').forEach(a=>{
    const href = a.getAttribute('href') || '';
    const file = href.split('/').pop();
    if(file && current && file === current) a.classList.add('active')
  })
  // Tidy: support links that are same page (no filename)
  if(!current || current === ''){
    document.querySelectorAll('.sidebar nav a').forEach(a=>{
      if(a.getAttribute('href') === 'index.html') a.classList.add('active')
    })
  }
})
