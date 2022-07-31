/*Ejecuta `json-server --watch exercise-10.json` para obtener un 
endpoint de personajes `http://localhost:3000/characters`.

Pinta una galeria con los campos .name .image de los cinco primeros personajes.
Para ello utilizaremos el endpoint con un filtro de página y
limite de personajes de 5 por página `http://localhost:3000/characters?_page=1&_limit=5`.

Una vez pintados, crea un botón que esté situado abajo con el texto `Cargar más`.
Si hacemos click en este botón hará un nuevo fetch a la siguiente 
página de personajes por lo tanto la url debería de ser la página actual + 1 
`http://localhost:3000/characters?_page=2&_limit=5`.
De esta forma obtendremos 5 personajes más que tendremos que pintar debajo de los anteriores.

La base de datos solo tiene 20 personajes
así que lo ideal sería ocular el botón cuando estemos en la página 4.*/

const baseUrl = 'http://localhost:3000/characters';
const locButton$$ = document.querySelector('button');

var contadorAids = 1;

function sumAids(){
    contadorAids++;
    if(contadorAids > 4){
        window.confirm('suficiente aids por hoy');
        newButton$$.remove(); 
    }else{
    newButton$$.remove();
    createApp();
    }}

createApp();



function createApp(){
    console.log(contadorAids)
    fetch(baseUrl + '?_page='+contadorAids+'&_limit=5')
    .then((res)=> res.json())
    .then((characters)=>{

        for(const character of characters){
            const newDiv$$ = document.createElement('div');
            document.body.appendChild(newDiv$$);
            newDiv$$.innerHTML = `<h1>${character.id}</h1>
                                <h3>${character.name}</h3>
                                <img width ="100" src="${character.image}">`
        }
        newButton$$ = document.createElement('button');
        document.body.appendChild(newButton$$);
        newButton$$.textContent = 'Cargar mas aids';
        newButton$$.addEventListener('click', sumAids);

    })

}
