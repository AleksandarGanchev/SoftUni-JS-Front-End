function encodeAndDecodeMessages() {
    let firstDiv = document.querySelector('#main > div:nth-of-type(1)');
    let secondDiv = document.querySelector('#main > div:nth-of-type(2)');

    let firstText = firstDiv.querySelector('textarea');
    let secondText = secondDiv.querySelector('textarea');

    let button1 = firstDiv.querySelector('button');
    let button2 = secondDiv.querySelector('button');

    function encode(e) {
        let output = '';
        for (let char of firstText.value) {
            output += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        secondText.value = output;
        firstText.value = '';
    }

    function decode(e) {
        let output = '';
        for (let char of secondText.value) {
            output += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        secondText.value = output;
    }

    button1.addEventListener('click', encode);
    button2.addEventListener('click', decode); 
}    