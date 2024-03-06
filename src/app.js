/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //estos son las variables para los elementos que luego generará
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let listaDominios = document.getElementById("dominios-lista");

  //función condicional para generar todas las posibilidades de dominio que
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let dominio = pronoun[i] + adj[j] + noun[k] + ".com";
        //Creo elemento <li> para cada dominio generado para que aparezcan como una lista
        let domainItems = document.createElement("li");
        domainItems.textContent = dominio;
        listaDominios.appendChild(domainItems);
      }
    }
  }
};
