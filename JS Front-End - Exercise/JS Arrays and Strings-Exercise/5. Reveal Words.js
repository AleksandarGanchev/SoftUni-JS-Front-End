function solve(input, templates) {
    let strings = input.split(", ")
    let array = templates.split(" ")
    let temp;

    for (el of array) {
        if (el.includes("*")) {
            for (string of strings) {
                if (string.length == el.length) {
                    temp = array.indexOf(el)
                    array[temp] = string
                } 
            }
        }
    }
    console.log(array.join(" "));
}
