function solve(arrays) {
    let obj = {};
    let cancelledFlights = [];

    let firstArray = arrays[0];
    let secondArray = arrays[1];
    let status = arrays[2].join(" ")

    for (let flightsInfo of firstArray) {
    [flightNum, Destination] = flightsInfo.split(" ")
    obj[flightNum] = {Destination,
        Status: "Ready to fly"
    }}
    
    for (let flightsInfo of secondArray) {
        [flightNum, Status] = flightsInfo.split(" ")
        if (Status == "Cancelled") {
           cancelledFlights.push(flightNum)
        }
    }

    for ([flightNum, flightInfo] of Object.entries(obj)) {
        if (cancelledFlights.includes(flightNum)) {
            flightInfo.Status = "Cancelled"
        }
        if (flightInfo.Status == status) {
            console.log(flightInfo)
        }            
    }
}
