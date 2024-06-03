function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let element  = array.shift();
        array.push(element)    
    }
    
    console.log(array.join(" "));
}

