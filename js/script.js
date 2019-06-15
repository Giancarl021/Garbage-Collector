function sendLike(question) {
    // Requisição PHP para alterar os likes de uma questão
    // Recupera em question o elemento 'question-card' que possui a questão clicada
}

function sendDislike(question) {
    // Requisição PHP para alterar os dislikes de uma questão
    // Recupera em question o elemento 'question-card' que possui a questão clicada
}

function sendQuestion(question, text) {
    // Requisição PHP para enviar uma nova pergunta ou resposta para o servidor
    // Recupera em question o elemento 'question-card' que possui a questão clicada (porém sem os dados de likes/dislikes e botões de ação)
    // Recupera em text o texto digitado na textarea
}


/* Efeitos visuais (Não mexer) */

let responsivelyMode = 'PC';

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

function hamburguerMenu(modal, src) {
    if (src) {
        $(modal).children('.input-modal-header').children('*').remove();
        if (typeof src !== 'string') {
            const $el = $(src).clone();
            $el.children('.question-buttons, .question-comments').remove();
            $(modal).children('.input-modal-header').append($el);
        } else {
            $(`<div class="question-card border" style="overflow: auto"><span class="username">Nome do Site</span><p class="question-text">${src}</div>`).appendTo('.input-modal-header');
        }
    }
    $(modal).slideToggle(300);
}