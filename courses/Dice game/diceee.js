var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"
} else if (randomNumber2 >  randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw!"
}