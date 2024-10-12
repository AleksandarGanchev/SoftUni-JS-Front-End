function sumTable() {
    let elements = document.querySelectorAll('tr td:nth-of-type(2)')

    let output = document.getElementById('sum')

    let totalSum = 0;
    for (let i = 0; i< elements.length - 1; i++) {
        price = Number(elements[i].textContent);
        totalSum += price;
    }
    output.textContent = totalSum;
}