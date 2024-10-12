function getInfo() {
    const submitButton = document.querySelector('#submit');
    const inputElement = document.querySelector('#stopId');
    const stopNameElement = document.querySelector('#stopName');
    const ulElement = document.querySelector('#buses');
    ulElement.style.listStyleType = 'none';

    submitButton.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputElement.value}`)
            .then(res => res.json())
            .then(data => {
                ulElement.innerHTML = ''
                stopNameElement.textContent = data.name;
                Object.entries(data['buses'])
                    .forEach(bussInfo => {
                        let liElement = document.createElement('li');
                        liElement.textContent = `Bus ${bussInfo[0]} arrives in ${bussInfo[1]} minutes`
                        ulElement.appendChild(liElement);
                    })  
            })
            .catch(error => {
                stopNameElement.textContent = 'Error';
                ulElement.innerHTML = ''
            })
    })
}

getInfo()