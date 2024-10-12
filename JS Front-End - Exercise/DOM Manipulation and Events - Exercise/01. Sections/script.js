function create(words) {

   let id = document.getElementById('content');
   words.forEach(word => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', (e) => {
         e.target.firstChild.style.display = 'block';
      });
   
      id.appendChild(divElement);
  });
}
