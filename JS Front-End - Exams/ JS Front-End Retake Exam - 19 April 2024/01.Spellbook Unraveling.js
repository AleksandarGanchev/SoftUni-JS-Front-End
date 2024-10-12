function solve(input)  {
    string = input[0];
    for (let i = 1; i < input.length; i++) {
        let newString = [];
        let commandType = input[i];
        if (commandType == 'End') {
            break;          
        }

        if (commandType == 'RemoveEven') {
            for (let i = 0; i < string.length; i++) {
                if (i % 2 == 0) {
                    newString.push(string[i]);
                }
            }
            string = newString.join("");
            console.log(string);

        }else if (commandType.includes('TakePart')) {
            let [command, firstIndex, secondIndex] = commandType.split("!");
            firstIndex = Number(firstIndex);
            secondIndex = Number(secondIndex);

            if (firstIndex > 0|| secondIndex > 0) {
                string = string.split("")
                .slice(firstIndex, secondIndex)
                .join("");
            }
            console.log(string);
           
        }else if (commandType.includes('Reverse')) {
            let [reverse, substring] = commandType.split("!")
            if (string.includes(substring)) {
                string = string.replace(substring, '');
                string += substring.split("")
                .reverse()
                .join("")
                console.log(string); 
            } else {
                console.log("Error");
            }
        }     
    }
    console.log(`The concealed spell is: ${string}`);
}