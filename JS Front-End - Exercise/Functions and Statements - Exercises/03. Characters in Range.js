function solve(param1, param2) {
    let char1 = param1.charCodeAt(0);
    let char2 = param2.charCodeAt(0);
    let output = []

    if (char1 > char2) {
        for (let i = char2 + 1; i < char1; i++) {
            output.push(String.fromCharCode(i));
        }
    } else {
        for (let i = char1 + 1; i < char2; i++) {
            output.push(String.fromCharCode(i));
        }
    }

    console.log(output.join(" "))
}
