const url = 'http://localhost:3030/jsonstore/tasks/';
const loadButton = document.querySelector('#load-meals');
const addButton = document.querySelector('#add-meal');
const editButton = document.querySelector('#edit-meal');
const divList = document.querySelector('#list');

const foodInputElement = document.querySelector('#food');
const timeInputElement = document.querySelector('#time');
const caloriesInputElement = document.querySelector('#calories');

let _id = '';

function clearInputFields() {
    foodInputElement.value = ''
    timeInputElement.value = ''
    caloriesInputElement.value = ''
}

function loadData(data) {
    divList.innerHTML = ''
    Object.values(data).forEach(x => {
        divList.innerHTML += `
            <div class="meal" id=${x._id}>
                <h2>${x.food}</h2>
                <h3>${x.time}</h3>
                <h3>${x.calories}</h3>
                <div id="meal-buttons">
                    <button class="change-meal" onclick='changeMeal(this)'>Change</button>
                    <button class="delete-meal" onclick='deleteMeal(this)'>Delete</button>
                </div>
            </div>`
    })

    editButton.disabled = true;
}

function changeMeal(e) {
    _id = e.parentNode.parentNode.id;
     
    for (div of divList.children) {
        if (div.id == _id) {
            foodInputElement.value = div.children[0].textContent;
            timeInputElement.value = div.children[1].textContent;
            caloriesInputElement.value = div.children[2].textContent;
            divList.removeChild(div)
            break;
        }
    }
    editButton.disabled = false;
    addButton.disabled = true;
}

editButton.addEventListener('click', function() {
    postObj = {
        'food' : foodInputElement.value,
        'calories': caloriesInputElement.value,
        'time': timeInputElement.value,
        '_id': _id
    }

    async function editData() {
        const postResponse = await fetch(`${url}${_id}`, {
            method: 'PUT',
            body: JSON.stringify(postObj)
        })
        const getResponse = await fetch(url)
        const getData = await getResponse.json();
        loadData(getData)            
    }
    
    editData()
    clearInputFields()
})

function deleteMeal(e) {
    _id = e.parentNode.parentNode.id;

    async function deleteField() {
        const deleteResponse = await fetch(`${url}${_id}`, {
            method: "DELETE"
        })
        const getResponse = await fetch(url)
        const getData = await getResponse.json()
        loadData(getData) 
    }

    deleteField()
}

loadButton.addEventListener('click', function() {

    async function load ()  {
        const getResponse = await fetch(url);
        const getData = await getResponse.json();      
        loadData(getData)
    }
    
    load()
})

addButton.addEventListener('click', function() {
    postObj = {
        'food': foodInputElement.value,
        'calories': caloriesInputElement.value,
        'time': timeInputElement.value,
    }
    async function addData() {
        const postResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(postObj)
        })
        const getResponse = await fetch(url)
        const getData = await getResponse.json()
        loadData(getData)
        
    }

    addData()
    clearInputFields()
})