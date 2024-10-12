function sameNumbers(number) {
    let totalSum = 0;
    let numberString = number.toString();
    let flag = true;

    for(let i = 0; i < numberString.length; i++) {
        if (i >= 1) {
            if (numberString[i] !== numberString[i - 1]) {
                flag = false;
            }
        }        
        totalSum += parseInt(numberString[i]);    
    }    
    
    console.log(`${flag}`);
    console.log(`${totalSum}`);
}
