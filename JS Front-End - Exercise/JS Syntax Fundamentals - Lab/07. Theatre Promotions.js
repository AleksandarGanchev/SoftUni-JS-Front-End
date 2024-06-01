function calculateTicketPrice (dayType, age) {

    if (age < 0 || age > 122){
        console.log("Error!");
        return;
    }

    let ticketprice;    
    if (dayType == "Weekday") {
        if (age > 18 && age <= 64) {
            ticketprice = 18;
        }

        else {
            ticketprice = 12;
        } 
    }    
    
    else if (dayType == "Weekend") {
        if (age > 18 && age <= 64) {
            ticketprice = 20;
        }

        else {
            ticketprice = 15;
        } 
    }    

    else if (dayType == "Holiday") {

        if (age >= 0 && age <= 18) {
            ticketprice = 5;
        }

        else if (age > 18 && age <= 64) {
            ticketprice = 12;
        }

        else {
            ticketprice = 10;
        } 
    }    

    console.log(`${ticketprice}$`)
}
