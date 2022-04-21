const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"    
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const addressImage = `url("./img/${chosenImage}")`;
document.body.style.backgroundImage = addressImage




/*
const bgImages = document.createElement("img");
bgImages.src = `url(../img/${chosenImage})`;

document.body.style.background = bgImages.src;
document.body.appendChild(bgImages);
*/