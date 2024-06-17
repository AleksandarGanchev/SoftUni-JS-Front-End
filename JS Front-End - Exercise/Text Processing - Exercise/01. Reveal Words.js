function solve(words, text) {
    let arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('*')) {
           let test = words.split(", ");
           arr[i] = test.find(word => word.length === arr[i].length);
        }
    }

    console.log(arr.join(" "));
}
