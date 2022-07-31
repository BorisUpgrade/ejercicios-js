const baseUrl = 'http://localhost:3000'

fetch('http://localhost:3000/characters').then((res) => res.json()).then((characters)=>createGame(characters))
createGame = (characters) =>{
    

    for(let i=0; i<characters.length ; i++){
        const character = characters[i];
        const div$$ = document.querySelector('div');
        const newDiv$$ = document.createElement('div');
        div$$.appendChild(newDiv$$);
        newDiv$$.innerHTML = `<div><h4>${character.name}</h4><img src='${character.avatar}'</div>`
        newDiv$$.addEventListener('click', ()=>selectFighters(character));
    }
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