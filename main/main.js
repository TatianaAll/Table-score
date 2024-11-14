// 1- get my HTML elements I need to get/change
let buttons = document.querySelectorAll("button");
// let inputs = document.querySelectorAll("input");
let paragraphs = document.querySelectorAll("p");

// I get my form whose contain all my 4 buttons
let form = document.querySelector("form");


// quand je rentre un truc dans mon input je le récupère dans mon JS
// et ça lors de mon click sur le bouton correspondant
// je vérifie que c'est bien un chiffre
// le chiffre ajouté va aller s'additionner avec les chiffre existant dans une variable
// et s'afficher dans le p de la section "classement"

let score = 0;

// pour chaque bouton je fais un addEventListener
buttons.forEach((button) => {
  let score = 0;
  button.addEventListener("click", (e) => {
    // le input correspondant au bouton = son frère direct
    let closeInput = button.previousSibling.previousSibling;
    // console.log(closeInput.value);
    // j'ajoute mon score en faisant un parseInt pour le mettre en int
    score = score + parseInt(closeInput.value);
    // console.log(score)
  });
});
