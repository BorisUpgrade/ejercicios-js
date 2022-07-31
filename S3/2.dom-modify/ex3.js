/*Inserta dinamicamente en un html un div
 que contenga 6 p utilizando un loop con javascript.*/
const newDiv$$ = document.createElement('div');



for(i = 0; i < 6; i++){
    const newP$$ = document.createElement('p');
    document.body.appendChild(newDiv$$);
    newDiv$$.appendChild(newP$$);
}