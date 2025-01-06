const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book__content');
let currentIndex = 1;

fonts.forEach((el, index) => {
    el.addEventListener('click', event => {
        event.preventDefault();

        fonts[currentIndex].classList.remove('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');

        el.classList.add('font-size_active');
        if (el.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        } else if (el.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } 
        
        currentIndex = index;
    })
})