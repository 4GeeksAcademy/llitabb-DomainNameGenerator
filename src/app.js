/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//estos son las variables para los elementos que luego generará
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//función condicional para generar todas las posibilidades de dominio que
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let dominio = pronoun[i] + adj[j] + noun[k] + ".com";
      {
        console.log(dominio);
      }
    }
  }
}

//window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");};
