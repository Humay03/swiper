const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');

const images = [
    "https://wallpapercat.com/w/full/7/1/9/210867-1920x1132-desktop-hd-attack-on-titan-the-final-season-wallpaper-photo.jpg",
    "https://images4.alphacoders.com/804/80406.jpg",
    "https://wallpapercave.com/wp/wp6439507.jpg"
];

const headings = ["Attack on Titan", "Bleach", "Death Note"];
const descriptions = ["Paradise", "Soul Society", "Death Note"];

let id = 0;

function slide() {
    slider.style.backgroundImage = `url(${images[id]})`;
    slider.classList.add('image-fade');

    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);

    heading.innerText = headings[id];
    description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
    id = (id - 1 + images.length) % images.length; 
    slide();
});


arrRight.addEventListener('click', () => {
    id = (id + 1) % images.length; 
    slide();
});

slide();

