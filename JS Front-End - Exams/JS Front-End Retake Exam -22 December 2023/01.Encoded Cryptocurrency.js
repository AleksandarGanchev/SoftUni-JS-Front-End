function solve(array) {
    let string = array.shift();

    for (let el of array) {
        if (el == 'Buy') {
            break;
        } else if (el == 'TakeEven') {
            string = string.split("")
            .filter((leter, index) => index % 2 == 0)
            .join("")
            console.log(string);

        } else if (el.includes('ChangeAll')) {
            let [action, substring, replacement] = el.split("?");
            while(string.includes(substring)) {
                string = string.replace(substring, replacement)
            }
            console.log(string);

        }else if (el.includes('Reverse')) {
            let [action, substing] = el.split("?") 
            if (string.includes(substing)) {
                let reversedSubstring = substing.split("")
                .reverse()
                .join("")
               string = string.replace(substing, '');
               string += reversedSubstring;
                console.log(string);    
            }else {
                console.log('error');
            }       
        }               
    }
    console.log(`The cryptocurrency is: ${string}`);
}
  