function buildQuiz () {
    const output = [];

questions.forEach ((currentQuestion, questionNumber) => 
    const answers = []
    for (letter in currentQuestion.answers) {
        answers.push(
        `
        <label>
        <input type="radio" name="answer${questionNumber}" id="answer${questionNumber}" value="${letter}">${letter}: ${currentQuestion.answers[letter]}
        </label>
        `
        )
    }
    output.push(
        `
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        `
    )
)
}
console.log('hello')

let answersArr = []
let choice = document.getElementById('submit')
choice.addEventListener('click', function () {
  let answer1 = document.querySelector('input[name="q1"]:checked').value
  answersArr.push(answer1)
  let answer2 = document.querySelector('input[name="q2"]:checked').value
  answersArr.push(answer2)
  console.log(answersArr)
  // console.log(_.sum(answersArr))
})