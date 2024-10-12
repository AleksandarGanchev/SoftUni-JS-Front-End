function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const mainElement = document.querySelector('#main');

    (async function solve() {
        const response = await fetch(url);
        const data = await response.json()
        Object.values(data).forEach(x => {
            const divAccordion = document.createElement('div');
            divAccordion.setAttribute('class', 'accordion');
            let divHead = document.createElement('div');
            divHead.setAttribute('class', 'head');

            let spanElement = document.createElement('span');
            spanElement.textContent = x.title;

            let button = document.createElement('button');
            button.setAttribute('class', 'button');
            button.setAttribute('id', x._id);
            button.textContent = 'MORE';
  
            divHead.appendChild(spanElement);
            divHead.appendChild(button);
          
            let divExtra = document.createElement('div');
            divExtra.setAttribute('class', 'extra');
            let pElement = document.createElement('p');
            divExtra.appendChild(pElement);
            divAccordion.appendChild(divHead);
            divAccordion.appendChild(divExtra);
            mainElement.appendChild(divAccordion);

            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${x._id}`)
                .then(res => res.json())
                .then (data => {
                    pElement.textContent = data.content;
            })

            button.addEventListener('click', (e) => {
                if (button.textContent == 'MORE') {
                    divExtra.style.display = 'inline';
                    button.textContent = 'Less'
                } else {
                    divExtra.style.display = 'none';
                    button.textContent = 'MORE'
                }            
            })
        })
    })() 
}

solution()
