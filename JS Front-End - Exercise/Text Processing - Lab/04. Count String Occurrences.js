function solve(text, searchedWord) {
    wordCount = 0;
    arr = text.split(" ");
    for (word of arr) {
        if (word == searchedWord) {
            wordCount ++;
        }
    }

    console.log(wordCount);
}

solve('This is a word and it also is a sentence',
'is')