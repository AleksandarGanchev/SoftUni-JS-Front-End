function solution() {
    let ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    };
    
    let recipes = {
        'apple': {'carbohydrate': 1 , 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10},
    };

    return (ingredientsArgs) => {
        let [command, arg, quantity] = ingredientsArgs.split(' ');
        quantity = parseInt(quantity);  
        if (command == 'restock') {
            ingredients[arg] += quantity;
            return 'Success';

        } else if (command == 'prepare') {
            for  (let [microElement, value] of Object.entries(recipes[arg])) {
                if (value * quantity  > ingredients[microElement]) {
                    return `Error: not enough ${microElement} in stock`;
                }
            }

            for  (let [microElement, value] of Object.entries(recipes[arg])) {
                ingredients[microElement] -= value * quantity;
            }
            return 'Success'

        } else if (command = 'report') {
            let output = [];
            Object.entries(ingredients).forEach(([ingredient, quantity]) => {
                output.push(`${ingredient}=${quantity}`)
            })
            return output.join(" ")     
        } 
    }
}
