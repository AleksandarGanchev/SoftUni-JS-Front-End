function solve() {
    let text = document.getElementById('text').value.toLowerCase();
    let desiredCase = document.getElementById('naming-convention').value;
  
    let result = '';
    if (desiredCase == 'Camel Case') {
        result += text[0];
        for (let i = 1; i < text.length; i++) {
            if (text[i - 1] == ' ') {
            result += text[i].toUpperCase()
            }else if (text[i] != ' ') {
            result += text[i];
            }
        }
    
    } else if (desiredCase == 'Pascal Case') {
    result += text[0].toUpperCase()
    for (let i = 1; i < text.length; i++) {

        if (text[i - 1] == ' ') {
        result += text[i].toUpperCase()
        }else if (text[i] != ' ') {
        result += text[i];
        }
    }

    } else {
    result = 'Error!';
    }
    
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;  
}