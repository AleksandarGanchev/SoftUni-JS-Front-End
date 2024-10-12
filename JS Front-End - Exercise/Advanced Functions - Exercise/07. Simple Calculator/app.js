function calculator () {
    let num1Element, num2Element, resultElement;
    
    return {
        init: function(num1, num2, result) {
            num1Element = document.querySelector(num1);
            num2Element = document.querySelector(num2);
            resultElement = document.querySelector(result);
        },

        add: function() {
            resultElement.value = Number(num1Element.value) + Number(num2Element.value);
        },

        subtract: function() {
            resultElement.value = Number(num1Element.value) - Number(num2Element.value);
        }
    }
}    
