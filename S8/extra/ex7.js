const baseUrl = 'http://localhost:3000'
const insertar$$ = document.querySelector('form');
fetch('http://localhost:3000/characters').then((res) => res.json()).then((characters)=>createGame(characters))
createGame = (characters) =>{
    

    for(let i=0; i<characters.length ; i++){
        const character = characters[i];
        const div$$ = document.querySelector('div');
        const newDiv$$ = document.createElement('div');
        const pj$$ = document.querySelector('.pj');
        const button$$ = document.createElement('button');


        div$$.appendChild(newDiv$$);
        newDiv$$.innerHTML = `<div><h4>${character.name}</h4><img class='pj' src='${character.avatar}'</div>`
        newDiv$$.appendChild(button$$);
        button$$.textContent = 'Borrar Personaje';
        button$$.addEventListener('click', (e) => {deleteCharacter(character)})
        //pj$$.addEventListener('click', ()=>selectFighters(character));
    }
}

insertar$$.addEventListener('submit', getData);

function getData(event){
    event.preventDefault();
    const data = Object.fromEntries(new FormData(insertar$$).entries());
    data.critic = Number(data.critic);
    data.defense = Number(data.defense);
    data.vitality = Number(data.critic);
    data.damage = data.damage.split(',');

    fetch('http://localhost:3000/characters/' , {
    method: 'POST',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => console.log(res));
}

function deleteCharacter(character){
    console.log(character)
    fetch('http://localhost:3000/characters/'+ character.id, {
        method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => console.log(res))
}

let char1 ;
let char2 ;

const selectFighters = (character) =>{
    if(char1){
        const button$$ = document.createElement('button')
        char2 = character;
        document.body.appendChild(button$$);
        button$$.textContent = 'A LUCHAR!';
        button$$.addEventListener('click', pelea);
    }else {
        char1 = character;
        
    }
}
//substring 
const pelea = () => {
    console.log('1 '+char1.damage);
    console.log('2 ' +char2.damage);
    for(let i1= 0; i1<char1.damage; i1++){
        const damage1 = char1.damage[i];
        const tiradas = damage1[i].substring(0,1);
        console.log(tiradas);


    }

}