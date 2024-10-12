function solve(array, step) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (i % step === 0) {
            output.push(array[i])
        }    
    }
    return output;
}
