/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //estos son las variables para los elementos que luego generará
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainList = document.getElementById("list-domain");

  //Función condicional para generar todas las posibilidades de dominio
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adj[j] + noun[k] + ".com";

        //Creo elemento <li> para cada domain generado para que aparezcan como una lista
        let domainItems = document.createElement("li");
        domainItems.textContent = domain;
        domainList.appendChild(domainItems);
      }
    }
  }
};
