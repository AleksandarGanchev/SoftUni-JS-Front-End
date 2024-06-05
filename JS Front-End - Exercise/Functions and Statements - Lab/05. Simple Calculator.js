function solve(num1, num2, operator) {
    const calculator = {
        multiply: num1 * num2,
        divide: num1 / num2,
        add: num1 + num2,
        subtract: num1 - num2
    }

    let output = calculator[operator];
    console.log(output);
 }



// const calculator = (num1, num2, operator) => ({
//     'multiply': num1 * num2,
//     'divide': num1 / num2,
//     'add': num1 + num2,
//     'subtract': num1 - num2
// })[operator];

