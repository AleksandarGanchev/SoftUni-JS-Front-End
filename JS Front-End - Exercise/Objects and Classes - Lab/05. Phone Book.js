function phoneBook (personInfo) {
    let output = {}

    for (info of personInfo) {
        let [personName, personNumber] = info.split(" ");
        output[personName] = personNumber;
    }

    for (let [name, number] of Object.entries(output)) {
        console.log(`${name} -> ${number}`);
    }
}
