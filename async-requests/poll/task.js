const pollAnswers = document.querySelector('#poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        const response = JSON.parse(xhr.responseText);

        document.querySelector('#poll__title').innerText = response.data.title;

        Array.from(response.data.answers).forEach(caption => {
            let button = document.createElement('button');
            button.innerText = caption;
            button.classList.add('poll__answer');
            pollAnswers.appendChild(button);
            button.onclick = () => alert('Спасибо, ваш голос засчитан!');
        })

    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();