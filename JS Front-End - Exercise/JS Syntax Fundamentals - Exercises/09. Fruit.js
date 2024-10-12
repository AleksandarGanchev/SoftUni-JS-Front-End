function calculate(fruitType, fruitWeightGrams, fruitPricePerKg){
    let fruitWeightKg = fruitWeightGrams / 1000;
    console.log(`I need $${(fruitWeightKg*fruitPricePerKg).toFixed(2)} to buy ${fruitWeightKg.toFixed(2)} kilograms ${fruitType}.`)
}
