function solve(currentStock, orderedProducts) {
    let obj = {}

    for (let i = 1; i < currentStock.length; i += 2) {
        let productName = currentStock[i - 1];
        let productQuantity = Number(currentStock[i]);
        obj[productName] = productQuantity;
    }

    for (let i = 0 ; i < orderedProducts.length - 1; i += 2) {
        let searchedProduct = orderedProducts[i];
        let quantity = orderedProducts[i + 1];

        if (Object.keys(obj).includes(searchedProduct)) {
            obj[searchedProduct] += Number(quantity);
        } else {
            obj[searchedProduct] = quantity;
        }
    }

    for (let [product, quantity] of Object.entries(obj)) {
        console.log(`${product} -> ${quantity}`);
    }
}   
