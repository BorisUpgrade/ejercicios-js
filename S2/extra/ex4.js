/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto 
devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.*/



function findArrayIndex(array, text) {
    for(const e in array){
    if(array[e] === text ){
        console.log(e);
    }
}
}

findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');