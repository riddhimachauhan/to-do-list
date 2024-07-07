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
    
}



function goBack() {
    window.location.href = 'tdl.html';
}

// Initializes the tasks display on section page load
window.onload = function() {
    if (window.location.pathname.includes('section.html')) {
        document.getElementById('section-title').innerText = localStorage.getItem('currentSection');
        displayTasks();
    }
};
