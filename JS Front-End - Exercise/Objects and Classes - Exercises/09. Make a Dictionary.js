function solve(array) {
    let output = [];
   
    array.forEach(jsonString => {
        let obj = JSON.parse(jsonString)
        let term = Object.keys(obj)[0];
        let definition = obj[term];
        output[term] = definition;
    })
    
    for ([term, definition] of Object.entries(output).sort()) {
        console.log(`Term: ${term} => Definition: ${definition}`)
    }    
}
