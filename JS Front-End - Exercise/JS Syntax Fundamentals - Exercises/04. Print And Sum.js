function solve(num1, num2) {
    let i = num1;
    let numbers = [i];
    let totalSum = num1;

    while (i < num2) {
        i++;
        numbers.push(i);
        totalSum += i;   
    }

    console.log(numbers.join(" "));
    console.log(`Sum: ${totalSum}`);
}
