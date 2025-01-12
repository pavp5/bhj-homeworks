const taskList = document.getElementById('tasks__list');

const taskPattern = document.querySelector('.task').cloneNode(true);
document.querySelector('.task').remove();

const taskInput = document.getElementById('task__input');
taskInput.addEventListener('keyup', (e) => {if (e.key === 'Enter') taskAdd()});

document.getElementById('tasks__add').addEventListener('click', e => {
    e.preventDefault();
    taskAdd();
});

function taskAdd() {    
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
}