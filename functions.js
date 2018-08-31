import './styles.css'

let answersArr = []
let choice1 = document.getElementById('submit1')
choice1.addEventListener('click', function (e) {
  e.preventDefault()
  let answer1 = parseInt(document.querySelector('input[name="a1"]:checked').value, 10)
  answersArr.push(answer1)
  console.log(answersArr)
})

let choice2 = document.getElementById('submit2')
choice2.addEventListener('click', function (e) {
  e.preventDefault()
  let answer2 = parseInt(document.querySelector('input[name="a2"]:checked').value, 10)
  answersArr.push(answer2)
  console.log(answersArr)
})

let choice3 = document.getElementById('submit3')
choice3.addEventListener('click', function (e) {
  e.preventDefault()
  let answer3 = parseInt(document.querySelector('input[name="a3"]:checked').value, 10)
  answersArr.push(answer3)
  console.log(answersArr)
})

let choice4 = document.getElementById('submit4')
choice4.addEventListener('click', function (e) {
  e.preventDefault()
  let answer4 = parseInt(document.querySelector('input[name="a4"]:checked').value, 10)
  answersArr.push(answer4)
  console.log(answersArr)
})

let choice5 = document.getElementById('submit5')
choice5.addEventListener('click', function (e) {
  e.preventDefault()
  let answer5 = parseInt(document.querySelector('input[name="a5"]:checked').value, 10)
  answersArr.push(answer5)
  console.log(answersArr)
})

let choice6 = document.getElementById('submit6')
choice6.addEventListener('click', function (e) {
  e.preventDefault()
  let answer6 = parseInt(document.querySelector('input[name="a6"]:checked').value, 10)
  answersArr.push(answer6)
  console.log(answersArr)
})

let choice7 = document.getElementById('submit7')
choice7.addEventListener('click', function (e) {
  e.preventDefault()
  let answer7 = parseInt(document.querySelector('input[name="a7"]:checked').value, 10)
  answersArr.push(answer7)
  console.log(answersArr)
})

let choice8 = document.getElementById('submit8')
choice8.addEventListener('click', function (e) {
  e.preventDefault()
  let answer8 = parseInt(document.querySelector('input[name="a8"]:checked').value, 10)
  answersArr.push(answer8)
  console.log(answersArr)
})

let choice9 = document.getElementById('submit9')
choice9.addEventListener('click', function (e) {
  e.preventDefault()
  let answer9 = parseInt(document.querySelector('input[name="a9"]:checked').value, 10)
  answersArr.push(answer9)
  console.log(answersArr)
})

let choice10 = document.getElementById('submit10')
choice10.addEventListener('click', function (e) {
  e.preventDefault()
  let answer10 = parseInt(document.querySelector('input[name="a10"]:checked').value, 10)
  answersArr.push(answer10)
  console.log(answersArr)
})

let final = document.getElementById('final')
final.addEventListener('click', function (e) {
  e.preventDefault()
  const sum = answersArr.reduce((total, amount) => total + amount)
  console.log(sum)
})
