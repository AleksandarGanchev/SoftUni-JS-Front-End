window.addEventListener("load", solve);

function solve() {
    let adoptbutton = document.getElementById('adopt-btn');
    let typeOfAnimalElement = document.getElementById('type');
    let ageElement = document.getElementById('age');
    let genderElement = document.getElementById('gender');
  
    
    let ulElement = document.getElementById('adoption-info');
    adoptbutton.addEventListener('click', (e) => {
      e.preventDefault();
  
      if (
        ageElement.value == "" ||
        typeOfAnimalElement.value == "" ||
        genderElement.value == ""
      ) {return;
      }
  
      let liElement = document.createElement('li');
      let articleElement = document.createElement('article');
  
      let ageP = document.createElement("p");
      ageP.textContent = `Age:${ageElement.value}`;
      let name = ageElement.value;
    
  
      let petP = document.createElement("p");
      petP.textContent = `Pet:${typeOfAnimalElement.value}`;
      let phone = typeOfAnimalElement.value;
  
      let genderP = document.createElement("p");
      genderP.textContent = `Gender:${genderElement.value}`;
      let gender = genderElement.value;


      articleElement.appendChild(petP);
      articleElement.appendChild(genderP);
      articleElement.appendChild(ageP);
  
      let divElement = document.createElement('div');
      divElement.className = 'buttons';
  
      let edinButtonElement = document.createElement('button');
      let doneButtonElement = document.createElement('button');
      edinButtonElement.className = 'edit-btn';
      doneButtonElement.className = 'done-btn';
      edinButtonElement.textContent = 'Edit';
      doneButtonElement.textContent = 'Done';
  
      divElement.appendChild(edinButtonElement);
      divElement.appendChild(doneButtonElement);
  
      liElement.appendChild(articleElement);
      liElement.appendChild(divElement);
      ulElement.appendChild(liElement);
  
      typeOfAnimalElement.value = '';
      ageElement.value = '';
      genderElement.value = '';

    edinButtonElement.addEventListener('click', (e) => {
      [info1, info2, info3] = articleElement.children;
  
      [data, pet] = info1.textContent.split(":");
      [data, age] = info3.textContent.split(":");
      [data, gender] = info2.textContent.split(":");
      
      typeOfAnimalElement.value = pet;
      ageElement.value = age;
      genderElement.value = gender;
      
      ulElement.removeChild(liElement);  
    })

    doneButtonElement.addEventListener('click', (e) => {
      let adoptedListElement= document.getElementById('adopted-list');
      liElement.lastChild.remove()
      
      let clearButton = document.createElement('button');
      clearButton.textContent = 'Clear';
      clearButton.className = 'clear-btn'
      liElement.appendChild(clearButton)
      adoptedListElement.appendChild(liElement);
      clearButton.addEventListener('click', (e) => {
      adoptedListElement.removeChild(liElement)
      })
    })
    }) 
  }