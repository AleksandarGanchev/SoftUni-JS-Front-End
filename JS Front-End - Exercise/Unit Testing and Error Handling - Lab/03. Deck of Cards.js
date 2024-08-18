function cardPrinter(cards) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];      
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    let array = [];
    for (let currCard of cards) {
        let suit = currCard[currCard.length - 1];
        let face = currCard.slice(0, currCard.length - 1);
        
        if (!suits.hasOwnProperty(suit) || (!validFaces.includes(face))) {
            return console.log(`Invalid card: ${currCard}`)
        }

        let obj = {};
        obj[face] = suits[suit];
        array.push(obj);
    }

    output = [];
    array.forEach(obj => {
        let mapedEntries = Object.entries(obj)
        .map(([face, suit]) => `${face}${suit}`)
    
        output.push(mapedEntries)
    })

    console.log(output.join(" "))
}

// cardPrinter(['AS', '10D', 'KH', '2C'])
// cardPrinter(['5S', '3D', 'QD', '1C']);