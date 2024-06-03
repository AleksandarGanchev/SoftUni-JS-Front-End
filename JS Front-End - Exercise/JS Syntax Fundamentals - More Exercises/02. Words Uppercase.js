function wordsUpperCase(string) {
    const words = string.match(/\w+/g);

    const upperCaseWords = words.map(word => word.toUpperCase());
    console.log(upperCaseWords.join(", "))
}
