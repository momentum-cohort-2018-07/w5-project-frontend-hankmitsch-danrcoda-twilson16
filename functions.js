let answersArr = []
let choice1 = document.getElementById('submit1')
choice1.addEventListener('click', function (e) {
  e.preventDefault()
  let answer1 = parseInt(document.querySelector('input[name="a1"]:checked').value, 10)
  answersArr.push(answer1)
  console.log(answersArr)
  document.getElementById('question-one').style.display = 'none'
  document.getElementById('question-two').style.display = 'block'
})

let choice2 = document.getElementById('submit2')
choice2.addEventListener('click', function (e) {
  e.preventDefault()
  let answer2 = parseInt(document.querySelector('input[name="a2"]:checked').value, 10)
  answersArr.push(answer2)
  console.log(answersArr)
  document.getElementById('question-two').style.display = 'none'
  document.getElementById('question-three').style.display = 'block'
})

let choice3 = document.getElementById('submit3')
choice3.addEventListener('click', function (e) {
  e.preventDefault()
  let answer3 = parseInt(document.querySelector('input[name="a3"]:checked').value, 10)
  answersArr.push(answer3)
  console.log(answersArr)
  document.getElementById('question-three').style.display = 'none'
  document.getElementById('question-four').style.display = 'block'
})

let choice4 = document.getElementById('submit4')
choice4.addEventListener('click', function (e) {
  e.preventDefault()
  let answer4 = parseInt(document.querySelector('input[name="a4"]:checked').value, 10)
  answersArr.push(answer4)
  console.log(answersArr)
  document.getElementById('question-four').style.display = 'none'
  document.getElementById('question-five').style.display = 'block'
})

let choice5 = document.getElementById('submit5')
choice5.addEventListener('click', function (e) {
  e.preventDefault()
  let answer5 = parseInt(document.querySelector('input[name="a5"]:checked').value, 10)
  answersArr.push(answer5)
  console.log(answersArr)
  document.getElementById('question-five').style.display = 'none'
  document.getElementById('question-six').style.display = 'block'
})

let choice6 = document.getElementById('submit6')
choice6.addEventListener('click', function (e) {
  e.preventDefault()
  let answer6 = parseInt(document.querySelector('input[name="a6"]:checked').value, 10)
  answersArr.push(answer6)
  console.log(answersArr)
  document.getElementById('question-six').style.display = 'none'
  document.getElementById('question-seven').style.display = 'block'
})

let choice7 = document.getElementById('submit7')
choice7.addEventListener('click', function (e) {
  e.preventDefault()
  let answer7 = parseInt(document.querySelector('input[name="a7"]:checked').value, 10)
  answersArr.push(answer7)
  console.log(answersArr)
  document.getElementById('question-seven').style.display = 'none'
  document.getElementById('question-eight').style.display = 'block'
})

let choice8 = document.getElementById('submit8')
choice8.addEventListener('click', function (e) {
  e.preventDefault()
  let answer8 = parseInt(document.querySelector('input[name="a8"]:checked').value, 10)
  answersArr.push(answer8)
  console.log(answersArr)
  document.getElementById('question-eight').style.display = 'none'
  document.getElementById('question-nine').style.display = 'block'
})

let choice9 = document.getElementById('submit9')
choice9.addEventListener('click', function (e) {
  e.preventDefault()
  let answer9 = parseInt(document.querySelector('input[name="a9"]:checked').value, 10)
  answersArr.push(answer9)
  console.log(answersArr)
  document.getElementById('question-nine').style.display = 'none'
  document.getElementById('question-ten').style.display = 'block'
})

let choice10 = document.getElementById('submit10')
choice10.addEventListener('click', function (e) {
  e.preventDefault()
  let answer10 = parseInt(document.querySelector('input[name="a10"]:checked').value, 10)
  answersArr.push(answer10)
  console.log(answersArr)
  document.getElementById('question-ten').style.display = 'none'
  document.getElementById('results-page').style.display = 'block'
})

let fudge = `<div><h2>$3 Fudge Nut Brownie</h2> </div>`
let coffee = `<div><h2>$5 Coffee Drink</h2> </div>`
let kombucha = `<div> <h2>$6 Kombucha</h2> </div>`
let wrap = `<div><h2>$7 Greek Chicken Wrap</h2></div>`
let reuben = `<div><h2>$8 Reuben</h2></div>`
let quad = `<div><h2>$9 Quadripod</h2> </div>`

function decide (x) {
  if (x <= 15) {
    return fudge + `<img src="./pictures/fudgebrownie.jpg">`
  } else if (x <= 20) {
    return coffee + `"img src="./pictures/coffeeresult.jpg">`
  } else if (x <= 25) {
    return kombucha + `<img src="./pictures/kombucha.jpg">`
  } else if (x <= 30) {
    return wrap + `<img src="./pictures/greekchickenwrap.jpg">`
  } else if (x <= 35) {
    return reuben + `<img src="./pictures/reuben.jpeg"></img>`
  } else {
    return quad + `<img src="./pictures/quad.jpg">`
  }
}
let final = document.getElementById('submit10')
final.addEventListener('click', function (e) {
  e.preventDefault()
  const sum = answersArr.reduce((total, amount) => total + amount)
  console.log(sum)
  let yourResult = document.createElement('div')
  yourResult.classList.add('resultOutput')
  yourResult.innerHTML = decide(sum)
  document.getElementById('results-title').appendChild(yourResult)
})

let reset = document.getElementById('reload')
reset.addEventListener('click', function () {
  window.reload()
})
