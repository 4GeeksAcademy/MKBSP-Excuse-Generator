/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // Call generateExcuse once on page load
  generateExcuse();

  // Attach event listener to button
  document
    .querySelector("#generate-excuse")
    .addEventListener("click", generateExcuse);
};

//Excude Function
function generateExcuse() {
  //excuse arrays
  let who = ["The dog", "My grandma", "His turtle", "My bird", "The Dinosaur"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //All the different parts of the excuse
  let whoRandomNumber = Math.floor(Math.random() * who.length);
  let excuseWho = who[whoRandomNumber];

  let actionRandomNumber = Math.floor(Math.random() * action.length);
  let excuseAction = action[actionRandomNumber];

  let whatRandomNumber = Math.floor(Math.random() * what.length);
  let excuseWhat = what[whatRandomNumber];

  let whenRandomNumber = Math.floor(Math.random() * when.length);
  let excuseWhen = when[whenRandomNumber];

  let excuse =
    excuseWho + " " + excuseAction + " " + excuseWhat + " " + excuseWhen;

  document.querySelector("#my-excuse").innerHTML = excuse;
}
