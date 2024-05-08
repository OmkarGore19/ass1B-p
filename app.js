document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;

        if (title.trim() === '') {
            alert('Task title is required.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskContent = document.createElement('span');
        taskContent.innerText = `${title}: ${desc}`;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeBtn = document.createElement('input');
        completeBtn.type = 'checkbox';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        taskList.appendChild(taskItem);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActions);
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        // Clear form inputs
        taskForm.reset();

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        completeBtn.addEventListener('change', () => {
            taskContent.style.textDecoration = completeBtn.checked ? 'line-through' : 'none';
        });
    });
});
