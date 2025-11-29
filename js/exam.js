// exam.js — simple static exam interface behaviors
document.addEventListener('DOMContentLoaded', ()=>{
  const total = 12; // number of questions in mock
  const qNav = document.getElementById('qNav')
  const qIndexEl = document.getElementById('qIndex')
  const qText = document.getElementById('qText')
  const optionsList = document.getElementById('options')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')

  // simple question data
  const questions = Array.from({length: total}).map((_,i)=>({
    id: i+1,
    text: `This is a sample question number ${i+1}. Choose the correct answer.`,
    options: ["Option A","Option B","Option C","Option D"],
    answer: null
  }))

  let current = 0

  function buildNav(){
    qNav.innerHTML = ''
    questions.forEach((q, idx)=>{
      const btn = document.createElement('button')
      btn.textContent = q.id
      btn.dataset.index = idx
      btn.addEventListener('click', ()=>{ goTo(idx) })
      qNav.appendChild(btn)
    })
    refreshNav()
  }

  function refreshNav(){
    qNav.querySelectorAll('button').forEach(btn=>{
      const idx = Number(btn.dataset.index)
      btn.classList.toggle('answered', Boolean(questions[idx].answer))
      btn.classList.toggle('current', idx===current)
    })
  }

  function renderQuestion(){
    const q = questions[current]
    qIndexEl.textContent = q.id
    qText.textContent = q.text
    optionsList.innerHTML = ''
    q.options.forEach((opt, i)=>{
      const li = document.createElement('li')
      li.className = q.answer===i? 'selected' : ''
      const label = document.createElement('div')
      label.className = 'label'
      label.textContent = opt
      const check = document.createElement('div')
      check.className = 'check'
      check.innerHTML = q.answer===i? '✔' : ''
      li.appendChild(label)
      li.appendChild(check)
      li.addEventListener('click', ()=>{
        q.answer = i
        renderQuestion()
        refreshNav()
      })
      optionsList.appendChild(li)
    })
  }

  function goTo(i){
    if(i<0) i=0
    if(i>questions.length-1) i=questions.length-1
    current = i
    renderQuestion()
    refreshNav()
  }

  prevBtn && prevBtn.addEventListener('click', ()=> goTo(current-1))
  nextBtn && nextBtn.addEventListener('click', ()=> goTo(current+1))

  buildNav()
  goTo(0)
})
