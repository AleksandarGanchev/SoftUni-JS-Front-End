function solve(text) {
    let arr = text.split(" ")

    function isAlpha(string) {
        return /^[A-Za-z]+$/.test(string)
    }
    
    for (el of arr) {
        if (el.startsWith("#") && el.length >= 1 && isAlpha(el.slice(1))) {
            console.log(el.slice(1))
            }
        }
}
