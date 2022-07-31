/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.*/

function cambiar(array, num1, num2){   
    const comodin = array[num2];
    array[num2] = array[num1];
    array[num1] = comodin;
    console.log(array);

    

}


cambiar(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],1,3);

