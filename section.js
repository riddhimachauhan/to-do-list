document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTask);

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        newTask.appendChild(checkbox);
        newTask.appendChild(taskContent);
        taskList.appendChild(newTask);

        taskInput.value = '';
        saveTasks();

    }
}

function toggleTask(event) {
    const checkbox = event.target;
    const taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.classList.add('completed');
        
    } else {
        taskItem.classList.remove('completed');

        
    }
    saveTasks();
}
function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(taskItem => {
        const taskText = taskItem.querySelector('span').textContent;
        const isCompleted = taskItem.querySelector('input').checked;
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    tasks.forEach(task => {
        const newTask = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', toggleTask);

        const taskContent = document.createElement('span');
        taskContent.textContent = task.text;

        if (task.completed) {
            newTask.classList.add('completed');
        }

        newTask.appendChild(checkbox);
        newTask.appendChild(taskContent);
        taskList.appendChild(newTask);
    });
}
function goBack() {
    window.location.href = 'tdl.html';
}

// Initializes the tasks display on section page load
window.onload = function() {
    if (window.location.pathname.includes('section.html')) {
        document.getElementById('section-title').innerText = localStorage.getItem('currentSection');
        loadTasks();
    }
};
