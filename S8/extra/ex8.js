/*Vamos a utilizar la api `https://ghibliapi.herokuapp.com/films` 
para pintar las peliculas en una galería.
Recoge los datos de la api y 
recorrelos para pintar en la web la imagen y el titulo de las peliculas.
Añade también clases a los elementos para poder darle estilos*/
const baseUrl = 'https://ghibliapi.herokuapp.com/films';
const div$$  = document.querySelector('div');

fetch(baseUrl).then((res)=>res.json()).then((films)=>{
    createApi(films);
})

const createApi = (films) => {
    console.log(films);
    const newDiv$$ = document.createElement('div');
    document.body.appendChild(newDiv$$);
    newDiv$$.className = 'gallery';
    for(var film of films){
        const gallery$$ = document.querySelector('.gallery');
        const newDiv$$ = document.createElement('div');
        gallery$$.appendChild(newDiv$$);
        newDiv$$.className = 'gallery_item';
        newDiv$$.innerHTML = `<h3 class='title'>${film.title}</h3><h5>(${film.original_title})</h5><img class="img" src="${film.image}" alt="Imagen de ${film.title}"><p><strong>Sinapsis: </strong>${film.description}</p>`;
        newDiv$$.addEventListener("mouseover", mostrarSinapsis)
    }
}

const mostrarSinapsis = () =>{
    const gItem$$ = document.querySelector('.gallery_item');
    console.log('h')

}
