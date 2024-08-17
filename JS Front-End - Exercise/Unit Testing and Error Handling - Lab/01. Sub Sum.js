function sum(array, startIndex, endIndex) {
    let outputSum = 0;

    endIndex = Math.min(endIndex, array.length - 1);
    startIndex = Math.max(startIndex, 0);


    if (!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    while (startIndex <= endIndex) {
        outputSum  += Number(array[startIndex]);
        startIndex ++;
    }

    return outputSum;
}





