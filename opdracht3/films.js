var section = document.querySelector('section');
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//json data wordt ingeladen
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
console.log('request', request);

request.onload = function () {
    populateSection(request.response);
    console.log(request.response);

}

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

//de functie van de films wordt hier aangemaakt
function populateSection(json0bj) {
    console.log("function populateSection", json0bj);

    //stap 1: maak elementen aan, deze worden gekoppeld aan de html
    var titel = document.createElement('h2');
    var img = document.createElement('img');
    var plot = document.createElement('p');
    //var deadevil = document.activeElement('a');

    var titel1 = document.createElement('h2');
    var img1 = document.createElement('img');
    var plot1 = document.createElement('p');

    var titel2 = document.createElement('h2');
    var img2 = document.createElement('img');
    var plot2 = document.createElement('p');

    //stap 2: Json koppelen aan html, films worden uit de Array gehaald
    titel.textContent = json0bj[0].title;
    img.setAttribute("src", json0bj[0].cover);
    plot.textContent = 'Plot: ' + json0bj[0].simple_plot;
   // deadevil.setAttribute= ("href", "/meerinfo.html");

    titel1.textContent = json0bj[1].title;
    img1.setAttribute("src", json0bj[1].cover);
    plot1.textContent = 'Plot: ' + json0bj[1].simple_plot;

    titel2.textContent = json0bj[2].title;
    img2.setAttribute("src", json0bj[2].cover);
    plot2.textContent = 'Plot: ' + json0bj[2].simple_plot;

    //stap 3: voeg de gemaakte elementen aan section toe uit de html
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
