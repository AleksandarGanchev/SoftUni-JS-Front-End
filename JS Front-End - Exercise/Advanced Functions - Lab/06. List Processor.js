function solve(array) {
    let innerArray = [];

    for (let el of array) {
        if (el.includes('add')) {
            let [add, string] = el.split(" ");
            innerArray.push(string)
        
        }else if (el.includes('remove')) {
            let [remove,str] = el.split(" ");
            while(innerArray.includes(str)) {
                let index = innerArray.indexOf(str);
                innerArray.splice(index, 1);
            }
        }else if (el == 'print') {
            console.log(innerArray.join(",")); 
        }
    }
}
