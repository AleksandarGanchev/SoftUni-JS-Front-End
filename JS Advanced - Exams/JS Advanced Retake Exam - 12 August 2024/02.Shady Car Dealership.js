class ShadyCarDealership {
    constructor(dealerName, revenue = 0) {
        this.dealerName = dealerName;
        this.revenue = revenue;
        this.availableCars = [];
        this.soldCars = [];
    }

    addCar (model, year, mileage, price) {
        if (model == '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!");
        }

        let car = {
            model,
            year,
            mileage,
            price,
        }
            
        this.availableCars.push(car);
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar (model, desiredYear) {
        let carObj = this.availableCars.find(x => x.model == model);
        if (!carObj) {
            return `${model} was not found!`
        }

        if (carObj.year >= desiredYear) {
            
        } else if (carObj.year >= desiredYear - 5) {
            carObj.price *= 0.9;
        } else {
            carObj.price *= 0.8;
        }

        let index = this.availableCars.findIndex((car) => car === carObj);
        this.availableCars.splice(index, 1);
        this.soldCars.push(carObj);
        this.revenue += carObj.price;

        return `${carObj.model} (${carObj.year}) was sold for ${carObj.price.toFixed(2)}$`
    }

    prepareCarForSale (model) {
        let carObj = this.availableCars.find(x => x.model == model);
        
        if (!carObj) {
            return `${model} was not found for preparation!`;
        }
        let index = this.availableCars.findIndex((car) => car === carObj);
        this.availableCars.splice(index, 1);
        
        carObj.mileage *= 0.5;
        carObj.price *= 1.3;
        this.availableCars.push(carObj);
       
        
        return `${carObj.model} (${carObj.year}) is prepared for sale with ${carObj.mileage} km. - ${carObj.price.toFixed(2)}$`
    }

    salesJournal (criteria) {
        let sortedCars = ''
        let avaiableCriterias = ['year', 'model']
        if (!avaiableCriterias.includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        if(criteria == 'year') {
            sortedCars = this.soldCars.sort((a, b) => b.year - a.year)
        } else {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
        }
                
        let output = [
            `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldCars.length} cars sold:`
        ];
        
        for (let car of sortedCars) {
            output.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.price.toFixed(2)}$`)
        }

        return output.join('\n')
    }   
}
