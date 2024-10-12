function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let output = firstNumber - secondNumber;

   resultElement = document.getElementById('result')
   resultElement.textContent = output;

}