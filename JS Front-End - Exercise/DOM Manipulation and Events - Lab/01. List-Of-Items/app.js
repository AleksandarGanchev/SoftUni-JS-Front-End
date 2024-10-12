function addItem() {
    let newLiElement = document.createElement('li');
    let textElement = document.querySelector('input[type="text"]');
    let ulElement = document.getElementById('items')

    newLiElement.textContent = textElement.value;
    ulElement.appendChild(newLiElement);

    textElement.value = '';
}