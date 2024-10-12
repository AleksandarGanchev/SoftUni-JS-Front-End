function attachGradientEvents() {
    const gradientElement = document.querySelector('#gradient');
    const resultElement = document.querySelector('#result');
    
    function calculatePercentage(e) {
        let percentage = (e.offsetX / gradientElement.clientWidth) * 100;
        resultElement.textContent = `${Math.floor(percentage)}%`;
    }

    function hidePercentage() { 
        resultElement.textContent = '';
    }

    gradientElement.addEventListener('mousemove', calculatePercentage);
    gradientElement.addEventListener('mouseout', hidePercentage);
}