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