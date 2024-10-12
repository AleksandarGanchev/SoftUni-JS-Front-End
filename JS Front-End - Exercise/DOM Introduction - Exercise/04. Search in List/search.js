function search() {
   let LiElements = document.getElementsByTagName('li');
   let searchedText = document.getElementById('searchText').value;
   let output = document.getElementById('result')

   let matches = 0;
   for (let town of LiElements) {
      if (town.textContent.includes(searchedText)) {
         town.style.fontWeight = 'bold'
         town.style.textDecoration = 'underline'
         matches ++;

      }else {
         town.style.fontWeight = 'normal'
         town.style.textDecoration = 'none'
      }   
   }
   
   output.textContent = `${matches} matches found`
}
