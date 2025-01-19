
const items = document.querySelector('#items');
const itemPattern = items.querySelector('.item').cloneNode(true);
items.querySelector('.item').remove();

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {

        const valute = JSON.parse(xhr.responseText).response.Valute;

        for (let key in valute) {
            let item = itemPattern.cloneNode(true);
            item.querySelector('.item__code').innerText = valute[key].CharCode;
            item.querySelector('.item__value').innerText = valute[key].Value;
            items.appendChild(item);
        }

        document.querySelector('img').classList.remove('loader_active');
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();