function sendLike(question) {

}

function sendDislike(question) {

}

function showAnswers(question) {
    $(question).next().slideToggle('fast');
    const $originBtn = $(question).children('.question-comments').children('.question-answers-btn');
    $originBtn.text($originBtn.text() === '[/\\]' ? '[\\/]' : '[/\\]');
}

$(document).ready(() => {

});