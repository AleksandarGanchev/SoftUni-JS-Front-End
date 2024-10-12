function focused() {

    divElements = document.querySelector('div')
    for (let divEl of divElements.children) {
        divEl.setAttribute('tabindex', '0');
        divEl.addEventListener('focus', (e) => {
            e.currentTarget.classList.add('focused');
            
        })
        divEl.addEventListener('blur', (e) => {
            e.currentTarget.classList.remove('focused');
        })
    }
}

