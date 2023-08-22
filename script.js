const audio = new Audio('../ressources/song/click.mp3');
const body = document.querySelector('body');
const box = document.getElementById('menu');

function audioPlay() {
    audio.play();
    body.style.opacity = '0';
    setTimeout(() => {
        body.style.opacity = '1';
    }, 200);
}

function closeMenu() {
    box.click();
}

const images = document.querySelectorAll('img');

images.forEach(img => {
    img.oncontextmenu = () => {return false};
    img.ondragstart = () => {return false};

    if (img.src === 'https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png'){
        img.remove();
    }
});