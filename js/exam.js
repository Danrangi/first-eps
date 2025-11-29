// Basic exam logic: show questions, mark answered, update nav sidebar
const examData = JSON.parse(localStorage.getItem('eps_current_exam')||'null') || {examType:'JAMB',subjects:['Mathematics']}
const questionBank = {
  Mathematics:[
    {q:'If 2x+3=11, x=?', opts:['2','4','5','7'], a:1},
    {q:'Sqrt(144)=?', opts:['10','11','12','13'], a:2},
    {q:'15% of 200 = ?', opts:['20','25','30','35'], a:2}
  ],
  English:[
    {q:'Choose correct spelling', opts:['Accomodation','Accommodation','Acommodation','Acomodation'], a:1},
    {q:'Synonym of happy', opts:['Sad','Joyful','Angry','Tired'], a:1}
  ],
  Physics:[{q:'SI unit of force?',opts:['Joule','Newton','Watt','Pascal'],a:1}],
  Chemistry:[{q:'Symbol for Gold?',opts:['Go','Gd','Au','Ag'],a:2}]
}

let currentSubjectIndex = 0
let currentQuestionIndex = 0
const state = {answers:{}}

function currentSubject(){return examData.subjects[currentSubjectIndex]}

function loadQuestion(){
  const subject = currentSubject()
  const list = questionBank[subject] || []
  if(list.length===0) {
    document.getElementById('qText').textContent = 'No questions for '+subject
    return
  }
  const q = list[currentQuestionIndex]
  document.getElementById('examType').textContent = examData.examType
  document.getElementById('subjectName').textContent = subject
  document.getElementById('qNumber').textContent = `Q ${currentQuestionIndex+1}`
  document.getElementById('qText').textContent = q.q
  document.getElementById('progressInfo').textContent = `Question ${currentQuestionIndex+1} of ${list.length}`

  const opts = document.getElementById('options')
  opts.innerHTML = ''
  q.opts.forEach((o,i)=>{
    const div = document.createElement('div')
    div.className='option'
    div.dataset.index = i
    const left = document.createElement('div')
    left.textContent = `${String.fromCharCode(65+i)}. ${o}`
    const right = document.createElement('div')
    right.className='check'
    right.style.display='none'
    right.textContent='✓'
    div.appendChild(left);div.appendChild(right)
    div.addEventListener('click',()=>selectAnswer(i))
    opts.appendChild(div)
  })

  // highlight selected if exists
  const key = `${subject}_${currentQuestionIndex}`
  if(state.answers[key]!=null){
    const sel = state.answers[key]
    document.querySelectorAll('.option').forEach((el,ii)=>{
      el.classList.toggle('selected',ii===sel)
      el.querySelector('.check').style.display = ii===sel? 'inline-block':'none'
    })
  }

  updateNavGrid()
}

function selectAnswer(idx){
  const subject = currentSubject()
  const key = `${subject}_${currentQuestionIndex}`
  state.answers[key]=idx
  document.querySelectorAll('.option').forEach((el,ii)=>{
    el.classList.toggle('selected',ii===idx)
    el.querySelector('.check').style.display = ii===idx? 'inline-block':'none'
  })
  markAnsweredButton(currentQuestionIndex)
}

document.getElementById('prevBtn').addEventListener('click',()=>{
  if(currentQuestionIndex>0){currentQuestionIndex--;loadQuestion()}
})
document.getElementById('nextBtn').addEventListener('click',()=>{
  const list = questionBank[currentSubject()]||[]
  if(currentQuestionIndex < list.length-1){currentQuestionIndex++;loadQuestion();return}
  // if last question of current subject and there are more subjects
  if(currentSubjectIndex < examData.subjects.length-1){currentSubjectIndex++; currentQuestionIndex=0; loadQuestion();return}
  // finished all -> compute results
  computeAndSaveResults()
})

function computeAndSaveResults(){
  let total=0,correct=0,wrong=0
  examData.subjects.forEach(sub=>{
    const list = questionBank[sub]||[]
    list.forEach((q,i)=>{
      total++
      const key = `${sub}_${i}`
      if(state.answers[key]==null) { wrong++ }
      else if(state.answers[key]===q.a) correct++
      else wrong++
    })
  })
  const score = Math.round((correct/total)*100)
  localStorage.setItem('eps_last_results', JSON.stringify({score,correct,wrong,total}))
  location.href='results.html'
}

// nav grid
function buildNavGrid(){
  const grid = document.getElementById('navGrid')
  grid.innerHTML=''
  const list = questionBank[currentSubject()]||[]
  for(let i=0;i<list.length;i++){
    const b=document.createElement('button')
    b.className='nav-btn'
    b.textContent = i+1
    b.dataset.index=i
    b.addEventListener('click',()=>{currentQuestionIndex=i;loadQuestion()})
    grid.appendChild(b)
  }
}

function updateNavGrid(){
  const grid = document.getElementById('navGrid')
  if(!grid.childElementCount) buildNavGrid()
  grid.querySelectorAll('.nav-btn').forEach((b,idx)=>{
    b.classList.toggle('current', idx===currentQuestionIndex)
    const key = `${currentSubject()}_${idx}`
    b.classList.toggle('answered', state.answers[key]!=null)
  })
}

function markAnsweredButton(idx){
  const grid = document.getElementById('navGrid')
  const btn = grid.querySelector(`.nav-btn[data-index='${idx}']`)
  if(btn) btn.classList.add('answered')
}

// initialize
buildNavGrid(); loadQuestion();
