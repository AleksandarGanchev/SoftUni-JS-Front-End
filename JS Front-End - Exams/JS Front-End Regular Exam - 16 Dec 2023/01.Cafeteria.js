function solve(array) {
    let output = {};
    let baristasCount = array.shift();
    for (let i = 0; i < baristasCount; i++) {
        
        let [baristaName, shift, cofeesString] = array.shift().split(" ");
        let coffeeTypes = cofeesString.split(",");
        output[baristaName] = [shift, coffeeTypes]
    }
    
    for (let data of array) {
        if (data == 'Closed') {
            break;
        }

        let baristaInfo = data.split(' / ');
        if (baristaInfo.includes('Prepare')) {
            let [command, baristaName, shift, coffeeType] = baristaInfo;
            if (output[baristaName][0] == shift && output[baristaName][1].includes(coffeeType)) {

                console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
            }else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
            }

        }else if (baristaInfo.includes('Change Shift')) {
            let [command, baristaName, newShift] = baristaInfo;
            output[baristaName][0] = newShift;
            console.log(`${baristaName} has updated his shift to: ${newShift}`);

        }else if(baristaInfo.includes('Learn')) {
            let [command, baristaName, newCoffeeType] = baristaInfo;
            if (output[baristaName][1].includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            }else {
                output[baristaName][1].push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        } 
    }

    for (let [baristaName, value] of Object.entries(output)) {
        console.log(`Barista: ${baristaName}, Shift: ${value[0]}, Drinks: ${value[1].join(", ")}`);
    }
}
