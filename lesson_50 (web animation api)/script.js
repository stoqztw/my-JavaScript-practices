'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0)',
                filter: 'opacity(1)',
                width: '300px'
            },
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(.5)',
                width: '500px'
            },
            {
                transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(.75)',
                width: '600px'
            },
            {
                transform: 'translateY(0px) rotate(360deg)',
                filter: 'opacity(1)',
                width: '300px'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});