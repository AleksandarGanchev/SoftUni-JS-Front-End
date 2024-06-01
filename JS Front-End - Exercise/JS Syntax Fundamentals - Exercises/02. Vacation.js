function solve(groupNumber, groupType, weekDay) {

    let pricePerPerson;
    let totalPrice;

    if (groupType == "Students") {
        if (weekDay == "Friday") {
            pricePerPerson = 8.45;
        }

        else if (weekDay == "Saturday") {
            pricePerPerson = 9.80;
        }

        else if (weekDay == "Sunday") {
            pricePerPerson = 10.46;
        }      
    }
    
    else if (groupType == "Business") {

        if (groupNumber >= 100) {
            groupNumber -= 10;
        }
        
        if (weekDay == "Friday") {
            pricePerPerson = 10.90;
        }

        else if (weekDay == "Saturday") {
            pricePerPerson = 15.60;
        }

        else if (weekDay == "Sunday") {
            pricePerPerson = 16;
        }
    }

    else if (groupType == "Regular") {
        if (weekDay == "Friday") {
            pricePerPerson = 15;
        }

        else if (weekDay == "Saturday") {
            pricePerPerson = 20;
        }

        else if (weekDay == "Sunday") {
            pricePerPerson = 22.50;
        }
    }

    totalPrice = pricePerPerson * groupNumber;

    if (groupType == "Students" && groupNumber >= 30) {
        totalPrice *= 0.85;
    }
    
    else if (groupType == "Regular" && groupNumber >= 10 && groupNumber <= 20) {
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
