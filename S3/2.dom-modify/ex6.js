/*Basandote en el siguiente array crea una lista ul > li con los textos del array.*/


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newUl$$ = document.createElement('ul');


for(let i = 0; i < apps.length; i++){
    const newLi$$ = document.createElement('li');
    document.body.appendChild(newUl$$);
    newUl$$.appendChild(newLi$$);
    newLi$$.textContent = apps[i];
}
