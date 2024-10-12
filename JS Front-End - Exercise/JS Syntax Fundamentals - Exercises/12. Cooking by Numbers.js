function solve(number, ...ops) {
    let result = Number(number);

    const operations = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num + 1,
        "bake": (num) => num * 3,
        "fillet": (num) => num * 0.8
    };

    for (let i = 0; i < ops.length; i++) {
        result = operations[ops[i]](result);
        console.log(result);
    }
}


// function solve(number, op1, op2, op3, op4, op5) {
//     let result = Number(number);

//     const operations = {
//         "chop": (num) => num / 2,
//         "dice": (num) => Math.sqrt(num),
//         "spice": (num) => num + 1,
//         "bake": (num) => num * 3,
//         "fillet": (num) => num * 0.8
//     };

//     const ops = [op1, op2, op3, op4, op5];

//     for (let i = 0; i < ops.length; i++) {
//         result = operations[ops[i]](result);
//         console.log(result);
//     }
// }