
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie) return cookie.substring(name.length + 1);
    return false;
}

if (!getCookie('modalClose')) {
    const modal = document.querySelector('#subscribe-modal');
    modal.classList.add('modal_active');
    document.querySelector('.modal__close').addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'modalClose=true';
    })
}
