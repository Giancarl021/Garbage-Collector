Array.prototype.shuffle = function () {
    let currentIndex = this.length;
    const array = this.slice();

    while (currentIndex !== 0) {
        const rand = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = array[currentIndex];
        array[currentIndex] = array[rand];
        array[rand] = temp;
    }

    return array;
};

async function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function get(url) {
    return await (await fetch(url)).json();
}

async function digitFx(element, text, milliseconds, start = 0, end = '') {
    if (start) {
        await delay(start);
        element.innerText = '';
    }
    if (text.length === 0) {
        if(end) {
            const endingAttributes = JSON.parse(end);
            for(const key in endingAttributes) {
                if(endingAttributes.hasOwnProperty(key)) {
                    element.setAttribute(key, endingAttributes[key]);
                }
            }
        }
        return;
    }
    element.innerHTML += text.charAt(0).replace(' ', '&nbsp');
    await delay(milliseconds);
    digitFx(element, text.substr(1), milliseconds, 0, end).catch(console.log);
}

async function loadRepos() {
    const allRepos = await get('https://api.github.com/users/Giancarl021/repos');
    const repos = await Promise.all(
        allRepos
            .shuffle()
            .map(repo => get(repo.url))
    );

    const cards = [];
    for(const repo of repos) {
        console.log(repo);
        cards.push(`<h1>${repo.name}</h1>`);
    }

    for(const card of cards) {
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    }
}

function init() {
    console.log('a');
    const digitDivs = document.getElementsByClassName('digit-text');
    for (const div of digitDivs) {
        digitFx(
            div,
            div.getAttribute('data-text'),
            div.getAttribute('data-milliseconds'),
            div.getAttribute('data-start'),
            div.getAttribute('data-end')
        ).catch(console.log);
    }
    loadRepos();
}

document.addEventListener('DOMContentLoaded', init);
