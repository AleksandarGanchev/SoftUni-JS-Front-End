const loadButton = document.querySelector('#load-games');
const addButton = document.querySelector('#add-game');
const editButton = document.querySelector('#edit-game');
const nameInputElement = document.querySelector('#g-name');
const TypeInputElement = document.querySelector('#type');
const playersInputElement = document.querySelector('#players');
const gameList = document.querySelector('#games-list');
const url = 'http://localhost:3030/jsonstore/games/';

let _id = ''

function clearInputFields() {
    nameInputElement.value = ''
    TypeInputElement.value = ''
    playersInputElement.value = ''
}

function loadData(data) {
    gameList.innerHTML = ''
    Object.values(data).forEach(x => {            
        gameList.innerHTML +=
            `<div class="board-game" id=${x._id}>
                <div class="content">
                <p>${x.name}</p>
                <p>${x.type}</p>
                <p>${x.players}4</p>
            </div>
            <div class="buttons-container">
                <button class="change-btn" onclick='changeRecord(this)'>Change</button>
                <button class="delete-btn" onclick='deleteRecord(this)'>Delete</button>
            </div>    `
       })
}

function changeRecord(e) {
    _id = e.parentNode.parentNode.id;        
    editButton.disabled = false;
    addButton.disabled = true;
    let contentDiv = e.parentNode.parentNode.firstElementChild;
    nameInputElement.value = contentDiv.children[0].textContent;
    TypeInputElement.value = contentDiv.children[1].textContent;
    playersInputElement.value = contentDiv.children[2].textContent;
    gameList.removeChild(contentDiv.parentNode)
}

function deleteRecord(e) {
    _id = e.parentNode.parentNode.id;
    
    fetch(`${url}${_id}`, {
        method: 'DELETE'
    })
    .then(() => {
        return fetch(url)
    })
    .then(res => res.json())
    .then(data => {
        gameList.innerHTML = ''
        Object.values(data).forEach(x => {
            loadData(data)            
            })
    })
}

loadButton.addEventListener('click', ()=> {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            loadData(data)
        })
})

editButton.addEventListener('click', ()=> {    
    let putObject = {
        'name': nameInputElement.value,
        'type': TypeInputElement.value,
        'players': playersInputElement.value,
        "_id" : _id
    }
  
    fetch(`${url}${_id}`, {
        method: 'PUT',
        body: JSON.stringify(putObject)
    })
    .then(()=> {
        return fetch(url)
    })
    .then(res => res.json())
    .then(data => {
        gameList.innerHTML = ''
        Object.values(data).forEach(x => {
            loadData(data)        
            })

        clearInputFields()    
    })
})

addButton.addEventListener('click', ()=> {
    let postObj = {
        'name': nameInputElement.value,
        'type': TypeInputElement.value,
        'players': playersInputElement.value,
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
    })
    .then(() => {
        return fetch(url)
    })
    .then(res => res.json())
    .then(data => {
        loadData(data)
    })

    clearInputFields()
})
