//https://superheroapi.com/api/access-token
//122252735183392223131
//api key is changed here
//find your api key here
//https://superheroapi.com/index.html


const heroImgDiv=document.getElementById("hero-img-div");
const heroNameDiv=document.getElementById("hero-name-div");
const searchInput=document.getElementById("input-hero-name");
const intelliganceDiv=document.getElementById("intelligence");
const strengthDiv=document.getElementById("strength");
const speedDiv=document.getElementById("speed");
const durabilityDiv=document.getElementById("durability");
const powerDiv=document.getElementById("power");
const combatDiv=document.getElementById("combat");

const BASE_URL="https://www.superheroapi.com/api.php";
const TOKEN="122252735183392223131";




function generateRandomHero(id){
    return fetch(`${BASE_URL}/${TOKEN}/${id}`)
    .then(response=>response.json())
    .then(json=>{
     //  console.log(json.name);
       heroNameDiv.innerHTML=`<h1>${json.name}</h1>`;
       heroImgDiv.innerHTML=`<img src=${json.image.url} alt="" height=200px width=200px>`
       intelliganceDiv.innerHTML=`<h3>Intelligance : ${json.powerstats.intelligence}</h3>`;
       strengthDiv.innerHTML=`<h3>Strength : ${json.powerstats.strength}</h3>`;
       speedDiv.innerHTML=`<h3>Speed : ${json.powerstats.speed}</h3>`;
       durabilityDiv.innerHTML=`<h3>Durability : ${json.powerstats.durability}</h3>`;
       powerDiv.innerHTML=`<h3>Power : ${json.powerstats.power}</h3>`;
       combatDiv.innerHTML=`<h3>Combat : ${json.powerstats.combat}</h3>`;

    });

}


function generateSearchedHero(name){
    return fetch(`${BASE_URL}/${TOKEN}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
       //console.log(json.name);
      heroNameDiv.innerHTML=`<h1>${json.results[0].name}</h1>`;
     console.log(json.results[0].name);
       heroImgDiv.innerHTML=`<img src=${json.results[0].image.url} alt="" height=200px width=200px>`
       intelliganceDiv.innerHTML=`<h3>Intelligance : ${json.results[0].powerstats.intelligence}</h3>`;
       strengthDiv.innerHTML=`<h3>Strength : ${json.results[0].powerstats.strength}</h3>`;
       speedDiv.innerHTML=`<h3>Speed : ${json.results[0].powerstats.speed}</h3>`;
       durabilityDiv.innerHTML=`<h3>Durability : ${json.results[0].powerstats.durability}</h3>`;
       powerDiv.innerHTML=`<h3>Power : ${json.results[0].powerstats.power}</h3>`;
       combatDiv.innerHTML=`<h3>Combat : ${json.results[0].powerstats.combat}</h3>`;
       
    });
}

function generateRandomNumber(){
    const numberOfHeroes=731;
    return Math.floor(Math.random()*numberOfHeroes)+1;
}

function randomHero(){
    return generateRandomHero(generateRandomNumber());
}

function searchHero(){
    return generateSearchedHero(searchInput.value);
}

