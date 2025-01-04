const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.onclick = () => { dropdownList.classList.toggle('dropdown__list_active') };

dropdownLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        dropdownValue.textContent = event.currentTarget.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    })
})




