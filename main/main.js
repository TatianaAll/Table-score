// 1- get my HTML elements I need to get/change
let buttons = document.querySelectorAll("button");
// let inputs = document.querySelectorAll("input");
let paragraphs = document.querySelectorAll("p");


// I get my form whose contain all my 4 buttons
let form = document.querySelector("form");

//get divs in classment part
let gryffondor = document.querySelector("#classementGryf");
let serpentard = document.querySelector("#classementSerp");
let pouffsoufle = document.querySelector("#classementPouf");
let serdaigle = document.querySelector("#classementSerd");

let houses = [
  { score: 0, DOM: gryffondor },
  { score: 0, DOM: serpentard },
  { score: 0, DOM: pouffsoufle },
  { score: 0, DOM: serdaigle },
];

// addEventListener for 1 button after one button
buttons.forEach((button, index) => {
  let score = 0;

  button.addEventListener("click", (e) => {
    // get the input of the corresponding button
    let currentInput = getInput(button);

    // check if the input was fill with a number
    if (verifNumber(currentInput.value)) {
      score = score + parseInt(currentInput.value);
      //   adding in the array score;
      houses[index].score = score;

      //sort the houses by scores
      houses.sort((a, b) => b.score - a.score);

      writeInP(index, score);
      sortByScore();
    }

    currentInput.value = "";
  });
});

function getInput(element) {
  // le input correspondant au bouton = son frère direct
  let closeInput = element.previousSibling.previousSibling;
  return closeInput;
}

function writeInP(index, score) {
  let pTarget = paragraphs[index];
  pTarget.innerHTML = score;
  return pTarget;
}

function verifNumber(valueToVerif) {
  let numberPattern = /^[0-9]+$/; // RegEx qui correspond à un nombre entier positif
  return numberPattern.test(valueToVerif);
}

function sortByScore(){
    // je vise ma section globale de ranking
    let rankingSection = document.querySelector("section:last-of-type");
    // 
    houses.forEach(house => {
        rankingSection.appendChild(house.DOM)
    })
}