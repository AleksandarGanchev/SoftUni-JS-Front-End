window.addEventListener("load", solve);

function solve() {

    let expenseElement = document.getElementById('expense');
    let amountElement = document.getElementById('amount');
    let dateElement = document.getElementById('date');

    let divPreview = document.getElementById('preview');
    let previewList  = document.getElementById('preview-list');
    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', (e) => {
    let divPreview = document.getElementById('preview');
        if (expenseElement.value == '' || amountElement.value == '' || dateElement == '') {
            return;
        }
        let liElement = document.createElement('li');
        liElement.className = 'expense-item';
        let articleElement = document.createElement('article');
        let typeP = document.createElement('p');
        let amountP = document.createElement('p');
        let dateP = document.createElement('p');

        typeP.textContent = `Type: ${expenseElement.value}`;
        amountP.textContent = `Amount: ${amountElement.value}$`;
        dateP.textContent = `Date: ${dateElement.value}`;

        articleElement.appendChild(typeP);
        articleElement.appendChild(amountP);
        articleElement.appendChild(dateP);

        let divButtons = document.createElement('div');
        divButtons.className = 'buttons';

        let editButton = document.createElement('button');
        editButton.className = 'btn edit';
        editButton.textContent = 'edit';

        let okButton = document.createElement('button');
        okButton.className ='btn ok';
        okButton.textContent = 'ok';

        divButtons.appendChild(editButton);
        divButtons.appendChild(okButton);

        liElement.appendChild(articleElement);
        liElement.appendChild(divButtons);
        previewList.appendChild(liElement);
        divPreview.appendChild(previewList);

        expenseElement.value = '';
        amountElement.value = '';
        dateElement.value = ''
        addButton.disabled = true;

        editButton.addEventListener('click', (e) => {
           let [info1, expenseValue] = typeP.textContent.split(": ");
           let [info2, amountValue] = amountP.textContent.split(": ");
           let [info3, dateValue] = dateP.textContent.split(": ");

           expenseElement.value = expenseValue;
           amountElement.value = amountValue.substring(0, amountValue.length - 1);
           dateElement.value = dateValue;

           previewList.removeChild(liElement);
           addButton.disabled = false;
        })

        okButton.addEventListener('click', (e) => {
            previewList.removeChild(liElement);

            let divExpenses = document.getElementById('expenses');
            let expensesList = document.getElementById('expenses-list');

            let expenseItem = document.createElement('li');

            let deleteButton = document.createElement('button');
            deleteButton.className = 'btn delete';
            deleteButton.textContent = 'delete';

            expenseItem.appendChild(articleElement);
            expensesList.appendChild(expenseItem);
            divExpenses.appendChild(expensesList);
            divExpenses.appendChild(deleteButton);

            addButton.disabled = false;

            deleteButton.addEventListener('click', (e) => {
                location.reload();
            })
        })   
    })
}