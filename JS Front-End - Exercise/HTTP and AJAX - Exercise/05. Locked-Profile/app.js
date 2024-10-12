function lockedProfile() {
    const mainElement = document.querySelector('#main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    mainElement.innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(user => {                
                let divElement = document.createElement('div');
                divElement.className = 'profile';
                let imgElement = document.createElement('img');
                imgElement.src = './iconProfile2.png';
                
                let labelLockElement = document.createElement('label');
                labelLockElement.textContent = 'Lock';
                let inputLockElement = document.createElement('input');
                inputLockElement.type = 'radio';
                inputLockElement.name = 'user2Locked';
                inputLockElement.value = 'lock';
                // inputLockElement.checked = true;
                
                let labelUnockElement = document.createElement('label');
                labelUnockElement.textContent = 'Unlock';
                let inputUnlockElement = document.createElement('input');
                inputUnlockElement.type = 'radio';
                inputUnlockElement.name = 'user2Locked';
                inputUnlockElement.value = 'unlock';
                let brElement = document.createElement('br');
                inputUnlockElement.appendChild(brElement);
                let hrElement = document.createElement('hr');
                

                divElement.appendChild(imgElement);
                divElement.appendChild(labelLockElement);
                divElement.appendChild(inputLockElement);
                
                divElement.appendChild(labelUnockElement);
                divElement.appendChild(inputUnlockElement);
                divElement.appendChild(hrElement);
                

                let usernameLabel = document.createElement('label');
                usernameLabel.textContent = 'Username';
                let usernameInputElement = document.createElement('input');
                usernameInputElement.type = 'text';
                usernameInputElement.name = 'user1Username';
                usernameInputElement.value = `${user.username}`;
                usernameInputElement.disabled = 'readonly';
                
                divElement.appendChild(usernameLabel);
                divElement.appendChild(usernameInputElement);
                
                let hiddenDivElement = document.createElement('div');
                hiddenDivElement.classname = 'user1HiddenFields';
                let hiddenHrElement = document.createElement('hr');
                hiddenDivElement.appendChild(hiddenHrElement);

                let emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email';
                hiddenDivElement.appendChild(emailLabel);

                let hiddenInputElement = document.createElement('input');
                hiddenInputElement.type = 'email';
                hiddenInputElement.name = 'user1Email';
                hiddenInputElement.value = `${user.email}`;
                hiddenInputElement.disabled = 'readonly';
                hiddenDivElement.appendChild(hiddenInputElement);

                let ageLabel = document.createElement('label');
                ageLabel.textContent = 'Age';
                hiddenDivElement.appendChild(ageLabel);

                let ageInput = document.createElement('input');
                ageInput.type = 'email';
                ageInput.name = 'user1Age';
                ageInput.value = `${user.age}`;
                ageInput.disabled = 'readonly';
                hiddenDivElement.appendChild(ageInput);

                let showMoreButton = document.createElement('button');
                showMoreButton.textContent = 'Show More';

                divElement.appendChild(showMoreButton);
                mainElement.appendChild(divElement);
                
                showMoreButton.addEventListener('click', () => {

                    if (inputLockElement.checked) {
                        divElement.removeChild(showMoreButton);
                        divElement.appendChild(hiddenDivElement);
                        let hideButton = document.createElement('button');
                        hideButton.textContent = 'Hide it';
                        divElement.appendChild(hideButton);
                        
                        
                        // hideButton.addEventListener('click', () => {
                         
                        // })
                    }
                })

                if (inputUnlockElement.checked) {
                    console.log('hm');
                
                } 

            })
        })
}