window.addEventListener("load", solve);

function solve() {
    let nameElement = document.getElementById('name');
    let numberElement = document.getElementById('phone');
    let categoryElement = document.getElementById('category');
    
    let checkList = document.getElementById('check-list');
    let contactList = document.getElementById('contact-list');
    let addButton = document.getElementById('add-btn'); 

    
    addButton.addEventListener('click', (e) => {
        if (nameElement.value == '' || numberElement.value == '' || categoryElement.value == '') {
            return;
        }

        let liElement = document.createElement('li');
        let articleElement = document.createElement('article');

        let nameP = document.createElement('p');
        nameP.textContent = `name:${nameElement.value}`;
        let numberP = document.createElement('p');
        numberP.textContent = `phone:${numberElement.value}`;
        let categoryP = document.createElement('p');
        categoryP.textContent = `category:${categoryElement.value}`;

        let divElement = document.createElement('div');
        divElement.className = 'buttons';
        let editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        let saveButton = document.createElement('button');
        saveButton.className = 'save-btn';

        divElement.appendChild(editButton);
        divElement.appendChild(saveButton);

        articleElement.appendChild(nameP);
        articleElement.appendChild(numberP);
        articleElement.appendChild(categoryP);

        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);

        checkList.appendChild(liElement);

        nameElement.value = '';
        numberElement.value = '';
        categoryElement.value = '';

        editButton.addEventListener('click', e => {
            let [name, text] = nameP.textContent.split(":")
            nameElement.value = text;

            let [number, text2] = numberP.textContent.split(":")
            numberElement.value = text2;

            let [category, text3] = categoryP.textContent.split(":")
            categoryElement.value = text3;
            checkList.removeChild(liElement);
        })
        
        saveButton.addEventListener('click', (e) => {
            liElement.removeChild(divElement);
            let delButton = document.createElement('button');
            delButton.className = 'del-btn';
            liElement.appendChild(delButton);
            contactList.appendChild(liElement);

            delButton.addEventListener('click', (e) => {
                contactList.removeChild(liElement);
            })       
        })
    })
}
