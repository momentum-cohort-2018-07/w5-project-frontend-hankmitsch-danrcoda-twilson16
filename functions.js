import './styles.css'

let answersArr = []
let choice1 = document.getElementById('submit1')
choice1.addEventListener('click', function (e) {
  e.preventDefault()
  let answer1 = document.querySelector('input[name="a1"]:checked').value
  answersArr.push(answer1)
  console.log(answersArr)
})

let choice2 = document.getElementById('submit2')
choice2.addEventListener('click', function (e) {
  e.preventDefault()
  let answer2 = document.querySelector('input[name="a2"]:checked').value
  answersArr.push(answer2)
  console.log(answersArr)
})

let choice3 = document.getElementById('submit3')
choice3.addEventListener('click', function (e) {
  e.preventDefault()
  let answer3 = document.querySelector('input[name="a3"]:checked').value
  answersArr.push(answer3)
  console.log(answersArr)
})

let final = document.getElementById('final')
final.addEventListener('click', function (e) {
  e.preventDefault()
  myFunction()
})
function getSum (total, num) {
  return total + num
}
function myFunction (item) {
  console.log(answersArr.reduce(getSum))
}
