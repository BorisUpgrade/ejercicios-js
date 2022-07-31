/*# Español
Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".*/

let personaje = document.body.querySelectorAll("[data-function='testMe']");
console.log(personaje[2]);