function solve(...arr) {
    let countObj = {};

    for (let el of arr) {
        console.log(`${typeof el}: ${el}`)
        if (!countObj.hasOwnProperty(typeof el)) {
            countObj[typeof el] = 0;
        }
        countObj[typeof el] ++;    
    }

    let sortedCount = Object.entries(countObj).sort((a, b) => b[1] - a[1]);
    sortedCount.forEach(([type, value]) => console.log(`${type} = ${value}`))
}    
