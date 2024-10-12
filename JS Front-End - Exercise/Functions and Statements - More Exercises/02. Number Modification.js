function solve(num) {
    let arr = num.toString().split("");
    let averageNumber = 0
    
    function calculate(array) {
        let totalSum  = 0;
        for (let i = 0;  i < array.length; i++) {
            totalSum += Number(array[i]);
        }

        averageNumber = totalSum / array.length
        return averageNumber;     
    }
    
    while (calculate(arr) < 5) { 
        arr.push(9)
    }

    console.log(arr.join(""))
}
