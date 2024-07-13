function getFibonator() {
    let [num1, num2] = [0, 1];

    return function ()  {
        let nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
        
        return num1
    }    
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13);




// function getFibonator() {
//     let fibNumbers = [0, 1];
//     function inner() {
//         let nextNumber = (`${fibNumbers.length - 2} + ${fibNumbers.length - 1}`);
//         fibNumbers.push(nextNumber);
//         console.log(`${nextNumber}`)
//         return
//     }
// }