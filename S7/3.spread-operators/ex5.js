/*Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. 
usando spread operatos.*/


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorsCopy = [...colors];

colorsCopy.splice(2,1);

console.log(colorsCopy);
