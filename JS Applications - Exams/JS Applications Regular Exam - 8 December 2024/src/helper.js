export function displayError() {
    document.querySelector('.notification').style.display = 'inline-block';
    document.querySelector('.msg').textContent = 'All fields are required'
}
