function reverseArray (numberOfElements, array) {
    let slicedArray = array.slice(0, numberOfElements);
    console.log(slicedArray.reverse().join(" "));
}
