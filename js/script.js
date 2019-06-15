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

// Caso queira avisar um erro ao usuário, use a função showError('Erro'), assim irá aparecer um aviso por 2.5s na tela com texto passado por parâmetro

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
        $('form').css('width', '95%');
        responsivelyMode = 'Tel';
    }

    function turnPC() {
        $hamburger.hide();
        $('.hamburger-modal').fadeOut();
        $userDiv.show();
        $('form').css('width', '40%');
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

function showError(message) {
    const $err = $('#err');
    $err.text(message).fadeIn(300, () => {
        setInterval(() => {
            $err.fadeOut(300);
        }, 2500);
    });
}