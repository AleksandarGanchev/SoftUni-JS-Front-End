function solve(array) {
    let garage = {};

    for (let elements of array) {
        let [garageNumber, info] = elements.split(" - ")
        let data = info.split(", ")
        if (!(garage.hasOwnProperty(garageNumber))) {
                garage[garageNumber] = [];           
        }
        garage[garageNumber].push(data);     
    }
      
    for (let [garageNumber, data] of Object.entries(garage)) {
        console.log(`Garage № ${garageNumber}`);
        for (let info of data) {
            console.log(`--- ${info.join(", ").replaceAll(":", " -")}`)
        }
    }
}
