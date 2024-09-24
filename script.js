const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    //HINT # 2: offsetWidth and offsetHeight are properties of html elements

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)

    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});