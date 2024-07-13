function solution() {
    let output = '';

    return {
        append(string) {
            output += string;
        },

        removeStart(n) {
            output = output.substring(n);
        },

        removeEnd(n) {
            output = output.substring(0, output.length - n);
        },
        
        print() {
            console.log(output);
        }
    }
}

