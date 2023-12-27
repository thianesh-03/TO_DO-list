const taskInput = document.getElementById('task_input');
const addButton = document.getElementById('add_task');
const taskList = document.getElementById('task_list');

addButton.addEventListener('click',function(){
    const taskText = taskInput.value;

    if(taskText != ''){
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task_list');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Task';
        deleteButton.classList.add('delete_button');
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});

taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('delete_button')) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});