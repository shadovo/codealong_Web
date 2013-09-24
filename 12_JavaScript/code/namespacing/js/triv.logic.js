/*jslint browser:true */
/*global triv: false, wui: false, settingsFile: false, OpenLayers: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.logic = (function () {
    'use strict';
    var questions = [];
    function askQuestion(question) {
        var answer;
        do {
            answer = Number(triv.ui.askQuestion(question));
        } while (answer > 3 || answer < 1 || isNaN(answer));
        return answer;
    }

    function checkAnswer(answer, question) {
        if (answer === question.a) {
            triv.ui.showCorrect();
            return true;
        }
        triv.ui.showWrong(question);
        return false;
    }
    function getQuestion() {
        if (questions.length < 2) {
            questions = _.shuffle(triv.questions);
        }
        return questions.pop();
    }
    return {
        askQuestion: askQuestion,
        checkAnswer: checkAnswer,
        getQuestion: getQuestion
    };
}());
