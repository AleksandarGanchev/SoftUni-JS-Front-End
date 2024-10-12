function attachEvents() {
    const loadButton = document.querySelector('#btnLoad');
    const createButton = document.querySelector('#btnCreate');
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const ulPhoneBookElement = document.querySelector('#phonebook');
    
    loadButton.addEventListener('click', function() {
        ulPhoneBookElement.innerHTML = ''
        fetch(url)        
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([id, info]) => {
                    let liElement = document.createElement('li');
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    liElement.textContent = `${info.person}: ${info.phone}`
                    liElement.appendChild(deleteButton);
                    ulPhoneBookElement.appendChild(liElement);
                    
                    deleteButton.addEventListener('click', function() {
                        fetch(`${url}/${id}`, {
                            method: 'DELETE'
                        })    
                            .then(() => {
                                ulPhoneBookElement.removeChild(liElement);
                            }) 
                    })   
                })
            })
            .catch(error => {
                console.log('Error', error);
            })
    })

    createButton.addEventListener('click', () => {
        let newContact = {
            'person': person.value,
            'phone': phone.value,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })

        .then(res => res.json())
        .then(info => {       
            let liElement = document.createElement('li');
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            liElement.textContent = `${info.person}:${info.phone}`;
            liElement.appendChild(deleteButton);
            ulPhoneBookElement.appendChild(liElement);

            person.value = ''
            phone.value = ''

            deleteButton.addEventListener('click', function() {
                fetch(`${url}/${info._id}`, {
                    method: 'DELETE'
                })    
                    .then(() => {
                        ulPhoneBookElement.removeChild(liElement);
                    }) 
            })   
        })
        .catch(error => {
            console.log('Error', error);
        })
    })
}

attachEvents();
