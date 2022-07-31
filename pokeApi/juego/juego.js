const cuadrado$$ = document.querySelectorAll('.cuadrado');
const digglet$$ = document.querySelectorAll('.digglet');
const timeleft$$ = document.querySelector('#time-left');
const score$$ = document.querySelector('#score');
const button$$ = document.querySelector('button');

let results = 0;
let currentTime = timeleft$$.textContent;
button$$.addEventListener('click',() =>startGame());

const startGame = () =>{
function randomCuad(){
    cuadrado$$.forEach(className => {
        className.classList.remove('digglet');
    });
    let randomPosition = cuadrado$$[Math.floor(Math.random()*9)]
    randomPosition.classList.add('digglet');

    hitPosition = randomPosition.id;
}

cuadrado$$.forEach( id => {
    id.addEventListener('mouseup', ()=>{
        if(id.id === hitPosition){
            results++;
            console.log(results)
            score$$.textContent = `${results}`;
        }
    });
});

const moveDigglet= () => {
    let timerId = null;
    timerId = setInterval(randomCuad, 500);

}

moveDigglet();

function countDown(){
    currentTime--;
    timeleft$$.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('Game Over! your final score is: '+ results);
    }
}
let timerId = setInterval(countDown,1000);

}