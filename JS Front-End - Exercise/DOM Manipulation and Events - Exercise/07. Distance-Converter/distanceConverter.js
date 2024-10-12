function attachEventsListeners() {
    let buttonElement = document.getElementById('convert');
    let inputDistanceElement = document.getElementById('inputDistance');
    let outputDistanceElement = document.getElementById('outputDistance')
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let converter = {
        'm': 1,
        'km': 1000,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    }

    buttonElement.addEventListener('click', (e) => {
        // let inputToMeters = converter[inputUnits.value] * inputDistanceElement.value;
        // outputDistanceElement.value = inputToMeters / converter[outputUnits.value];
        outputDistanceElement.value = (converter[inputUnits.value] * inputDistanceElement.value
         / converter[outputUnits.value]);
    })  
}