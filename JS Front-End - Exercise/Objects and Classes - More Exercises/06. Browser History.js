function solve(obj ,arr) {
    let output = Object.assign({}, obj)

    for (item of arr) {
        if (item == "Clear History and Cache") {
            output["Open Tabs"] = []
            output["Recently Closed"] = []
            output["Browser Logs"] = []
        }else {
            [operation, app] = item.split(" ")
            if (operation == "Open") {
                    output["Open Tabs"].push(app);
                    output["Browser Logs"].push(`Open ${app}`)
                          
            }else if (operation == "Close") {
                    if (output["Open Tabs"].includes(app)) {
                        output["Recently Closed"].push(app);
                        let indexToRemove = output["Open Tabs"].indexOf(app);
                        output["Open Tabs"].splice(indexToRemove, 1);
                        output["Browser Logs"].push(`Close ${app}`);
                    }
                }    
            }        
        }
        
    output["Open Tabs"] = output["Open Tabs"].join(", ");
    output["Recently Closed"] = output["Recently Closed"].join(", ")
    output["Browser Logs"] = output["Browser Logs"].join(", ")
    
    let counter = 0;
    for ([key,value] of Object.entries(output)) {
        if (counter == 0) {
            console.log(value)
        } else {
            console.log(`${key}: ${value}`)
        }
        counter ++;
    }     
}
