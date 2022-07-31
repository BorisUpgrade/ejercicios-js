/*Usa un bucle forof para recorrer todos los juguetes 
elimina los que incluyan la palabra `gato`. 
Recuerda que puedes usar la función `.includes()` para comprobarlo.*/

const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 5, name: 'gato MyYear'},
{id: 40, name: 'El gato felix'}]

for(let i = 0; i < toys.length ; i++){
    let toy = toys[i];
    
    if (toy.name.includes('gato')){
        console.log('hola');
        toys.splice([i],1);
        i--;
    }
    

/*toy.name.includes('gato') ? toys.splice([i],1) : null; */
    
}
console.log(toys);

