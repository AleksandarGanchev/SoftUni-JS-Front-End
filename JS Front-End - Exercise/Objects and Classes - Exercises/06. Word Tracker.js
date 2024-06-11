function solve(arr) {
    let obj = {};
    words = arr.shift().split(" ")
    
    function count(searchedWord, array) {
        let occurences = 0;

        for (word of array) {
            if (word === searchedWord) {
                occurences ++;
            }  
        }
        return occurences;
    }

    for (word of words) {
        obj[word] = count(word, arr)
    }

    for (const [word, count] of Object.entries(obj).sort((a, b)=> b[1] - a[1])) {
        console.log(`${word} - ${count}`)
    }    
}




// function solve(arr) {
//     let output = [];

//     function count(searchedWord, array) {
//         let occurrences = 0;

//         for (let word of array) {
//             if (searchedWord === word)
//                 occurrences ++;
//         }
       
//         return occurrences;
//     }

//     let words = arr[0].split(" ")
//     let text = arr.slice(1);

//     for (let word of words) {
//         currentWord = {
//             word,
//             count: count(word, text)
//         }
        
//         output.push(currentWord);
//     }

//     output.sort((a,b) => b.count - a.count);

//     for (let data of output) {
//         console.log(`${data.word} - ${data.count}`)
//     }
// }
