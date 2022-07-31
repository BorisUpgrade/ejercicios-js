/*# Español
Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract.
La función sum sumara dos parametros a y b y los retornará. 
La función substract hará lo mismo pero restando 
la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback 
añadir el numero que retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList*/


const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function father(a,b,operacion){
    const result = operacion(a,b);
    numbersList.push(result);  
}

father(5,4,sum);
father(6,4,sum);
father(6,3,substract);
father(7,2,substract);

console.log(numbersList);

