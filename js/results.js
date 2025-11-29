const res = JSON.parse(localStorage.getItem('eps_last_results')||'null') || {score:0,correct:0,wrong:0,total:0}
document.getElementById('scorePct').textContent = res.score + '%'
document.getElementById('progressFill').style.width = res.score + '%'
document.getElementById('correct').textContent = 'Correct: '+res.correct
document.getElementById('wrong').textContent = 'Wrong: '+res.wrong
document.getElementById('total').textContent = 'Total: '+res.total
document.getElementById('retake').addEventListener('click',()=>{ location.href='exam.html' })
