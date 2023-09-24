const allCircles = document.querySelectorAll('#circle');

let circleLightness = 50;
let circleHue = 0;
let circleSaturation = 50;
let increment = 0.5;


allCircles.forEach((circle) => {
    circle.style.backgroundColor = `hsl(${circleHue}, ${circleSaturation}%, ${circleLightness}%)`;
    circleHue += 20;
    circle.style.animation = `rectangularMotion ${increment}s infinite linear`;
    increment += 0.2;
});