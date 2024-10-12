function solve(arr, sortType) {
    if (sortType == 'asc') {
        return arr.sort((a, b) => a - b);
    
    }else {
        return arr.sort((a, b) => b - a);
    }
}
