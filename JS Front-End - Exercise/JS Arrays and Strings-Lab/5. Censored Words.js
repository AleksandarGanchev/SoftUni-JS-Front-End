function solve(text, hiddenWord) {
    
    while (text.includes(hiddenWord)) {
        text = text.replace(hiddenWord, "*".repeat(hiddenWord.length));
    }

    console.log(text);
}
