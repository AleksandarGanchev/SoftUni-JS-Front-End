function solve() {
    const infoElement = document.querySelector('span');
    const departElement = document.querySelector('#depart');
    const arriveElement = document.querySelector('#arrive');

    nextStop = 'depot';
    let currName = ''

    function depart() {        
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
            .then(res => res.json())
            .then(data => {                                
                nextStop = data.next;
                currName = data.name;                            
                infoElement.textContent = `Next stop ${data.name}`;
                departElement.disabled = true;
                arriveElement.disabled = false;
            })
            .catch(error => {
                infoElement.textContent = 'Error';
                departElement.disabled = true;
                arriveElement.disabled = true;
            })      
    }

    async function arrive() {
        arriveElement.disabled = true;
        infoElement.textContent = `Arriving at ${currName}`;
        departElement.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();




