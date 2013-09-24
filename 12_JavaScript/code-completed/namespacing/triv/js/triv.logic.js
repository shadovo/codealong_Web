/*jslint browser:true */
/*global triv: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.logic = {};
triv.logic.askQuestion = function (question) {
    "use strict";
    var answer;
    do {
        answer = Number(triv.ui.askQuestion(question));
    } while (isNaN(answer) || answer > 3 || answer < 1);
    return answer;
};
triv.logic.checkAnswer = function (answer, question) {
    "use strict";
    if (answer === question.a) {
        triv.ui.showCorrect();
    } else {
        triv.ui.showWrong(question);
    }
    return (answer === question.a);
};
triv.logic.getQuestions = function () {
    "use strict";
    return _.shuffle(triv.questions);
};