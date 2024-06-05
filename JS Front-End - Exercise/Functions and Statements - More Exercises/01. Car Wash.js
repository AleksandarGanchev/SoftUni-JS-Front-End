function solve(arr) {
    let output = 0;

    const operations = {
        "soap": () => output += 10,
        "water": () => output *= 1.2,
        "vacuum cleaner": () => output *= 1.25,
        "mud": () => output *= 0.9
    };

    for (let i = 0; i < arr.length; i++) {
            operations[arr[i]]();
        }

    console.log(`The car is ${output.toFixed(2)}% clean.`);
}
