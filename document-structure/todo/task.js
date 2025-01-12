const taskList = document.getElementById('tasks__list');

const taskPattern = document.querySelector('.task').cloneNode(true);
document.querySelector('.task').remove();

document.getElementById('tasks__add').addEventListener('click', e => {
    e.preventDefault();
    const taskInput = document.getElementById('task__input');
    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        const task = taskPattern.cloneNode(true);       
        task.querySelector('.task__title').innerText = taskTitle;
        task.querySelector('.task__remove').addEventListener('click', e => {
            e.preventDefault();
            e.target.parentNode.remove();
        })
        taskList.appendChild(task);
        taskInput.value = '';
    }
});
