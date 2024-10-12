function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name="email"]');
    let EmailElements = Array.from(document.querySelectorAll('tbody tr td:nth-of-type(2)'));
    let resultElement = document.getElementById('result');

    let emailToDelete = EmailElements.find(email => email.textContent == inputEmailElement.value);
   
    if (emailToDelete) {
        emailToDelete.parentNode.remove();
        resultElement.textContent = 'Deleted';
    }else {
        resultElement.textContent = 'Not found.';
    }
}