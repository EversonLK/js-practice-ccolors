// 1. Find the button and the slider
const myButton = document.getElementById('buttonChangeColor');
const mySlider = document.querySelector('input');

// 2. When the button is clicked, change the background color
myButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
});

// 3. When the slider moves, change the background color
mySlider.addEventListener('input', function() {
    document.body.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
});
