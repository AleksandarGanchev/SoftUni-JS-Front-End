window.addEventListener("load", solve);

function solve() {
    let testRideButton = document.querySelector('#test-ride-btn')
    let colorElement = document.querySelector('#colors');
    let motorcycleElement = document.querySelector('#motorcycles');
    let dateTimeElement = document.querySelector('#datetime');
    let yourNameElement = document.querySelector('#full-name');
    let emailElement = document.querySelector('#email');

    testRideButton.addEventListener('click', () => {
        if (colorElement.value == ''
            || motorcycleElement.value == ''
            || dateTimeElement.value == ''
            || yourNameElement.value == ''
            || emailElement.value == ''
        ){                
            return;
        }
            
        testRideButton.disabled = true;
       
        let ulElement = document.querySelector('#preview-list');
        let liElement = document.createElement('li');
        let articleElement = document.createElement('article');

        let pColor = document.createElement('p');
        let pModel = document.createElement('p');
        let pYourName = document.createElement('p');
        let pEmail = document.createElement('p');
        let pDateTime = document.createElement('p');


        pColor.textContent = `Color: ${colorElement.value}`;
        pModel.textContent = `Model: ${motorcycleElement.value}`;
        pYourName.textContent = `For: ${yourNameElement.value}`;
        pEmail.textContent = `Contract: ${emailElement.value}`;
        pDateTime.textContent = `Test Ride On: ${dateTimeElement.value}`;

        let divELement = document.createElement('div');
        divELement.setAttribute('class', 'btn-container');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.setAttribute('class', 'edit-btn');

        let nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.setAttribute('class', 'next-btn');

        articleElement.appendChild(pColor);
        articleElement.appendChild(pModel);
        articleElement.appendChild(pYourName);
        articleElement.appendChild(pEmail);
        articleElement.appendChild(pDateTime);

        divELement.appendChild(editButton);
        divELement.appendChild(nextButton);
        liElement.appendChild(articleElement);
        liElement.appendChild(divELement);
        ulElement.appendChild(liElement);

        colorElement.value = '';
        motorcycleElement.value = ''
        dateTimeElement.value = ''
        yourNameElement.value = ''
        emailElement.value = ''

        editButton.addEventListener('click', () => {
            let [info1, colorCut] = pColor.textContent.split(": ");
            let [info2, modelCut] = pModel.textContent.split(": ");
            let [info3, yourNameCut] = pYourName.textContent.split(": ");
            let [info4, emailCut] = pEmail.textContent.split(": ");
            let [info5, dateTimeCut] = pDateTime.textContent.split(": ");

            colorElement.value = colorCut;
            motorcycleElement.value = modelCut;
            dateTimeElement.value = dateTimeCut;
            yourNameElement.value = yourNameCut;
            emailElement.value = emailCut;

            testRideButton.disabled = false;
            ulElement.removeChild(liElement);
        });

        nextButton.addEventListener('click', () => {
            let ulCompleteElement = document.querySelector('#complete-list');
            let ulPreviewListElement = document.querySelector('#preview-list');
            ulPreviewListElement.removeChild(liElement);

            let completeButton = document.createElement('button');
            completeButton.setAttribute('class', 'complete-btn');
            completeButton.textContent = 'Complete';
            articleElement.appendChild(completeButton);
            
            let newLiElement = document.createElement('li');
            newLiElement.appendChild(articleElement);
            ulCompleteElement.appendChild(newLiElement);


            completeButton.addEventListener('click', () => {
                ulCompleteElement.removeChild(newLiElement);
                let dataViewElement = document.querySelector('.data-view');

                let confirmButton = document.createElement('button');
                confirmButton.setAttribute('class', 'confirm-btn');
                confirmButton.textContent = 'Your Test Ride is Confirmed';

                dataViewElement.appendChild(confirmButton);

                completeButton.addEventListener('click', ()=> {
                    location.reload();
                })
            })
        })
    })
}
