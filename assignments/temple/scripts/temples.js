    function templeData() { 
        var section = document.querySelector('#temples');
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

            for(var i = 0; i < temples.length; i++) {
            
            var myArticle = document.createElement('article');
            var name = document.createElement('h2');
            var address = document.createElement('p');
            var telephone = document.createElement('p');
            var history = document.createElement('ul');
            var services = document.createElement('ul');
            var ordinances = document.createElement('ul');
            var closure = document.createElement('ul');
    
    

            name.textContent = temples[i].name;
            address.textContent = temples[i].address;
            telephone.textContent = temples[i].telephone;
            history.textContent = temples[i].history;
            services.textContent = temples[i].services;
            ordinances.textContent = temples[i].ordinances;
            closures.textContent = temples[i].closures;
            
            for(var n=0; n < history.length; n++){
                var event = document.createElement('li');
                
                event.textContent = history[n];
                list.appendChild(event);
            }

            for(var n=0; n < services.length; n++){
                var service = document.createElement('li');
                
                service.textContent = services[n];
                list.appendChild(service);
            }

            for(var n=0; n < ordinances.length; n++){
                var ordinance = document.createElement('li');
                
                ordinance.textContent = ordinances[n];
                list.appendChild(ordinance);
            }

            for(var n=0; n < closures.length; n++){
                var closure = document.createElement('li');
                
                closure.textContent = closures[n];
                list.appendChild(closure);
            }
        
            myArticle.appendChild(name);
            myArticle.appendChild(address);
            myArticle.appendChild(telephone);
            myArticle.appendChild(history);
            myArticle.appendChild(services);
            myArticle.appendChild(ordinances);
    
            section.appendChild(myArticle);
          } 
        }
    }
    }
    