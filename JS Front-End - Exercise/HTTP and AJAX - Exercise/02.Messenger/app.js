function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const sendButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const [authorName, msgText] = document.getElementsByTagName('input');
    const textAreaElement = document.querySelector('#messages');
    
    sendButton.addEventListener('click', () => {
        let obj = {
            author: authorName.value,
            content: msgText.value,
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .catch(error => console.log('Error', error))
        authorName.value = ''
        msgText.value = ''
    })

    refreshButton.addEventListener('click', () => {
        textAreaElement.innerHTML = '';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const output = Object.values(data)
            .map(obj => `${obj.author}: ${obj.content}`)
            .join('\n');
        
        textAreaElement.value = output;
        })
        .catch(error => ('Error', error))
        authorName.value = ''
        msgText.value = ''
    })
}

attachEvents();