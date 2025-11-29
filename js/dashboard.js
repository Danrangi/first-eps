// Populate username
const user = JSON.parse(localStorage.getItem('eps_user')||'null')
if(user&&user.username) document.getElementById('userName').textContent = user.username

// Start exam buttons
document.querySelectorAll('.exam-card .start').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card = btn.closest('.exam-card')
    const exam = card.dataset.exam
    // default subject set — exam.html will respect this
    if(exam==='jamb') {
      localStorage.setItem('eps_current_exam', JSON.stringify({examType:'JAMB', subjects:['Mathematics','English','Physics','Chemistry']}))
    } else {
      // WAEC/NECO default one subject
      localStorage.setItem('eps_current_exam', JSON.stringify({examType:exam.toUpperCase(), subjects:['Mathematics']}))
    }
    location.href = 'exam.html'
  })
})

document.getElementById('logout').addEventListener('click',()=>{
  localStorage.removeItem('eps_user')
  location.href='index.html'
})
