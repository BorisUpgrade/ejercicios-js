/*añade un evento 'input' que ejecute un console.log con el valor del input.*/
const text$$ = document.querySelector('input');
function valor(event){
    console.log(text$$.value);
}

text$$.addEventListener('input',valor);
