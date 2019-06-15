let responsivelyMode = 'PC';

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
    responsively();
});
$(window).resize(() => {
    responsively();
});

function responsively() {
    const width = $(document).width();
    const $userDiv = $('.user-base');
    const $hamburger = $('.hamburger-menu');
    if (width <= 800) {
        if (responsivelyMode === 'Tel') return;
        turnTel();
    } else {
        if (responsivelyMode === 'PC') return;
        turnPC();
    }

    function turnTel() {
        $userDiv.hide();
        $hamburger.show();
        responsivelyMode = 'Tel';
    }

    function turnPC() {
        $hamburger.hide();
        $('.hamburger-modal').fadeOut();
        $userDiv.show();
        responsivelyMode = 'PC';
    }
}

function hamburguerMenu() {
    $('.hamburger-modal').fadeToggle('fast');
}