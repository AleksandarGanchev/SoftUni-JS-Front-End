function solve() {
  let inputElement = document.getElementById('input').value;
  let splitText = inputElement.split('.').filter(s => s != '');
  let output = document.getElementById('output');

  while (splitText.length > 0) {
    let pTag = document.createElement('p');
    let newPElement = splitText.splice(0, 3).join('. ') + '.';
    pTag.textContent = newPElement;
    output.appendChild(pTag);
  }
}

 