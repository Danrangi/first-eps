// Simple admin tab switching and placeholder data
document.querySelectorAll('.tablink').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault()
  document.querySelectorAll('.tablink').forEach(t=>t.classList.remove('active'))
  a.classList.add('active')
  const tab = a.dataset.tab
  document.querySelectorAll('.tabcontent').forEach(c=>c.classList.remove('active'))
  document.getElementById(tab).classList.add('active')
}))

// populate sample students
const students = [
  {id:1,username:'john',email:'john@example.com'},
  {id:2,username:'jane',email:'jane@example.com'}
]
const tbody = document.getElementById('studentsBody')
students.forEach(s=>{
  const tr=document.createElement('tr')
  tr.innerHTML = `<td>${s.id}</td><td>${s.username}</td><td>${s.email}</td>`
  tbody.appendChild(tr)
})
