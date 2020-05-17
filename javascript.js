const baseURL = "https://superheroapi.com/api.php/2463499803965064"; 
const baseURLsearch = "https://superheroapi.com/api.php/2463499803965064/search";
const baseURLhero = "https://superheroapi.com/api.php/2463499803965064";
const keyCodeEnter = 13;

var input = document.getElementsByTagName('input')[0];
var button = document.getElementsByTagName('button')[0];
var searchName = document.getElementsByName('search')[0];
var list = document.getElementsByTagName('ul')[0];
var titleSearchA = document.getElementById('titlesearch1');
var titleSearchB = document.getElementById('titlesearch2');
var searchResults = document.getElementById('searchResults');
var myhero = document.getElementById('myhero');

function searchHeroes(){
    fetch(`${baseURLsearch}/${input.value}`)
    .then(function(response) {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(function(data){
        var newList = document.createElement('ul');

        data.results.forEach(function(hero) {

            var title = document.createElement('h3');
            title.innerHTML = hero.name;

            var imageHero = document.createElement('img');
            imageHero.src = hero.image.url;

            var goToHero = document.createElement('button');
            goToHero.innerHTML = 'select';
            goToHero.addEventListener('click',function(){
                displayHero(hero);
            }); 

            var item = document.createElement('li');
            item.appendChild(imageHero);
            item.appendChild(title);
            item.appendChild(goToHero);
            newList.appendChild(item);
        });

        list.replaceWith(newList);
        list=newList;
        myhero.classList.remove('active');
        searchResults.classList.add('active');
        titleSearchA.innerHTML = ('recherche pour ')+(input.value);
        input.value ='';
    });
};

/*
var oldImageHero = document.getElementsByTagName('img')[0];
var oldList = document.getElementsByTagName('ul')[0];
*/

function displayHero(hero){

    var newList = document.createElement('ul');
    newList.classList.add('columns');
    
    var imageHero = document.createElement('img');
    imageHero.src = hero.image.url;
    imageHero.classList.add('columns'); 
    myhero.appendChild(imageHero);

    var titleHero = document.createElement('li');
    var idHero = document.createElement('li');
    idHero.innerHTML = 'Id : '+hero.id;
    titleHero.innerHTML = 'Full-name : '+hero.biography['full-name']; 
    
    var gender = document.createElement('li');
    gender.innerHTML = 'Gender : '+hero.appearance.gender;

    var raceHero = document.createElement('li');
    raceHero.innerHTML = 'Race : '+hero.appearance.race;

    var publisher = document.createElement('li');
    publisher.innerHTML = 'Publisher : '+hero.biography.publisher;

/*
    oldList.replaceWith(newList);
    oldList=newList;
    oldImageHero = document.getElementsByTagName('img')[0];
    oldImageHero=imageHero;
*/


    titleSearchB.innerHTML = hero.name;
    myhero.appendChild(newList);
    newList.appendChild(titleHero);
    newList.appendChild(idHero);
    newList.appendChild(gender);
    newList.appendChild(raceHero);
    newList.appendChild(publisher);

//    oldImageHero.replaceWith(imageHero);
//    oldList.replaceWith(newList);
//    oldImageHero = imageHero;
//    list = newList;
    searchResults.classList.remove('active');
    myhero.classList.add('active');
    
};

button.addEventListener('click', searchHeroes);
input.addEventListener('keyup', function(event) {
    if(event.keyCode === keyCodeEnter) {
        button.click();
    };
});