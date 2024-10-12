function solve() { 
  let [generateButton, buyButton] = document.querySelectorAll('button');
  let [generateTextArea, result] = document.querySelectorAll('textarea');
  let tableBody = document.querySelector('tbody');

  function createImg(data) {
    let tdElement = document.createElement('td');
    let imgElement = document.createElement('img');
    imgElement.src = data;
    tdElement.appendChild(imgElement);
    return tdElement;
  }

  function createP(data) {
    let tdElement = document.createElement('td');
    let pElement = document.createElement('p');
    pElement.textContent = data;
    tdElement.appendChild(pElement);
    return tdElement;
  }

  function createCheckBox() {
    let tdElement = document.createElement('td');
    let checkBoxElement = document.createElement('input');
    checkBoxElement.type = 'checkbox';
    tdElement.appendChild(checkBoxElement);
    return tdElement;
  }

  generateButton.addEventListener('click', (e) => {
    let data = JSON.parse(generateTextArea.value);
    
    for (let i = 0; i < data.length; i++) {
      let newRow = document.createElement('tr');
      newRow.appendChild(createImg(data[i]['img']));
      newRow.appendChild(createP(data[i]['name']));
      newRow.appendChild(createP(data[i]['price']));
      newRow.appendChild(createP(data[i]['decFactor']));
      newRow.appendChild(createCheckBox());
      
      tableBody.appendChild(newRow);
    }
  });

  buyButton.addEventListener('click', (e) => {
    let trElements = document.querySelectorAll('tbody tr');

    let boughtFurniture = [];
    let decorationFactorSum = 0;
    let totalPrice = 0;

    for (let i = 0; i < trElements.length; i++) {
      let checkBoxElement = trElements[i].querySelector('input[type="checkbox"]');
      if (checkBoxElement.checked) {
        boughtFurniture.push(trElements[i].children[1].textContent);
        totalPrice += Number(trElements[i].children[2].textContent);
        decorationFactorSum += Number(trElements[i].children[3].textContent); 
      }
    }
    
    let averageDecorationFactor = decorationFactorSum / boughtFurniture.length;
    result.value = `Bought furniture: ${boughtFurniture.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`;
  });
}
