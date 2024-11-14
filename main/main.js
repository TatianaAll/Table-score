// 1- get my HTML elements I need to get/change
let buttons = document.querySelectorAll("button");
// let inputs = document.querySelectorAll("input");
let paragraphs = document.querySelectorAll("p");

// I get my form whose contain all my 4 buttons
let form = document.querySelector("form");


// pour chaque bouton je fais un addEventListener
buttons.forEach((button, index) => {
  let score = 0;

  button.addEventListener("click", (e) => {
    // get the input of the corresponding button
    let currentInput = getInput(button);
    
    // check if the inupt was fill with a number 
    if (verifNumber(currentInput.value)) {
      score = score + parseInt(currentInput.value);
      console.log("coucou");
      writeInP(index, score);
    }

    currentInput.value = "";
  });
});


function getInput(element) {
  // le input correspondant au bouton = son frère direct
  let closeInput = element.previousSibling.previousSibling;
  // console.log(closeInput.value);
  // console.log(score)
  return closeInput;
}

function writeInP(index, score) {
  let pTarget = paragraphs[index];
  console.log(pTarget);
  pTarget.innerHTML = score;
}

function verifNumber(valueToVerif) {
  let numberPattern = /^[0-9]+$/; // RegEx qui correspond à un nombre entier positif
  return numberPattern.test(valueToVerif);
}