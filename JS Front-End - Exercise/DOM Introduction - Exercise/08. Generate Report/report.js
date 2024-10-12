function generateReport() {
    let theadElements = Array.from(document.querySelectorAll("input[type='checkbox']"));
    let trElements = document.querySelectorAll('tbody > tr');
    let outputElement = document.getElementById('output');

    let output = []
    let selectedColumn = theadElements.filter(element => element.checked);

    for (let i = 0; i < trElements.length; i++) {
        let res = {};

        selectedColumn.forEach(el => {
            let idx = theadElements.indexOf(el);
            res[el.name] = trElements[i].children[idx].textContent;
        });
        output.push(res);
    };
    
    if (selectedColumn.length) {
        outputElement.textContent = JSON.stringify(output);
    }else {
        outputElement.textContent = '';
    }
}