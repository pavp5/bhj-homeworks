let cookieImg = document.getElementById('cookie');
let evenWidth = cookieImg.width;
let evenHeight = cookieImg.height;
let oddWidth = evenWidth * 1.5;
let oddHeight = evenHeight * 1.5;
let clickerCounter = document.getElementById('clicker__counter');
cookieImg.onclick = () => {
    clickerCounter.textContent ++;
    cookieImg.width = (clickerCounter.textContent % 2 != 0) ? oddWidth : evenWidth;
    cookieImg.height = (clickerCounter.textContent % 2 != 0) ? oddHeight : evenHeight;
} 