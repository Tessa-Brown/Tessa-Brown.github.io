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

            var closure = document.createElement('ul');
            closure.textContent = temples[i].closures;

            for(var n=0; n < closure.length; n++){
                var info = document.createElement('li');
                
                info.textContent = closure[n];
                list.appendChild(info);
            }
        
            section.appendChild(closure);
    
          } 
        }
    }
    
    