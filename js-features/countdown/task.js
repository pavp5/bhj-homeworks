let intervalId = setInterval(() => {
    let timer = document.getElementById('timer');
    timer.textContent --;
    if (timer.textContent < 1) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }    
}, 1000)
