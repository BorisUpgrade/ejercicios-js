/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .includes de javascript.*/


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for(let index = 0; index < products.length; index++){
    let element = products[index];
    if(element.includes('Camiseta')){
        console.log(element);
        
    }
}


