const progress = document.getElementById('progress');

const form = document.getElementById('form');

form.onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (e) => { progress.value = e.loaded / e.total };
    xhr.upload.onload = () => { alert('Данные загружены.') };

    xhr.open('POST', form.action);
    xhr.send(formData);

}
