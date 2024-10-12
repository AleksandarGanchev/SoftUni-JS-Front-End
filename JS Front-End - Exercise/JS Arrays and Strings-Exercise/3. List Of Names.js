function sortArray (array) {
    let sortedArray = array.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    for (let i = 0; i < sortedArray.length; i++) {
        console.log(i+1 + "." + sortedArray[i]);
    }
}
