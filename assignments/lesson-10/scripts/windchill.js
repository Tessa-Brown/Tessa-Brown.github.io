    var tempF = parseInt(document.getElementById("tempF").innerHTML);
    var speed = parseInt(document.getElementById("speed").innerHTML); 

    function windChill(tempF2, speed2) {
    var newS = Math.pow(speed2, 0.16);
    var f = (35.74 + (0.6215 * tempF2)) - (35.75 * newS) + ((0.4275 * tempF2) * newS);
    var chill = Math.round(f*10)/10
    return chill;
    }
    
    document.getElementById("output").innerHTML = "Wind Chill: " + windChill(tempF, speed) + "&#176;F";
    
    