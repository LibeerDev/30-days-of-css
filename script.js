const allLinks = document.querySelectorAll('a');

let lightness = 0;
let saturation = 0;

allLinks.forEach((link) => {
    link.style.backgroundColor = `hsl(297, ${saturation}%, ${lightness}%)`;
    lightness += 1;
    saturation += 1;
});