function search(text, searchedWord) {
    let words = text.split(" ")
    let counter = 0;
    for (let word of words) {
        if (word == searchedWord) {
            counter += 1;
        }
    }
    console.log(`${counter}`);
    
}
