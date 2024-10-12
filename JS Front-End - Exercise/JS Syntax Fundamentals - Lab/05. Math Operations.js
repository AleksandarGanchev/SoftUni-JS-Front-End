function mathOperations(firstNumber, secondNumber, operator) {
    let result ;
    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        case '**': result = firstNumber ** secondNumber; break;
    }
    console.log(result);
}


// function mathOperations(firstNumber, secondNumber, operator) {
//     if (operator == "+") {
//         result = firstNumber + secondNumber;

//     } else if (operator == "-") {
//         result = firstNumber - secondNumber;

//     } else if (operator == "-") {
//         result = firstNumber - secondNumber;

//     } else if (operator == "*") {
//         result = firstNumber * secondNumber;

//     } else if (operator == "/") {
//         result = firstNumber / secondNumber;

//     } else if (operator == "%") {
//         result = firstNumber % secondNumber;

//     } else if (operator == "**") {
//         result = firstNumber ** secondNumber;
//     }
    
//     console.log(result)
// }
