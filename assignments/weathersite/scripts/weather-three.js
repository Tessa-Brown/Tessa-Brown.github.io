function conditions(townid) {
    var container = document.querySelector('.summaryFour');
    var weatherRequest = new XMLHttpRequest();
    var apiURLString = 'https://api.openweathermap.org/data/2.5/weather?id=' + townid 
                        + '&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial';

        weatherRequest.open('GET', apiURLString, true);
        weatherRequest.responseType = 'json';
        weatherRequest.send();
        weatherRequest.onload = function(){
            
            var weatherData = weatherRequest.response;
            console.log(weatherData);

            var heading = document.createElement('h3');
            var conditions = document.createElement('ul');
            var current = document.createElement('li');
            var high = document.createElement('li');
            var humidity = document.createElement('li');
            var wind = document.createElement('li');
            var chilly = document.createElement('li');

            var description = weatherData.weather[0].main;
            var temp = parseFloat(weatherData.main.temp);
            var humid = weatherData.main.humidity;
            var windOut = parseFloat(weatherData.wind.speed);


            var chill = windChill(temp, windOut);

            function windChill(tempF2, speed2) {
                var newS = Math.pow(speed2, 0.16);
                var f = (35.74 + (0.6215 * tempF2)) - (35.75 * newS) + ((0.4275 * tempF2) * newS);
                var final = Math.round(f*10)/10
                return final;
                } 

            heading.textContent = 'Weather Summary';
            current.textContent = 'Currently: ' + description;
            high.textContent = 'Temperature: ' + temp + '°F';
            humidity.textContent = 'Humidity: ' + humid + "%";
            wind.textContent = 'Wind Speed: ' + windOut + 'mph';
            chilly.textContent = 'Wind Chill: ' + chill + '°F';


            conditions.appendChild(current);
            conditions.appendChild(high);
            conditions.appendChild(humidity);
            conditions.appendChild(wind);
            conditions.appendChild(chilly);
        
           
            container.appendChild(heading);
            container.appendChild(conditions);
}
}