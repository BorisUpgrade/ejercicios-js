/*inserta p con el texto 'Voy dentro!',
dentro de todos los div con la clase .fn-insert-here*/


const locDiv$$ = document.querySelectorAll('.fn-insert-here');


for(const div$$ of locDiv$$){
    const newP$$ = document.createElement('p');
    div$$.appendChild(newP$$);
    newP$$.textContent = 'Voy dentro!';
}

