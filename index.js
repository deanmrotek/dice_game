
function rolldice() {

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource1 = "images/dice"+randomNumber1+".png";
var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);


//document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}


}

rolldice();

document.querySelector("button").addEventListener("click", rolldice);

