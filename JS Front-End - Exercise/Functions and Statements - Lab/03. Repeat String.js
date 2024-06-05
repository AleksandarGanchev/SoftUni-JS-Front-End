function repeatString(string, count) {
    let output = ""
    for(let i =0; i < count; i++) {
        output = output.concat(string);
    }

    return output;
}
