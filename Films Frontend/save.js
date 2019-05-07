/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser/
/eslint 'no-console':0*/

var heart = document.querySelector('.heart');
var downloadButton = document.querySelectorAll('.save');
console.log(downloadButton);

var counter = 0;

function saveCounter() {
    heart.classList.toggle('saveCounter');
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        counter++;
    } else {
        counter--;
    }
    console.log('counter', counter);
}
for (var i = 0; i < downloadButton.length; i++) {
    console.log("test")
    downloadButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        console.log(this);
    });
}