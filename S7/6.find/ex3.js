/*usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'.
usa spread operator para fusionarlos 
teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.*/


const aliens = [
    {name: 'Zalamero', planet: 'Eden', age: 4029},
    {name: 'Paktu', planet: 'Andromeda', age: 32},
    {name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [
    {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
    {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
    {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const findAlien = aliens.find(alien => alien.name == 'Cucushumushu');
const findMutation = mutations.find(mutation => mutation.name == 'Porompompero');

console.log(findAlien);
console.log(findMutation);

const fusionedAlien = {...findMutation, mutation: {...findMutation}} ;

console.log(fusionedAlien);
