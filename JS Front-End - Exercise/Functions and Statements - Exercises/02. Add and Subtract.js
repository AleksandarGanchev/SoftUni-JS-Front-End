function solve(num1, num2, num3) {
    let sum = x => num1 + num2;
    let subract = x =>  sum() - num3;
    console.log(subract())
}

