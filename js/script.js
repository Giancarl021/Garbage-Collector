function init() {
    console.log('initializing page');
    const roulette = document.getElementsByClassName('roulette')[0];
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = 'img/folder.png';
        img.style.opacity = (i === 0) ? '1' : '0';
        img.style.filter = `hue-rotate(${i * 75}deg)`;
        roulette.appendChild(img);
    }

    setInterval(() => {
        changeRouletteImg(roulette)
    }, 7000);
}

function changeRouletteImg(element) {
    const images = Array.prototype.slice.call(element.getElementsByTagName('img'), 0);
    const image = images.filter(e => {
        return e.style.opacity === '1';
    })[0];

    const index = images.indexOf(image);
    let neighbor;
    if (index === images.length) {
        neighbor = images[0];
    } else {
        neighbor = images[index + 1];
    }

    neighbor.style.opacity = '1';
    image.style.opacity = '0';
}

document.addEventListener('DOMContentLoaded', init);
