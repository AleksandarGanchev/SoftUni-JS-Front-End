function colorize() {
    let elements = document.querySelectorAll('tr:nth-of-type(2n)')
   
    elements.forEach(element => element.style.backgroundColor = 'teal');
}