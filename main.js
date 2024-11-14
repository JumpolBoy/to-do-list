const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    
    taskInput.value = '';
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});