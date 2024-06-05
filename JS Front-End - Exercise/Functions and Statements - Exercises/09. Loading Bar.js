function solve(number) {
    let output = `${number}% [`;
    
    function repeat(n, symbol) {
        return symbol.repeat(n);
    }

    if (number === 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]");
    } else {
        let percentagesSymbol = number / 10;
        let dotSymbol = 10 - percentagesSymbol;

        output += repeat(percentagesSymbol, "%") + repeat(dotSymbol, ".") + "]";
        
        console.log(output);
        console.log("Still loading...");
    }
}
