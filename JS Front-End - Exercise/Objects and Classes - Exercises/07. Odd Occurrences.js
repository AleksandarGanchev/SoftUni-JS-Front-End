function solve(string) {
    let stringArray = string.toLowerCase().split(" ")

    function count(searchedWord, array) {
        let occurences = 0;

        for (word of array) {
            if (word === searchedWord) {
                occurences ++;
            }  
        }
        if (occurences % 2 != 0) 
            return occurences;
        }
      
    let loggedString = []   
    for (let string of stringArray) {
        if (count(string, stringArray) && !loggedString.includes(string)) {
            loggedString.push(string)
        }
    }
    console.log(loggedString.join(" "))
}
