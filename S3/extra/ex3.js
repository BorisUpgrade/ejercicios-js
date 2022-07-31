/*Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere"*/



const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.body.querySelector("[data-function='printHere']");
const newUl$$ = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
    const newLi$$ = document.createElement('li');
    div$$.appendChild(newUl$$);
    newUl$$.appendChild(newLi$$);
    newLi$$.textContent = cars[i];
    
}