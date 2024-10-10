const loadButton = document.querySelector('#load-presents');
const addButton = document.querySelector('#add-present')
const editButton = document.querySelector('#edit-present');

const url = 'http://localhost:3030/jsonstore/gifts/';
const giftList = document.querySelector('#gift-list');
let _id = ''

let giftInputElement = document.querySelector('#gift');
let forInputElement = document.querySelector('#for');
let priceInputElement = document.querySelector('#price');

function loadData(data) {
    giftList.innerHTML = ''
    Object.values(data).forEach(x => {
        giftList.innerHTML +=`
            <div class="gift-sock" id=${x._id}>
                <div class="content">
                    <p>${x.gift}</p>
                    <p>${x.for}</p>
                    <p>${x.price}</p>
                </div>
                <div class="buttons-container">
                    <button class="change-btn"onclick='changeRecord(this)'>Change</button>
                    <button class="delete-btn"onclick='deleteRecord(this)'>Delete</button>
                </div>
            </div>    
        `
    })
}

function clearInputFields() {
    giftInputElement.value = ''
    forInputElement.value = ''
    priceInputElement.value = ''
}

function changeRecord(e) {
    _id = e.parentNode.parentNode.id;

    for (let div of giftList.children) {
        if (_id == div.id) {
            let content = div.firstElementChild;
            giftInputElement.value = content.children[0].textContent;
            forInputElement.value = content.children[1].textContent;
            priceInputElement.value = content.children[2].textContent;

            editButton.disabled = false;
            addButton.disabled = true;            
            giftList.removeChild(div);
            break;
        }
    }
}

editButton.addEventListener('click', function() {
    let putObj = {
        'gift': giftInputElement.value,
        'for': forInputElement.value,
        'price': priceInputElement.value,
        '_id': _id,
    }

    async function edit() {
        const putResponse = await fetch(`${url}${_id}`, {
            method: 'PUT',
            body: JSON.stringify(putObj)
        })
        
        const putData = await putResponse.json()
        const getResponse = await fetch(url)
        const getData = await getResponse.json();

        editButton.disabled = true;
        addButton.disabled = false;
        
        loadData(getData)
        clearInputFields()
    }

    return edit()
})

function deleteRecord(e) {
    _id = e.parentNode.parentNode.id;
    
    (async function del() {
        const deleteResponse = await fetch(`${url}${_id}`, {
            method: 'DELETE'
        })
        const getResponse = await fetch(url)
        const getData = await getResponse.json()
        giftList.innerHTML = ''
        loadData(getData)
    })()
}

loadButton.addEventListener('click', function() {
    (async function load () {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error");
            }
            const data = await response.json();
            loadData(data)
        } catch {
            console.log('Error fetching data');
        }
    
        editButton.disabled = true;
    })()
    
})

addButton.addEventListener('click', function() {
    const postObj = {
        'gift': giftInputElement.value,
        'for': forInputElement.value,
        'price': priceInputElement.value,
    }

    async function addPresent () {
        try {
            const postResponse = await fetch(url, {
                method : 'POST',
                body: JSON.stringify(postObj)
            });
            const postData = await postResponse.json();
            const getResponse = await fetch(url);
            const getData = await getResponse.json();
            loadData(getData)
        } catch {
            console.log('Error');            
        }

        clearInputFields()
    }

    return addPresent()
})

