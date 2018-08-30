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


// <div class="question-title"><h2>Question ${questionNumber}</h2></div>
// <div class="question-content">Placeholder text for question</div>
// <ol class="question-answers">
//     <li><input type="radio" name="answerA" id="question${questionNumber}" value="${letter}"><label for "answerA">${letter}: ${currentQuestion.answers[letter]}</label></li>
//     <li><input type="radio" name="answerB" id="question1" value="1"><label for "answerB">AnswerB</label></li>
//     <li><input type="radio" name="answerC" id="question1" value="1"><label for "answerC">AnswerC</label></li>
//     <li><input type="radio" name="answerD" id="question1" value="1"><label for "answerD">AnswerD</label></li> 
// </ol>