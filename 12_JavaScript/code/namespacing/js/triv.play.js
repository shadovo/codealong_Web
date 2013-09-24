/*jslint browser:true */
/*global triv: false, wui: false, settingsFile: false, OpenLayers: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
triv.play = function () {
    'use strict';
    var i,
        answer,
        currentQuestion,
        points = 0;
    for (i = 0; i < 3; i += 1) {
        currentQuestion = triv.logic.getQuestion();
        answer = triv.logic.askQuestion(currentQuestion);
        if (triv.logic.checkAnswer(answer, currentQuestion)) {
            points += 1;
        }
    }
    triv.ui.showResult(points);
};
triv.play();
var a, b;

function a() {
    'use strict';
    return b();
}

function b() {
    'use strict';
    return a();
}