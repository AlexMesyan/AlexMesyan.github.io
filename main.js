const clickable = document.body;
const white = document.getElementById('image_white');
const black = document.getElementById('image_black');
const screen = document.getElementById('body');
function whiteOpa () {
    white.style.opacity = '100';  
    screen.style.backgroundColor = 'white';  
}
whiteOpa();
addEventListener('click', () => {
    if (white.style.opacity == '100') {
        white.style.opacity = '0'
        black.style.opacity = '100';
        screen.style.backgroundColor = 'rgb(5, 21, 51)'
    }
    else {
        white.style.opacity = '100';
        black.style.opacity = '0';
        screen.style.backgroundColor = 'white'
    }
})