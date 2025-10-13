const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
let pos = 0;

function myAnimation() {
    if (pos < 300) {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + 'px';
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => {
    requestAnimationFrame(myAnimation);
});
