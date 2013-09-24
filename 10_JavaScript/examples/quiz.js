/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

console.log("Quiz!");
var questions = [{
    q: "What is the capital of Sweden? \n 1) Stockholm \n 2) London \n 3) Paris",
    a: 1
}, {
    q: "What is the capital of UK? \n 1) Stockholm \n 2) London \n 3) Paris",
    a: 2
}, {
    q: "What is the capital of France? \n 1) Stockholm \n 2) London \n 3) Paris",
    a: 3
}],
    result = 0,
    i,
    currentQuestion,
    answer;

function askQuestion(question) {
    'use strict';
    var answer;
    do {
        answer = Number(prompt(question.q));
    } while (isNaN(answer));
    return answer;
}

function checkAnswer(answer, question) {
    'use strict';
    if (answer === question.a) {
        alert("Correct");
        result += 1;
    } else {
        alert("Sorry, the correct answer was " + question.a);
    }
}

function showResult() {
    'use strict';
    alert("Well done, you scored " + result + " points");
}

questions = _.shuffle(questions);
for (i = 0; i < 3; i += 1) {
    currentQuestion = questions.pop();
    answer = askQuestion(currentQuestion);
    checkAnswer(answer, currentQuestion);
}
showResult();