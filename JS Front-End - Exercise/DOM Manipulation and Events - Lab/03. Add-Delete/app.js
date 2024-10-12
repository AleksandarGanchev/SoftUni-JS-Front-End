function addItem() {
    function deleteItem(item) {
        item.target.parentElement.remove()
    }

    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    let anchorElement = document.createElement('a')

    anchorElement.textContent = '[Delete]';
    anchorElement.setAttribute('href', '#');
    newLiElement.textContent = inputElement.value;

    ulElement.appendChild(newLiElement);
    newLiElement.appendChild(anchorElement);
    
    anchorElement.addEventListener('click', deleteItem);

    inputElement.value = ''
}