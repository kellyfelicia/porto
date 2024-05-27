
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var start = false;
var level = 0;

$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level " +  level);
        nextSequence();
        start = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success.")

        if (userClickedPattern.length == gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);

        }
    } else {

        $("body").addClass("game-over");

        var wSound  = new Audio ("sounds/wrong.mp3");
        wSound.play();
    

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 100);

        $("h1").text("Game Over, press Any Key to Restart.");

        startOver();
    }

}

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(name){

    var sound  = new Audio ("sounds/" + name + ".mp3");
    sound.play();

}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    start = false;

}



