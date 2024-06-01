function calculateCircleArea(input) {
    let radius;
    let inputType = typeof(input);

    if (inputType === 'number') {
        radius = Math.pow(input, 2  ) * Math.PI;
        console.log(radius.toFixed(2));
    }

    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}