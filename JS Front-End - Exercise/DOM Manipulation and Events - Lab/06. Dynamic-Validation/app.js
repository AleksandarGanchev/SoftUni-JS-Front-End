function validate() {
    const pattern = /\b[a-z]+@[a-z]+\.[a-z]+\b/;
    let inputElement = document.querySelector('input[type="text"]');
    
    inputElement.addEventListener('change', (e) => {
        if (e.currentTarget.value.match(pattern)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');   
        }  
    })
}