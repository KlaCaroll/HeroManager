const baseURL = "https://superheroapi.com/api.php/2463499803965064"; 
const baseURLsearch = "https://superheroapi.com/api.php/2463499803965064/search";
const baseURLhero = "https://superheroapi.com/api.php/2463499803965064";
const keyCodeEnter = 13;

var input = document.getElementsByTagName('input')[0];
var button = document.getElementsByTagName('button')[0];
var searchName = document.getElementsByName('search')[0];
var list = document.getElementsByTagName('ul')[0];
var titleSearch = document.getElementById('titlesearch');
var myhero = document.getElementById('myhero');
var nav = document.getElementsByTagName('nav')[0];
var returnToSearchHeroes = document.getElementById('return');

function searchHeroes(name){
    returnToSearchHeroes.classList.remove('active');

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
        titleSearch.innerHTML = ('Ma recherche pour '+input.value)
    });
};

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

    var powerstatsList = document.createElement('ul');
    var powerstats = document.createElement('p')
    powerstats.innerHTML = 'Power Stats'
    powerstats.classList.add('text');
            var intelligence = document.createElement('li');
            intelligence.innerHTML = 'Intelligence : '+hero.powerstats.intelligence;
            
            var strength = document.createElement('li');
            strength.innerHTML = 'Strenght : '+hero.powerstats.strength;
            
            var speed = document.createElement('li');
            speed.innerHTML = 'Speed : '+hero.powerstats.speed;
            
            var durability = document.createElement('li');
            durability.innerHTML = 'Durability : '+hero.powerstats.durability;
            
            var power = document.createElement('li');
            power.innerHTML = 'Power : '+hero.powerstats.power;
            
            var combat = document.createElement('li');
            combat.innerHTML = 'Combat : '+hero.powerstats.combat;
            
            powerstatsList.appendChild(powerstats);
            powerstats.appendChild(power);
            powerstats.appendChild(speed);
            powerstats.appendChild(strength);
            powerstats.appendChild(intelligence);
            powerstats.appendChild(combat);
            powerstats.appendChild(durability);
    
    var aliases = document.createElement('li');
    aliases.innerHTML = 'aliases : '+hero.biography.aliases;
    
    myhero.appendChild(newList);
    newList.appendChild(idHero);
    newList.appendChild(gender);
    newList.appendChild(raceHero);
    newList.appendChild(powerstatsList);
    newList.appendChild(aliases);
    newList.appendChild(publisher);

    returnToSearchHeroes.classList.add('active');

    returnToSearchHeroes.addEventListener('click', function goBack(){
    searchResults.classList.add('active');
    myhero.classList.remove('active');
    returnToSearchHeroes.classList.remove('active');
    });

    titleSearch.innerHTML = hero.name;
    nav.appendChild(returnToSearchHeroes);
    searchResults.classList.remove('active');
    myhero.classList.add('active');
    
};

button.addEventListener('click', searchHeroes);
input.addEventListener('keyup', function(event) {
    if(event.keyCode === keyCodeEnter) {
        button.click();
    };
});