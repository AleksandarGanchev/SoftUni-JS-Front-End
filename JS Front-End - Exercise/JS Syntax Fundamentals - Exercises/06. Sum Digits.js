function sumDigits(number) {
    let totalSum = 0;

    let numberString = number.toString();

    for (let i = 0; i < numberString.length; i++) {
        totalSum += parseInt(numberString[i]);
    }

    console.log(totalSum);
}
