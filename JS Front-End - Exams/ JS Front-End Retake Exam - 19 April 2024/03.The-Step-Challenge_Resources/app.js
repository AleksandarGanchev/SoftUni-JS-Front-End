const loadButton = document.querySelector('#load-records');
const editButton = document.querySelector('#edit-record');
const addButton = document.querySelector('#add-record');
const ulElement = document.querySelector('#list');
const url = 'http://localhost:3030/jsonstore/records/';

let id = ''
let liElement = ''

function deleteRecord(e) {
    id = e.parentNode.parentNode.firstElementChild.id;        
    fetch(`${url}${id}`, {
        method: 'DELETE',
    })
}

function changeRecord(e) {
    id = e.parentNode.parentNode.firstElementChild.id;
    let divs = document.querySelectorAll('.info');
        for (let div of divs) {
            if (id == div.id) {                    
                ulElement.removeChild(div.parentNode);           
            }
        }

    let pInfo = e.parentNode.previousElementSibling
    let name = pInfo.children[0].innerHTML;
    let steps = pInfo.children[1].innerHTML;
    let calories = pInfo.children[2].innerHTML;
        
    document.querySelector('#p-name').value = name;
    document.querySelector('#steps').value = steps;
    document.querySelector('#calories').value = calories;
    
    editButton.disabled = false;
    addButton.disabled = true;
}

editButton.addEventListener('click', (e) => {
    let name = document.querySelector('#p-name').value;
    let steps = document.querySelector('#steps').value;
    let calories = document.querySelector('#calories').value
    let _id = id;
    let newObj =  {
        name,
        steps,
        calories,
        _id,
    }
    
    fetch(`${url}${id}`, {
        method: 'PUT',
        body: JSON.stringify(newObj)
    })
    .then(() => {
        return fetch(url)
    })
    editButton.disabled = true;
    addButton.disabled = false;
    document.querySelector('#p-name').value = ''
    document.querySelector('#steps').value = ''    
    document.querySelector('#calories').value = ''            
})     

loadButton.addEventListener('click', () => {
    ulElement.innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(x => {                    
                let liElement = document.createElement('li');
                liElement.setAttribute('class', 'record');
                liElement.innerHTML = `
                    <div class='info' id='${x._id}'>
                        <p>${x.name}</p>
                        <p>${x.steps}</p>
                        <p>${x.calories}</p>
                    </div>
                    <div class="btn-wrapper">
                        <button class="change-btn" onclick='changeRecord(this)'>Change</button>
                        <button class="delete-btn" onclick="deleteRecord(this)">Delete</button>
                    </div>
                `
                ulElement.appendChild(liElement);
                editButton.disabled = true;   
            })
    })
})

addButton.addEventListener('click', () => {
    const postData = {
        'name': document.querySelector('#p-name').value,
        'steps': document.querySelector('#steps').value,
        'calories': document.querySelector('#calories').value, 
    }

    document.querySelector('#p-name').value = ''
    document.querySelector('#steps').value = ''    
    document.querySelector('#calories').value = ''        
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => {
        editButton.disabled = true;
        return fetch(url)
    })   
})
