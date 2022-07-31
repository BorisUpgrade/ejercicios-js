/*Crea dinamicamente en el html una lista de div 
que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */


const countries = [
    {title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}];



for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const newDiv$$ = document.createElement('div');
    document.body.appendChild(newDiv$$);
    newDiv$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`  
}




