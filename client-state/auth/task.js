const userId = localStorage.getItem('userId');

// Обновить содержимое страницы при наличии / отсутствии userId
function pageUpdate() {
    if (userId) {
        document.getElementById('user_id').textContent = userId;
        document.getElementById('welcome').classList.add('welcome_active');
        document.getElementById('signin').classList.remove('signin_active');
    } else {
        document.getElementById('welcome').classList.remove('welcome_active');
        document.getElementById('signin').classList.add('signin_active');
    }
}

pageUpdate();

if (!userId) {

    const form = document.getElementById('signin__form');

    form.onsubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === xhr.DONE) {
                const responceText = xhr.responseText;
                if (xhr.status >= 400) {
                    alert('Ошибка:\n' + responceText);
                } else {
                    const responce = JSON.parse(responceText);
                    if (responce.success) {
                        userId = responce.user_id;
                        localStorage.setItem('userId', userId);
                        pageUpdate();
                    }
                }
            }
        }

        xhr.open('POST', form.action);
        xhr.send(formData);

    }
}


