function conditions(townid) {
    var container = document.querySelector('#summary');
    var weatherRequest = new XMLHttpRequest();
    var apiURLString = 'https://api.openweathermap.org/data/2.5/weather?id=' + townid 
                        + '&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial';

        weatherRequest.open('GET', apiURLString, true);
        weatherRequest.responseType = 'json';
        weatherRequest.send();
        weatherRequest.onload = function(){
            
            var weatherData = weatherRequest.response;
            console.log(weatherData);

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

            var heading = document.createElement('h3');
            var conditions = document.createElement('ul');
            var current = document.createElement('li');
            var high = document.createElement('li');
            var humidity = document.createElement('li');
            var wind = document.createElement('li');
            var chilly = document.createElement('li');

            heading.textContent = 'Weather Summary';
            current.textContent = 'Currently: ' + description;
            high.innerHTML = 'Temperature: ' + temp + '&#176; F';
            humidity.innerHTML = 'Humidity: ' + humid;
            wind.textContent = 'Wind Speed: ' + windOut + ' mph';
            chilly.textContent = 'Wind Chill: ' + chill + '&#176; F';

            conditions.appendChild(heading);
            conditions.appendChild(current);
            conditions.appendChild(high);
            conditions.appendChild(humidity);
            conditions.appendChild(wind);
            conditions.appendChild(chilly);
        }
}

function forecast(townid){
    var section = document.querySelector('#forecast');
    var forecastRequest = new XMLHttpRequest();
    var apiURLString = 'https://api.openweathermap.org/data/2.5/forecast?id=' + townid 
                        + '&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial';

        forecastRequest.open('GET',apiURLString, true);
        forecastRequest.responseType = 'json';
        forecastRequest.send();
        forecastRequest.onload = function(){
            var fore = forecastRequest.response;
            console.log(fore);
            

            var days = [];
            for(var i=0; i<fore.list.length; i++){
                var dateString = fore.list[i].dt_txt;
                if(dateString.search('18:00:00') != -1){
                    days.push(fore.list[i]);
                }
            }

            for(i=0; i<days.length; i++){
                var foreBox = document.createElement('article');
                var day = document.createElement('h3');
                var icon = document.createElement('img');
                var temp = document.createElement('p');

                var iconURL = 'https://openweathermap.org/img/w/'+ days[i].weather[0].icon + '.png';
                var iconDes = days[i].weather[0].description;
                var today = new Date(days[i].dt * 1000);
                var currentDay = today.getDay();
                var allDays = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

                day.textContent = allDays[currentDay];
                icon.setAttribute('src',iconURL);
                icon.setAttribute('alt',iconDes);
                temp.innerHTML = fore.list[i].main.temp_max.toFixed(0) + '&deg; F';

                foreBox.appendChild(day);
                foreBox.appendChild(icon);
                foreBox.appendChild(temp);
            }
        }
}