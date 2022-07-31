/*Crea una función llamada ``rollDice()`` 
reciba como parametro el numero de caras que queramos que tenga el dado 
silumar el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado.
Si no se te ocurre como hacer un numero aleatorio no te preocupes! 
busca información sobre la función de javascript ``Math.random()``*/

function rollDice(numCaras){
    return Math.floor(Math.random() * (maxNum - 1) + 1);

}

console.log(rollDice(10));
console.log(rollDice(20));