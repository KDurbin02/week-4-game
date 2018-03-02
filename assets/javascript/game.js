//assign a random value to each crystal (1-20)
//assign a random number/value to page
//on click function for each crystal
//math function to add up values from clicked crystals
//function to check clicked values to page value
//if clicked values equal page values alert "you win"
//if clicked valuse are greater than page value alert "you lose"
//keep track of wins and losses
//reset page and begin again

var crystal1;
var crystal2;
var crystal3;
var crystal4;
var pageTarget;
var playerScore = 0;
var wins = 0;
var losses = 0;

function begin() {
    pageTarget = Math.floor(Math.random() * 103) + 19;
    $("#target_number").html(pageTarget);
    console.log(pageTarget);
    var crystalholder = ["", "", "", ""];

    for (i = 0; i < 4; i++) {
        var crystalRand = Math.floor(Math.random() * 12) + 1;
        crystalholder[i] = crystalRand;
    };
    crystal1 = crystalholder[0];
    crystal2 = crystalholder[1];
    crystal3 = crystalholder[2];
    crystal4 = crystalholder[3];

    playerScore = 0;

    $("#player_score").html(playerScore);
};

begin();

function onClick(crystalValue) {
    playerScore += crystalValue;
    $("#player_score").html(playerScore);

    if (playerScore === pageTarget) {
        alert("You Win!");
        wins++;
        $("#wins").html(wins);
        begin();
    } else if (playerScore > pageTarget) {
        alert("You Lose");
        losses++;
        $("#losses").html(losses);
        begin();
    }
};

$("#c1").click(function () {
    //crystal1
    onClick(crystal1);
});
$("#c2").click(function () {
    //crystal2
    onClick(crystal2);
});
$("#c3").click(function () {
    //crystal3
    onClick(crystal3);
});
$("#c4").click(function () {
    //crystal4
    onClick(crystal4);
});

// number of drops created.
var nbDrop = 858;

// function to generate a random number range.
function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

    for (i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 1600);
        var dropTop = randRange(-1000, 1400);

        $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
        $('#drop' + i).css('left', dropLeft);
        $('#drop' + i).css('top', dropTop);
    }

}
// Make it rain
createRain();

