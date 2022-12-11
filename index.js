let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let dice1 = document.querySelectorAll("img")[0];
let dice2 = document.querySelectorAll("img")[1];

let image1 = "/images/dice" + randomNumber1 + ".png";
let image2 = "/images/dice" + randomNumber2 + ".png";

dice1.setAttribute("src", image1);
dice2.setAttribute("src", image2);

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a tie!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
