var section = document.querySelector('section');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//json data
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

//
request.onload = function () {
        populateSection(request.response);
     
    }
//de functie    
function populateSection(json0bj) {
    console.log("function populateSection", json0bj);
    
    //informatie eerste film 
    var myH1 = document.createElement('h1');
    myH1.textContent = json0bj[0].title;
    section.appendChild(myH1);
    
    var myImg = document.createElement('img');
    myImg.setAttribute("src",json0bj[0].cover);
    section.appendChild(myImg);
}


