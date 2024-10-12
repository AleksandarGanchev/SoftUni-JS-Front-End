function juiceFLavors(arr) {
    let obj = {};
    let output = {};

    for (let element of arr) {
        let [juiceType, quantity] = element.split(" => ");
        quantity = Number(quantity);

        if (!obj.hasOwnProperty(juiceType)) {
            obj[juiceType] = 0;
        }
        obj[juiceType] += quantity;

        if (obj[juiceType] >= 1000) {
            if (!output.hasOwnProperty(juiceType)) {
                output[juiceType] = 0;
            }
            output[juiceType] += Math.floor(obj[juiceType] / 1000);
            obj[juiceType] %= 1000; 
        }
    }
    
    for (let [juiceType, bottles] of Object.entries(output)) {
        console.log(`${juiceType} => ${bottles}`);
    }
}