/*crea un botón con el texto 'X' para cada uno de los p que hayas insertado 
que si el usuario hace click en este botón eliminemos el parrafo asociado.*/
const button$$ = document.body.querySelector('button');
const input$$ = document.body.querySelector('input');
const newP$$ = document.createElement('p');
const p$$ = document.body.querySelector('.borrar');


function listener(){
    fetch('https://api.nationalize.io?name='+input$$.value).then((res) => {
        return res.json();
    }).then((person) =>{
        createNationalizeP(person);
    })
}
function erase(event){
    event.target.parentElement.remove();
}
const createNationalizeP = (person) => {
    const newP$$ = document.createElement('p');
    let text = `El nombre ${person.name} tiene`;
    
    for (const country of person.country) {          
        text += ` un ${country.probability*100}% de ser de ${country.country_id}, `;
    }

    const newButton$$ = document.createElement('button');
    newP$$.textContent = text;
    document.body.appendChild(newP$$);
    newP$$.appendChild(newButton$$);
    newButton$$.textContent = 'X';
    newP$$.className = 'borrar';
    newButton$$.addEventListener('click', erase);
    

}   

const button$ = document.querySelector('button');

button$.addEventListener('click', listener);
