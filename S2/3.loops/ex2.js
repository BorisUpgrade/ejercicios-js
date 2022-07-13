/*Usa un foin para imprimir por consola los datos del alienigena.*/

const alien = {
    nombre: 'Wormuck',
    raza: 'Cucusumusu',
    planeta: 'Eden',
    peso: '259kg'
}

for(const datos in alien){
    console.log("El alien tiene "+datos+ " con valor "+alien[datos]);
}
/*var spiderman = {
    nombre: "Peter",
    apellidos: "Parker", 
    pais: "USA",
    profesion: "Student"
}
    
for (const key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}*/
