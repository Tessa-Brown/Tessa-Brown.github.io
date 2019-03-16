function conditions(townid) {
    var container = document.querySelector('#summary');
    var weatherRequest = new XMLHttpRequest();
    var apiURLString = 'https://api.openweathermap.org/data/2.5/weather?id=' + townid 
                        + '&APPID=68d549a21785ffa96111f8b7a8d9287f&units=Imperial';

        weatherRequest.open('GET',apiURLString, true);
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

            var tempF = parseFloat(weatherData.main.temp);
            var speed = parseFloat(weatherData.wind.speed);
            var chill = windChill(temp, windy);

            function windChill(tempF2, speed2) {
                var newS = Math.pow(speed2, 0.16);
                var f = (35.74 + (0.6215 * tempF2)) - (35.75 * newS) + ((0.4275 * tempF2) * newS);
                var chill = Math.round(f*10)/10
                return chill;
                } 

            heading.textContent = 'Weather Summary';
            current.textContent = 'Currently: ' + weatherData.weather[0].main;
            high.innerHTML = 'Temperature: ' + tempF + '&#176; F';
            humidity.innerHTML = 'Humidity: ' + weatherData.main.humidity + '&#37;';
            wind.textContent = 'Wind Speed: ' + speed + ' mph';
            chilly.textContent = 'Wind Chill: ' + chill + '&#176; F';


            conditions.appendChild(current);
            conditions.appendChild(high);
            conditions.appendChild(humidity);
            conditions.appendChild(wind);
            conditions.appendChild(chilly);

            container.appendChild(heading);
            container.appendChild(conditions); 
        }
}

function forecast(townid){
    var table = document.querySelector('#forecast');
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
                var foreBox = document.createElement('div');
                var day = document.createElement('h3');
                var icon = document.createElement('img');
                var temp = document.createElement('p');

                var iconURL = 'https://openweathermap.org/img/w/'+ days[i].weather[0].icon + '.png';
                var iconDes = days[i].weather[0].description;
                var today = new Date(days[i].dt * 1000);
                var currentDay = today.getDay();
                var allDays = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

                foreBox.setAttribute('class','forecast');
                day.textContent = allDays[currentDay];
                icon.setAttribute('src',iconURL);
                icon.setAttribute('alt',iconDes);
                temp.innerHTML = 

                foreBox.appendChild(day);
                foreBox.appendChild(icon);
                foreBox.appendChild(temp);

                table.appendChild(foreBox);
            }
        }
}