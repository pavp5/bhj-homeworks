const textarea = document.querySelector('#editor');
const editText = localStorage.getItem("editText");
if (editText) {
    textarea.innerText = editText;
}

window.onbeforeunload = (e) => {    
    localStorage.editText = textarea.value;    
    e.stopImmediatePropagation();   //что бы не появлялось окно-предупреждение о несохраненных данных
} 
