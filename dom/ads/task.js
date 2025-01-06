const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let currentIndex = 0;

setInterval(() => {
    rotators[currentIndex].classList.remove('rotator__case_active');
    currentIndex === rotators.length - 1 ? currentIndex = 0 : currentIndex++;
    rotators[currentIndex].classList.add('rotator__case_active');
}, 1000)