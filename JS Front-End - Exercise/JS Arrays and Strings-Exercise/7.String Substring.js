function solve(word, text) {    
    let arr = text.split(" ");

    for ( let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == word ) {
            console.log(word);
            return 
        }
    }
    console.log(`${word} not found!`)
}
