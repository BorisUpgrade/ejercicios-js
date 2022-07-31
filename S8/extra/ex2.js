/*Ahora vamos a trabajar con JSON SERVER para simular una api. 
instálalo de manera global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, 
ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json.
Los datos que nos brindará serán los alojados en el archivo exercise-2.json y 
estarán accesibles por defecto en la url localhost:3000.
Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot.
Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.
Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``para su .title
un  ``<h5>``para su .date y un ``<p>`` para.description.

Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...*/

const div$$ = document.querySelectorAll('div');


fetch('http://localhost:3000/diary')
.then((res) => res.json())
.then((diaries) => {
    const sortedDiary = orderDiaryNotes(diaries);
    createDomDiaries(sortedDiary); 
})


const orderDiaryNotes = (diary) => {
    return diary.sort((a, b) => new Date(a.date) - new Date(b.date)) 
}


const createDomDiaries = (diaries) => {
    for(const post of diaries){
        const newDiv$$ = document.createElement('div');
        /*const newButton$$ = document.createElement('button');
        const newH5$$ = document.createElement('h5');
        const newH3$$ = document.createElement('h3');
        const newP$$ = document.createElement('p');

        document.body.appendChild(newDiv$$);
        newDiv$$.appendChild(newH3$$);
        newDiv$$.appendChild(newH5$$);
        newDiv$$.appendChild(newP$$);
        newDiv$$.appendChild(newButton$$);

        newH3$$.textContent = `${post.title}`;
        newH5$$.textContent = `${post.date}`;
        newP$$.textContent = `${post.description}`;
        newButton$$.textContent = `borrar post`;*/

        document.body.appendChild(newDiv$$);
        newDiv$$.innerHTML = `<h5>${post.date}</h5><h3>${post.title}</h3><p>${post.description}</p>`

        
        button$$.addEventListener('click', () => borrar(newDiv$$));
    }
    function borrar(newDiv$$){
    
        newDiv$$.remove()
    };

}

