function toggle() {
     
    let button = document.querySelector('.button');
    let text = document.querySelector('#extra')

    if (button.textContent == 'More') {
        button.textContent = 'Less'
        text.style.display = 'block'

    }else if (button.textContent == 'Less') {
        button.textContent = 'More'
        text.style.display = 'none'
    }
}