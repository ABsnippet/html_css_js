
var randomnumber1 = Math.floor(Math.random() * 6) +1;
var randomnumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice"+randomnumber1+".png";
var randomDiceImage2 = "images/dice"+randomnumber2+".png";

var randomImageSource = "images/"+randomDiceImage;



var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSource);
image2.setAttribute("src",randomDiceImage2)

if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
    else{
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

    }
