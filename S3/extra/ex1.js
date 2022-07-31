/*crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.*/


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newUl$$ = document.createElement('ul');



for (let i = 0; i < countries.length; i++) {
    const newLi$$ = document.createElement('li');
    document.body.appendChild(newUl$$);
    newUl$$.appendChild(newLi$$);
    newLi$$.textContent = countries[i];
    
}

    

