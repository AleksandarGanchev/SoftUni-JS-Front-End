function solve(array) {
    let obj = {};

    for (data of array) {
        obj[data] = data.length;
    }

    for (key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal Number: ${obj[key]}`)
    }
}
