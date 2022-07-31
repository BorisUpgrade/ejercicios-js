/* añade un evento 'focus' que ejecute un console.log con el valor del input.*/


const text$$ = document.querySelector('input');
function pulsar(event){
    console.log(event.target.value);
}
text$$.addEventListener('focus', pulsar );

