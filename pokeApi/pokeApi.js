const baseUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'

fetch(baseUrl).then((res)=>res.json()).then((pokemons) =>{createApi(pokemons.results)})

//funcion pintar pokemon en pokeGalery
function createApi(pokemons){
    for(var i = 0; i < pokemons.length; i++){
    const urls = pokemons[i].url;
    fetch(urls).then((res)=>res.json()).then((pokemon)=>{
        
        const pokeGalery$$ = document.querySelector('.pokeGalery');

        const newDiv$$ = document.createElement('div');
        const newH3$$ = document.createElement('h3');
        const newH4$$ = document.createElement('h4');
        const newImg$$ = document.createElement('img');
        //crear 1 div para meter la imagen (object fit, max-minwidth).
        newDiv$$.className = 'pokeGalery_item'
        pokeGalery$$.appendChild(newDiv$$);
        newDiv$$.className = 'pokeGalery_item';
        newDiv$$.appendChild(newH4$$);
        newH4$$.textContent = `${pokemon.name.toUpperCase()}`;
        newDiv$$.appendChild(newH3$$);
        newH3$$.innerHTML = `<span class="idPokemon">#${pokemon.id}</span>`;
        newDiv$$.appendChild(newImg$$);
        newImg$$.src = `${pokemon.sprites.other.dream_world.front_default}`;
        newImg$$.width = 150;

        newDiv$$.classList.add(pokemon.types[0].type.name);
        //for para recorrer tipos
        for(let type of pokemon.types){
            const newP$$ = document.createElement('p');
            newDiv$$.appendChild(newP$$);
            newP$$.className = `p_${type.type.name}`
            newP$$.textContent = `${type.type.name.toUpperCase()}`;                
        }
        
        
        const search$$ = document.querySelector('.boton_buscar');
        const input$$ = document.querySelector('input');

        search$$.addEventListener('click', () => searchPokemon(input$$.value.toLowerCase()));
        //variable cnt a 1
        //si contr 1 innrhtml 0 
        const searchPokemon = (nombre) => {
            console.log(nombre)
            const mostrar$$ = document.querySelector('.mostrar_pokemon');
            if(pokemon.name.includes(nombre)){
                //mostrar$$.innerHTML=``;
                mostrar$$.appendChild(newDiv$$);
            }
            
        }
    })
    }
}

//FUNCION PARA CREAR LISTA DE TAREAS O TO DO LIST
const tareas$$ = document.querySelector('.container');
const inputTarea$$ = document.querySelector('.input-tarea');
const agregarTarea$$ = document.querySelector('.btn-agregar');
const borrar$$ = document.querySelectorAll('.borrar');
const tarea$$ = document.querySelectorAll('.tarea');

agregarTarea$$.addEventListener('click', () => crearTarea(inputTarea$$.value));

let toDo = [ "Despertarne!!!", "Ir a por pokemon inicial", "Comprar pokeballs", "Capturar mi primer pokemon", ];

const crearTarea = (tarea) =>{
    const borrar$$ = document.querySelectorAll('.borrar');
    //const item$$ = document.getElementById(item);
    const newDiv$$ = document.createElement('div');
    const newButton$$ = document.createElement('button')
    //const newP$$ = document.createElement('p');
    tareas$$.appendChild(newDiv$$);
    newDiv$$.className = 'tarea';
    newDiv$$.innerHTML = `<input type="checkbox"><p>${tarea}</p>`/*<button type="button" class="borrar">x</button>*/;   
    newDiv$$.appendChild(newButton$$);
    newButton$$.type ='button';
    newButton$$.className = 'borrar';
    newButton$$.textContent = 'x';

    newButton$$.addEventListener('click', ()=>borrarTarea(newDiv$$));
}

const borrarTarea = (newDiv$$) => {
    newDiv$$.remove();
}


