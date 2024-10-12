function lockedProfile() {
    let showMoreButtons = document.querySelectorAll('button');
    
    for (let button of showMoreButtons) {
        button.addEventListener('click', (e) => {
            let currProfile = e.target.parentElement;
            let isUnocked = currProfile.querySelector('input[value="unlock"]').checked;

            if (isUnocked) {
                let findHiddenField = Array.from(currProfile.querySelectorAll('div')).find(hidden => hidden.id.includes('Hidden'));
                if (e.target.textContent == 'Show more') {
                    findHiddenField.style.display = 'block';
                    e.target.textContent = 'Hide it';      
                }else {
                    findHiddenField.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        })
    }    
}
