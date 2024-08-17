function cardReader(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (!validFaces.includes(face.toUpperCase())) {
        throw 'Error'
    }
    
    if (!validSuits.hasOwnProperty(suit.toUpperCase())) {
        throw 'Error'
    }

    return {
        face,
        suit: validSuits[suit],
        toString: function () {
            return `${face}${this.suit}`
        }
    }
}
