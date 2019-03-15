  function currentWeather(townid) { 
        var section = document.querySelector('#summary');
        var requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + townid + "&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial";
        var weatherRequest = new XMLHttpRequest();
        weatherRequest.open('GET', requestURL, true);
        weatherRequest.responseType = 'json';
        weatherRequest.send();

        weatherRequest.onload = function() {
          var data = weatherRequest.response;
          console.log(data);

    var temp = parseFloat(weatherData.main.temp);
    var windy = parseFloat(weatherData.wind.speed);

    var chill = windChill(temp, windy);

    function windChill(tempF2, speed2) {
    var newS = Math.pow(speed2, 0.16);
    var f = (35.74 + (0.6215 * tempF2)) - (35.75 * newS) + ((0.4275 * tempF2) * newS);
    var chill = Math.round(f*10)/10
    return chill;
    }
            var conditions = document.createElement('article');
            var header = document.createElement('h2');
            var current = document.createElement('p');
            var high = document.createElement('p');
            var humidity = document.createElement('p');
            var wind = document.createElement('p');
            var chilly = document.createElement('p');

            header.textContent = "Weather Summary";
            current.textContent = "Currently: " + weatherData.weather[0].main;
            high.textContent = 'High: ' + parseFloat(weatherData.main.temp);
            humidity.textContent = 'Humidity: ' + weatherData.main.humidity;
            wind.textContent = 'Wind Speed: ' + parseFloat(weatherData.wind.speed);
            chilly.textContent = 'Wind Chill: ' + chill.toFixed(0) + '&deg; F';

           conditions.appendChild(header);
           conditions.appendChild(current); 
           conditions.appendChild(high);
           conditions.appendChild(humidity);
           conditions.appendChild(wind);
           conditions.appendChild(chilly);

        }
    }

    function forecast(townid) { 
        var section = document.querySelector('#forecast');
        var requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + townid + "&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial";
        var forecastRequest = new XMLHttpRequest();
        forecastRequest.open('GET', requestURL, true);
        forecastRequest.responseType = 'json';
        forecastRequest.send();

        forecastRequest.onload = function() {
          var data = weatherRequest.response;
          console.log(data);