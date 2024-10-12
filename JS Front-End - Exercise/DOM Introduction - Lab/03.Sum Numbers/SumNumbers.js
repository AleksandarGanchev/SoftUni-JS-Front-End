function calc(num1, num2) {
    let firstNumberElement = document.getElementById('num1');
    let secondNumberElement = document.getElementById('num2');
    
    let sum = Number(firstNumberElement.value) + Number(secondNumberElement.value)
    let resultElement = document.getElementById('sum')
    resultElement.value = sum;
}
