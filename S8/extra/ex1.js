/*En base a la api de Breaking Bad (https://breakingbadapi.com/),
vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie.
Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.*/

fetch('https://ghibliapi.herokuapp.com/films')
.then(res => res.json())
.then(films =>{
    createDomCharacters(films)
})

const createDomCharacters = (films) => {
    for(const film of films){
        const newDiv$$ = document.createElement('div');
        document.body.appendChild(newDiv$$)
        newDiv$$.innerHTML = `<img src="${film.image}"/><h1>${film.title}</h1>`
    }
}


