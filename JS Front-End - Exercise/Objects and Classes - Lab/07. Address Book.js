function solve(data) {
    let obj = {}

    for (let personInfo of data) {
        let [name, adress] = personInfo.split(":")
        obj[name] = adress
    }

    let sortedNames = Object.keys(obj).sort();
    for (let name of sortedNames) {
        console.log(`${name} -> ${obj[name]}`);
    }
}




// function solve(data) {
//     let obj = {}

//     for (let personInfo of data) {
//         let [name, adress] = personInfo.split(":")
//         obj[name] = adress
//     }
//     let sortedObj = Object.entries(obj).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

//     for (let [name, adress] of sortedObj) {
//         console.log(`${name} -> ${adress}`);
//     }
// }






