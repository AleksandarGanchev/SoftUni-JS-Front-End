function Calculator(n1, operator, n2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;

        case '-':
            result = n1 - n2;
            break;

        case '*':
            result = n1 * n2;
            break;
            
        case '/':
            result = n1 / n2;
            break;   
    }

    console.log(`${result.toFixed(2)}`);
}
