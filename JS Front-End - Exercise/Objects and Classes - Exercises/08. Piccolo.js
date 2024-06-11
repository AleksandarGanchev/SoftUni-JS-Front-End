function solve(array) {
    let parkingLot = [];

    for (let elements of array) {
        let [direction, carNumber] = elements.split(", ");
        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
             
        } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
            index = parkingLot.indexOf(carNumber)
            parkingLot.splice(index, 1); 
        }
    }

    if (parkingLot.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        parkingLot.sort((a, b) => a.localeCompare(b))
        parkingLot.forEach(carNumber => console.log(carNumber));
    }
}
