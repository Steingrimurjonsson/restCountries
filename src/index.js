import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");
 

//Joke by id and add
document.getElementById("but").onclick = function (e) {
    e.preventDefault();
    const idJ = document.querySelector("#txt");
   // console.log(idJ.value);
 const allJokes = jokes.getJokeById([idJ.value]);
 document.getElementById("jokes").innerHTML = allJokes;
  
 }

 document.getElementById("but2").onclick = function (e) {
    e.preventDefault();
    const idJ = document.querySelector("#txt");
   // console.log(idJ.value);
 jokes.addJoke(idJ.value);

 const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
 document.getElementById("jokes").innerHTML = allJokes.join("");
 }

 

 function jokeToP(item) {
    var dataJoke = [item.joke];
    return dataJoke;
}

document.getElementById("but3").onclick = function getQuote(e) {
    e.preventDefault();
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const quote = document.querySelector("#q");
        quote.innerHTML = jokeToP(data);
    });
  
 }

    //setInterval(function() {
    //    getQuote;
  //}, 5000);


 //SVG NSEW
 window.onload = function(){
    document.getElementById('north').addEventListener("click", getNorth);
    document.getElementById('west').addEventListener("click", getWest);
    document.getElementById('south').addEventListener("click", getSouth);
    document.getElementById('east').addEventListener("click", getEast);
}

var yCO = "You Clicked On = ";





function getNorth(){
    var x = document.getElementById("north");
    var y = document.getElementById("clickedOn");
    y.innerText = yCO +  x.id;
}

function getWest(){
    var x = document.getElementById("west");
    var y = document.getElementById("clickedOn");
    y.innerText = yCO +  x.id;
}

function getSouth(){
    var x = document.getElementById("south");
    var y = document.getElementById("clickedOn");
    y.innerText = yCO +  x.id;
}

function getEast(){
    var x = document.getElementById("east");
    var y = document.getElementById("clickedOn");
    y.innerText = yCO +  x.id;
}