function carCompany(array) {
    
    let output = {};
    for (let data of array) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);

        if (!output.hasOwnProperty(carBrand)) {
            output[carBrand] = {};
        }
        
        if (!output[carBrand].hasOwnProperty(carModel)) {
            output[carBrand][carModel] = 0;
        }

        output[carBrand][carModel] += producedCars;
    }

    for (let[carBrand, carData] of Object.entries(output)) {
        console.log(carBrand);
        let data = Object.entries(carData);
        data.forEach(element => console.log(`###${element[0]} -> ${element[1]}`));
    }
}


// carCompany(['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10'])