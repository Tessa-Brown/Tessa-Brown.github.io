function townEvents(name) { 
        var section = document.getElementsByClassName('events');
        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
          var data = request.response;
          showEvents(data);
        }

        function showEvents(jsonData) {
            var towns = jsonData['towns'];
             for(var i=0; i < towns.length; i++){
           
            if(towns[i].name == name){

                var events = towns[i].events;
                var heading = document.createElement('h2');
                var list = document.createElement('ul');

                heading.textContent = 'Events';
                
             
                for(var n=0; n < events.length; n++){
                    var date = document.createElement('li');
                    
                    date.textContent = events[n];
                    list.appendChild(date);
                }
                
                document.getElementsByClassName("events").appendChild(heading);
                document.getElementsByClassName("events").appendChild(list);
            }
        }
    }
}