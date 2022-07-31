/*Basandote en el ejercicio anterior.
Crea un botón para cada uno de los elementos de las listas 
que elimine ese mismo elemento del html.*/

const countries = [
    {title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for(var country of countries){
    const newDiv$$ = document.createElement('div');
    document.body.appendChild(newDiv$$);
    newDiv$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`

}
const button$$ = document.querySelector('button');

button$$.addEventListener('click', function(){
    const div$$ = document.body.querySelectorAll('div'); 
    div$$[div$$.length - 1].remove();


});



