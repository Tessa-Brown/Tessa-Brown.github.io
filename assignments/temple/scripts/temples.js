    function templeData() { 
        var section = document.querySelector('.templeData');
        var requestURL = 'https://tessa-brown.github.io/temples.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
          var data = request.response;
          showTemples(data);
        }
       
        function showTemples(jsonData) {
            var temples = jsonData['temples'];
        
            for(var i=0; i < temples.length; i++){

                var closures = towns[i].closures;
                var heading = document.createElement('h2');
                var list = document.createElement('ul');

                heading.textContent = 'Closures';

                for(var n=0; n < closures.length; n++){
                    var date = document.createElement('li');
                    
                    date.textContent = closures[n];
                    list.appendChild(date);
                }
        
                section.appendChild(heading);
                section.appendChild(list);
    
          } 
        }
    }
    
    