<script>
    function townData() { 
        var section = document.querySelector('#data');
        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
          var data = request.response;
          showTowns(towns);
        }
       
        function showTowns(jsonData) {
          var towns = jsonObj['showTowns'];

          for(var i = 0; i < towns.length; i++) {

            var myArticle = document.createElement('article');
            var townName = document.createElement('h2');
            var motto = document.createElement('p');
            var year = document.createElement('p');
            var population = document.createElement('p');
            var rainfall = document.createElement('p');
    
            townName.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        
            }
            myArticle.appendChild(townName);
            myArticle.appendChild(motto);
            myArticle.appendChild(year);
            myArticle.appendChild(population);
            myArticle.appendChild(rainfall);
    
            section.appendChild(myArticle);
          } 
        }
        </script>