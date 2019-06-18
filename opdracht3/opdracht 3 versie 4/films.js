// Code verkregen uit de tutorial:
var section = document.querySelector('section');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//json data wordt ingeladen
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

//De functie van de load/GIF wordt hier aangemaakt
request.onload = function () {
    populateSection(request.response);
    console.log(request.response);

}
 //De event load wordt aan het html element met class "loader" toegepast
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});

//de functie van de films wordt hier aangemaakt
function populateSection(json0bj) {
    console.log("function populateSection", json0bj);

    //stap 1: maak elementen aan, deze komen uit de Json data en worden gekoppeld aan de html

    //film 1
    var titel = document.createElement('h2');
    var img = document.createElement('img');
    var plot = document.createElement('p');

    //film 2
    var titel1 = document.createElement('h2');
    var img1 = document.createElement('img');
    var plot1 = document.createElement('p');

    //film 3
    var titel2 = document.createElement('h2');
    var img2 = document.createElement('img');
    var plot2 = document.createElement('p');

    //stap 2: Json koppelen aan html,  de films worden hier uit de Array gehaald
    titel.textContent = json0bj[0].title;
    img.setAttribute("src", json0bj[0].cover);


    titel1.textContent = json0bj[1].title;
    img1.setAttribute("src", json0bj[1].cover);
    plot1.textContent = 'Plot: ' + json0bj[1].simple_plot;

    titel2.textContent = json0bj[2].title;
    img2.setAttribute("src", json0bj[2].cover);
    plot2.textContent = 'Plot: ' + json0bj[2].simple_plot;

    //stap 3: voeg de gemaakte elementen aan de section toe. Dit is een HTML element. De Json data wordt hier ingeladen.
    
    section.appendChild(titel);
    section.appendChild(img);
    section.appendChild(plot);

    section.appendChild(titel1);
    section.appendChild(img1);
    section.appendChild(plot1);

    section.appendChild(titel2);
    section.appendChild(img2);
    section.appendChild(plot2);

}


//Met deze code kan ik de buttons voor mijn "night and daymode" aansturen om de achtergrond van kleur te veranderen.
document.getElementById("daymode").addEventListener("click", function () {
    document.body.style.background = "#98a0a0";
})

document.getElementById("nightmode").addEventListener("click", function () {
    document.body.style.background = "#000000";
})
