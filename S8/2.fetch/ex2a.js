/* Añade la funcionalidad necesaria usando fetch()
para hacer una consulta a la api cuando se haga click en el botón,
pasando como parametro de la api, el valor del input.*/
//const baseUrl = 'https://api.nationalize.io?name=';
const button$$ = document.body.querySelector('button');
const input$$ = document.body.querySelector('input');
function listener(){
    fetch('https://api.nationalize.io?name='+input$$.value).then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);   
})
    
}



button$$.addEventListener('click',listener);

