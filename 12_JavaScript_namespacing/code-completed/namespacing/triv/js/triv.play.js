/*jslint browser:true */
/*global triv: false,alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.play = function () {
    "use strict";
    var i, answer, currentQuestion,
        result = 0,
        questions = triv.logic.getQuestions();
    for (i = 0; i < 3; i = i + 1) {
        currentQuestion = questions.pop();
        answer = triv.logic.askQuestion(currentQuestion);
        if (triv.logic.checkAnswer(answer, currentQuestion)) {
            result += 1;
        }
    }
    triv.ui.showResult(result);
};