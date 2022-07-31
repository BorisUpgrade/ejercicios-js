/*Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, 
que podemos obtener del endpoint `http://localhost:3000/planets` y, 
que si el usuario hace click en alguno de los planetas, 
salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, 
mostrando tanto sus imágenes .avatar como sus nombres .name. 
Para poder obtener la información de los personajes
podemos hacer un filtro de los personajes llamando a la url, 
por ejemplo ``http://localhost:3000/characters?idPlanet=1`` y,
teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.

Además de esto, 
agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta.
Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.
*/
const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');
const borrar$$ = document.querySelector('.borrar');
const baseUrl = 'http://localhost:3000/'


fetch(baseUrl +'planets')
.then((res)=> res.json())
.then((planets)=>{
    createPlanets(planets);
})

//filteredChars.splice(0,filteredChars.length);
let filteredChars= [];
function printChar(idPlanet){
    characters$$.innerHTML = ``;
    search$$.innerHTML = ``;
    fetch(baseUrl+'characters?idPlanet='+idPlanet)
    .then((res)=> res.json())
    .then((chars)=>{
    //createChars(chars);
    const button$$ = document.createElement('button');
    const input$$ = document.createElement('input');
    search$$.appendChild(input$$);
    search$$.appendChild(button$$);
    button$$.textContent = 'Buscar personaje';
    button$$.addEventListener('click', () => search(input$$.value.toLowerCase()));
    filteredChars.splice(0,filteredChars.length);
    for(const char of chars){
        const newDiv$$ = document.createElement('div');
        characters$$.appendChild(newDiv$$);
        newDiv$$.innerHTML = `<h6>${char.name}</h6><img  height="50" width="25" src="${char.avatar}"/>`
        filteredChars.push(char); 
    }
})
} 



function search(busqueda){
    characters$$.innerHTML = ``;
    search.innerHTML = ``;
        for(const char of filteredChars){
            if(char.name.toLowerCase().includes(busqueda)){
                const newDiv$$ = document.createElement('div');
                characters$$.appendChild(newDiv$$);
                newDiv$$.innerHTML = `<h6>${char.name}</h6><img  height="50" width="25" src="${char.avatar}"/>`
            }
        }
}


const createPlanets = (planets) => {
    for(const planet of planets){
        const newDiv$$ = document.createElement('div');
        planets$$.appendChild(newDiv$$);
        newDiv$$.innerHTML=`<h4>${planet.name}</h4>
                            <img src="${planet.image}" width="100" height="100" />`
        
        newDiv$$.addEventListener('click', () => printChar(planet.id));
    }




}
