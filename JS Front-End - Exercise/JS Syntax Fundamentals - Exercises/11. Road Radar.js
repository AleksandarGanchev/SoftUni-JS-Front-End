function roadRadar(speed, area) {
    const speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    if (area in speedLimits) {
        const speedLimit = speedLimits[area];
        const difference = speed - speedLimit;
        let status;

        if (difference <= 0) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            return;
        } else if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } 
}
