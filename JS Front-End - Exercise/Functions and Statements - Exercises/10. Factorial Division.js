function factorialDivision(num1, num2) {
    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }

    let fact1 = calculateFactorial(num1);
    let fact2 = calculateFactorial(num2);

    console.log((fact1 / fact2).toFixed(2))
}
