let weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=68d549a21785ffa96111f8b7a8d9287f";
request.open('GET', apiURLstring, true);
weatherRequest.send;

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    function () {
        console.log(weatherData);
        document.getElementById("current-temp").innerHTML = weatherData;
    }