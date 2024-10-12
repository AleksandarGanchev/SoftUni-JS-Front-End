function attachEvents() {
    const button = document.querySelector('#submit');
    const inputElement = document.querySelector('#location');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastElement = document.querySelector('#forecast');
    const currentElement = document.querySelector('#current');
    const upcomingElement = document.querySelector('#upcoming');
    const firstLabel = document.querySelector('.label');

    let ForecastInfo = document.createElement('div')
    ForecastInfo.setAttribute('class', 'forecast-info')

    const weatherSymbols = {
        'Sunny': '\u2600',       
        'Partly sunny': '\u26C5',  
        'Overcast': '\u2601',      
        'Rain': '\u2614',          
        'Degrees': '\u00B0'        
    };
    

    button.addEventListener('click', ()=> {
        let conditions = ''
        fetch(url)
            .then(res => res.json())
            .then(data => {
                   const location = data.find(loc => loc.name == inputElement.value);                   
                   conditions = location.code                   

                  fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(res => res.json())
                    .then(info => {
                        currentElement.innerHTML = ''
                        currentElement.appendChild(firstLabel);
                        let weatherObj = Object.values(info).find(x => x.condition);

                        let DivForecasts = document.createElement('div');
                        DivForecasts.setAttribute('class', 'forecasts');
                        
                        let conditionSymbolSpan = document.createElement('span');
                        conditionSymbolSpan.setAttribute('class', 'condition symbol');
                        conditionSymbolSpan.textContent = weatherSymbols[weatherObj.condition];

                        let conditionSpan = document.createElement('span');
                        conditionSpan.setAttribute('class', 'condition');
                        let citySpan = document.createElement('span');
                        let degreesSpan = document.createElement('span');
                        let weatherpan = document.createElement('span');

                        citySpan.setAttribute('class', 'forecast-data');
                        degreesSpan.setAttribute('class', 'forecast-data');
                        weatherpan.setAttribute('class', 'forecast-data');

                        citySpan.textContent = info.name;
                        degreesSpan.textContent = `${weatherObj.low}${weatherSymbols['Degrees']}/${weatherObj.high}${weatherSymbols['Degrees']}`; 
                        weatherpan.textContent = weatherObj.condition;
                        
                        conditionSpan.appendChild(citySpan);
                        conditionSpan.appendChild(degreesSpan);
                        conditionSpan.appendChild(weatherpan);

                        forecastElement.style.display = 'block';
                        DivForecasts.appendChild(conditionSymbolSpan);
                        DivForecasts.appendChild(conditionSpan);
                        currentElement.appendChild(DivForecasts);           
                    })
                    

                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
                        .then(res => res.json())
                        .then(data1 => {
                            ForecastInfo.innerHTML = ''                           
                            data1.forecast.forEach(x => {                                
                                let UpcomingSpan = document.createElement('span');
                                UpcomingSpan.setAttribute('class', 'upcoming');

                                let symbolSpan = document.createElement('span');
                                let forecastDegrees= document.createElement('span');
                                let forecastType = document.createElement('span');
                                
                                symbolSpan.setAttribute('class', 'symbol');
                                forecastDegrees.setAttribute('class', 'forecast-data');
                                forecastType.setAttribute('class', 'forecast-data');
                                
                                symbolSpan.textContent = weatherSymbols[x.condition];
                                forecastDegrees.textContent = `${x.low}${weatherSymbols['Degrees']}/${x.high}${weatherSymbols['Degrees']}`;
                                forecastType.textContent = x.condition;

                                UpcomingSpan.appendChild(symbolSpan);
                                UpcomingSpan.appendChild(forecastDegrees);
                                UpcomingSpan.appendChild(forecastType);

                                ForecastInfo.appendChild(UpcomingSpan);
                                upcomingElement.appendChild(ForecastInfo);
                                
                            })
                        })
            })
            .catch(err => {   
                forecastElement.textContent = 'Error';
            })
    })  
}

attachEvents();