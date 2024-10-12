function solve(arrays) {
    let uniqueArrays = [];
    for (let data of arrays) {
        let array = JSON.parse(data);   
        let sortedArray = array.sort((a, b) => b - a)
        
        let jsonArr = JSON.stringify(sortedArray)
        if (!(uniqueArrays.includes(jsonArr))) {
            uniqueArrays.push(jsonArr);
        }  
    }

  uniqueArrays = uniqueArrays.map((array) => JSON.parse(array))
  uniqueArrays.sort((a,b) =>  {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    })
  
  for (let array of uniqueArrays) {
    console.log(`[${array.join(", ")}]`);
  }
}
