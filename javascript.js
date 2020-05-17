const baseURL = "https://superheroapi.com/api.php/2463499803965064"; 
const keyCodeEnter = 13;

var input = document.getElementsByTagName('input')[0];
var button = document.getElementsByTagName('button')[0];
var title = document.getElementById('name');
var searchName = document.getElementsByName('search')[0];
var imageHero = document.getElementById('imgHero');

/*
button.addEventListener('click', function(){
    fetch(`${baseURL}/${input.value}`)
    .then(function(response){
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(function(data){
        title.innerHTML = data.name;
        imageHero.src = data.image.url;
    });
});
*/

function getHero(){
    fetch(`${baseURL}/${input.value}`)
    .then(function(response) {
        if (!response.ok) {s
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(function(data){
        title.innerHTML = data.name;
        imageHero.src = data.image.url;
    });
};


function searchHeroByName() {
    fetch(`${baseURL}/${input.text}`)
    .then(function(response){
        if (!response.ok) {s
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
};


button.addEventListener('click', getHero);
input.addEventListener('keyup', function(event) {
    if(event.keyCode === keyCodeEnter) {
        button.click();
    };
});