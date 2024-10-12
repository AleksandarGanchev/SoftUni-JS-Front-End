function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
    let optionElement = document.createElement('option');

    optionElement.text = textElement.value;
    optionElement.value = valueElement.value;

    menuElement.appendChild(optionElement);

    textElement.value = '';
    valueElement.value = '';
} 