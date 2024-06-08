function solve(appointments) {
    let obj = {};

    for (let appointment of appointments) {
        let [day, name] = appointment.split(" ");
        if (!(day in obj)) {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, name] of Object.entries(obj)) {
        console.log(`${day} -> ${name}`);
    }
}
