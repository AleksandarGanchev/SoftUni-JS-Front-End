function attachEventsListeners() {
    let daysButton = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    let daysElement = document.querySelector('#days');
    let hoursElement = document.querySelector('#hours');
    let minutesElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');

    daysButton.addEventListener('click', (e) => {
        hoursElement.value = daysElement.value * 24;
        minutesElement.value = daysElement.value * 1440;
        secondsElement.value = daysElement.value * 86400;
    });

    hoursBtn.addEventListener('click', (e) => {
        daysElement.value = hoursElement.value / 24;
        minutesElement.value = hoursElement.value * 60;
        secondsElement.value = hoursElement.value * 3600;
    });

    minutesButton.addEventListener('click', (e) => {
        daysElement.value  = minutesElement.value / 1440;
        hoursElement.value = minutesElement.value / 24;
        secondsElement.value = minutesElement.value * 60;
    });

    secondsButton.addEventListener('click', (e) => {
        daysElement.value  = secondsElement.value / 86400;
        minutesElement.value = secondsElement.value / 60;
        hoursElement.value = secondsElement.value / 3600;
    });
}
