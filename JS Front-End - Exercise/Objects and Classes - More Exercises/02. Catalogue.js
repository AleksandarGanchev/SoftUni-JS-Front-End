function solve(array) {
    let obj = {};
    for (let info of array) {
        [productName, productPrice] = info.split(" : ")
        let firstLetter = productName[0]
        if (!(firstLetter in obj)) {
            obj[firstLetter] = {}
        }
        obj[firstLetter][productName] = productPrice
    }

    for ([letter, info] of Object.entries(obj).sort()) {
        console.log(letter)
        for ([product, price] of Object.entries(info).sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))){
            console.log(`  ${product}: ${price}`);
        }
    } 
}
