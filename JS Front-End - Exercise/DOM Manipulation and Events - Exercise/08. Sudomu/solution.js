function solve() {
    let firstInputElements = document.querySelectorAll('tbody tr:nth-Of-type(1) td input');
    let secondInputElements = document.querySelectorAll('tbody tr:nth-Of-type(2) td input');
    let thirdInputElements = document.querySelectorAll('tbody tr:nth-Of-type(3) td input');

    let tableElement = document.querySelector('table');
    let pElement = document.querySelector('p');
    let [checkButton, clearButton] = document.querySelectorAll('button');

    function createMatrix() {
        let matrix = [];
        let firstRow = [];
        for (let input of firstInputElements) {
            firstRow.push(input.value);
        }
        matrix.push(firstRow);

        let secondRow = [];
        for (let input of secondInputElements) {
            secondRow.push(input.value);
        }
        matrix.push(secondRow);

        let thirdRow = [];
        for (let input of thirdInputElements) {
            thirdRow.push(input.value);
        }
        matrix.push(thirdRow);
        
        return matrix;
    }

    function isSudomuSolve(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            let rowSet = new Set(row);
            let colSet = new Set(col);

            if (rowSet.size != 3 || colSet.size != 3) {
                return false;
            }
        }
        return true;
    }

    function clearInputFields(e) {
        let allInputElements = Array.from(document.querySelectorAll('tbody tr td input'));
        allInputElements.forEach(input => input.value = '');
        pElement.textContent = '';
        tableElement.style.border = 'none';
    }

    checkButton.addEventListener('click', (e) => {
        let matrix = createMatrix();
        if (isSudomuSolve(matrix)) {
            tableElement.style.border = '2px solid green';
            pElement.textContent =  'You solve it! Congratulations!'
            pElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            pElement.textContent =  'NOP! You are not done yet...'
            pElement.style.color = 'red';
        }
    })

    clearButton.addEventListener('click', clearInputFields)  
}    
