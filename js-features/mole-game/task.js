let deadSpan = document.getElementById('dead');
let lostSpan = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener('click', function () {
        if (hole.className.includes('hole_has-mole')) {
            deadSpan.textContent++;
        } else {
            lostSpan.textContent++;
        }

        if (deadSpan.textContent === '10') {
            endGame('Победа! Вы победили кротов!');
        } else if (lostSpan.textContent === '5') {
            endGame('Игра окончена! Вы проиграли.');
        }
    });
}

function endGame(message) {
    alert(message);
    deadSpan.textContent = 0;
    lostSpan.textContent = 0;
}



