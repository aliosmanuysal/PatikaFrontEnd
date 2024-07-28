document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const toastContainer = document.getElementById('toastContainer');

    // Load tasks from localStorage
    loadTasks();

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            showToast('Task cannot be empty.', 'bg-danger');
            return;
        }

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm me-2 mark-complete">Complete</button>
                <button class="btn btn-danger btn-sm delete-task">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        saveTasks();

        taskInput.value = '';
        showToast('Task added successfully.', 'bg-success');
    }

    function handleTaskActions(e) {
        if (e.target.classList.contains('delete-task')) {
            e.target.closest('li').remove();
            showToast('Task deleted.', 'bg-warning');
        } else if (e.target.classList.contains('mark-complete')) {
            const task = e.target.closest('li').querySelector('span');
            task.classList.toggle('completed');
            showToast('Task marked as complete.', 'bg-info');
        }
        saveTasks();
    }

    function showToast(message, bgColorClass) {
        const toast = document.createElement('div');
        toast.className = `toast align-items-center text-white ${bgColorClass} border-0`;
        toast.role = 'alert';
        toast.ariaLive = 'assertive';
        toast.ariaAtomic = 'true';
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;

        toastContainer.appendChild(toast);
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();

        toast.addEventListener('hidden.bs.toast', () => {
            toast.remove();
        });
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            tasks.push({
                text: task.querySelector('span').textContent,
                completed: task.querySelector('span').classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                    <div>
                        <button class="btn btn-success btn-sm me-2 mark-complete">Complete</button>
                        <button class="btn btn-danger btn-sm delete-task">Delete</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }
    }
});