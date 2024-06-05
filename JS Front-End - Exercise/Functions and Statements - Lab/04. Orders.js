function calculate(product, quantity) {
    const productPrices = {
        coffee: 1.50,
        water: 1,
        coke: 1.40,
        snacks: 2
    }
    
    let totalPrice = productPrices[product] * quantity;
    console.log(`${totalPrice.toFixed(2)}`)
}



// function solve(product, quantity) {
//     let price;
//     let totalPrice;
//     switch (product) {
//         case "coffee":
//             price = 1.50
//             break;
//         case "water":
//             price = 1
//             break;
//         case "coke":
//             price = 1.40
//             break;         
//         case "snacks":
//             price = 2
//             break;  
//     }
//     totalPrice = price * quantity;
//     console.log(`${totalPrice.toFixed(2)}`);
// }

