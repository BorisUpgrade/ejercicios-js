/*Usa un bucle para recorrer el array de peliculas (`movies`) 
añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) 
al array `badProducts` los que tengan menos.*/

const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}];

for(let product of products){
    
    if(product.sellCount >= 20){
        goodProducts.push(product);
    }
    if(product.sellCount < 20){
        badProducts.push(product);
    }
    
}

console.log(goodProducts);
console.log(badProducts);
