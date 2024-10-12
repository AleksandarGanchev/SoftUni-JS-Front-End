function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      let searchData = document.getElementById('searchField')
      let rows = document.getElementsByTagName('tr')
      
      for (let row of rows) {
         if (row.textContent.includes(searchData.value)) {
            row.classList.add('select');
         }else {
            row.classList.remove('select')
         }
      }

      searchData.value = ''
   }
}