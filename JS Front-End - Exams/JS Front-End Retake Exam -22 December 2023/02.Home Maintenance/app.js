window.addEventListener("load", solve);

function solve() {
    let placeElement = document.getElementById('place');
    let actionElement =document.getElementById('action');
    let personElement =document.getElementById('person');

    let taskList = document.getElementById('task-list');
    let doneList = document.getElementById('done-list');
    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', (e) => {
        if (placeElement.value == '' || actionElement.value == '' || personElement.value == '') {
            return;
        }

        let liElement = document.createElement('li');
        liElement.className = 'clean-task';
        let articleElement = document.createElement('article');

        let placeP = document.createElement('p');
        let placeElementValue = placeElement.value;
        placeP.textContent = `Place:${placeElementValue}`
        let actionP = document.createElement('p');
        let actionElementValue = actionElement.value;
        actionP.textContent = `Action:${actionElementValue}`;
        let personP = document.createElement('p');
        let personElementValue = personElement.value;
        personP.textContent =`Person:${personElementValue}`;

        let divELement = document.createElement('div');
        divELement.className = 'buttons';
        let editButton = document.createElement('button');
        editButton.className ='edit';
        editButton.textContent = 'Edit';
        let doneButton = document.createElement('button');
        doneButton.className = 'done';
        doneButton.textContent = 'Done';

        divELement.appendChild(editButton);
        divELement.appendChild(doneButton);
        articleElement.appendChild(placeP);
        articleElement.appendChild(actionP);
        articleElement.appendChild(personP);

        liElement.appendChild(articleElement);
        liElement.appendChild(divELement);
        taskList.appendChild(liElement);

        placeElement.value = '';
        actionElement.value = '';
        personElement.value = '';

        editButton.addEventListener('click', (e) => {
            placeElement.value = placeElementValue;
            actionElement.value = actionElementValue;
            personElement.value = personElementValue;
            taskList.removeChild(liElement);
        })
        
        doneButton.addEventListener('click', (e) => {
            taskList.removeChild(liElement);
            
            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.textContent = 'Delete';

            let newLiElement = document.createElement('li');
            newLiElement.appendChild(articleElement);
            newLiElement.appendChild(deleteButton);
            doneList.appendChild(newLiElement);

            deleteButton.addEventListener('click', (e) => {
                doneList.removeChild(newLiElement);
            })      
        })
    })
}