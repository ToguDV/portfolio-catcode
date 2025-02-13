const images = [
        'img/about/4.png',
    'img/about/spacecat.png'
];

const elementId = 'miElemento'; // Cambia esto por el ID de tu elemento
const timePanik = 1000; // Alterna cada 2s después del primer cambio
const timeRestore = 11000; // Alterna cada 2s después del primer cambio
let index = 0;


setTimeout(delay, 1000)

function changeImage(img) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.transition = 'background-image 0.7s ease-in-out';
        element.style.backgroundImage = `url('${img}')`;
    }
}

function delay() {
    reactions();
    setInterval(reactions, 15000); 
}

function reactions() {
    setTimeout(changeImage, timePanik, images[1]);
    setTimeout(changeImage, timeRestore, images[0]);
}



