/*inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild.*/

const locDiv$$ = document.querySelectorAll('div')[1];
const newP$$ = document.createElement('p');
document.body.insertBefore(newP$$, locDiv$$);
newP$$.textContent = 'Voy en medio!';


