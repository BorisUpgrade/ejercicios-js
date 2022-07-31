/*En base a la api Open Trivia 
(https://opentdb.com/api_config.php), 
vamos a desarrollar un trivial con la siguiente url 
'https://opentdb.com/api.php?amount=10'. 
Esta api nos devolverá una serie de preguntas con sus respuestas, 
tanto erroneas como correctas. 

La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas
del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda
comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

Ten en cuenta que hay dos tipos de preguntas. 
Aquellas con 3 respuestas erroneas y 1 correcta 
y aquellas con respuesta verdadero / falso.*/


const input$$ = document.querySelector('[data-function="questions-number"]');
const buttonStart$$ = document.querySelector('[data-function="start-game"]');
const buttonCheck$$ = document.querySelector('[data-function="check-game"]');
const gameboard$$ = document.querySelector('[data-function="gameboard"]');
const answer$$ = document.querySelectorAll('p');

const baseUrl = `https://opentdb.com/api.php?type=multiple&amount=`;
buttonStart$$.addEventListener('click', () => cuantasPreguntas(input$$.value))

const cuantasPreguntas = (num) =>{
fetch(baseUrl+num).then((res) => res.json()).then((questionary) => createGame(questionary.results));
}
const createGame = (results) =>{
    gameboard$$.innerHTML = ``;

    console.log(results);
    for(let i = 0; i<results.length; i++){
        let result = results[i];
        const locAnswer$$ = document.querySelector('.answer');
        const h4$$ = document.createElement('h4');
        const p$$ = document.createElement('p');
        gameboard$$.appendChild(h4$$);
        h4$$.textContent = result.question;
        gameboard$$.appendChild(p$$);
        p$$.textContent = `${result.correct_answer}`;
        for(var incorrect of result.incorrect_answers){
            const p$$ = document.createElement('p');
            gameboard$$.appendChild(p$$);
            p$$.innerHTML = `${incorrect}`;
            p$$.className = 'answer';
            p$$.addEventListener("click", selectAnswer);
            
        }
    p$$.className = 'answer';
    p$$.addEventListener('click', () => selectAnswer(p$$.value));

    }
}

let contCorrectas = 0;
let contIncorrectas = 0;
const selectAnswer = (respuesta) => {

    console.log('correcta '+contCorrectas+ ' incorrecta '+contIncorrectas)
    console.log(respuesta);
    if(respuesta === undefined){
    /*const p$$ = document.querySelectorAll('p');
    $('marked').removeClass('marked').addClass('answer');*/
    contCorrectas++;
    console.log('correctas'+contCorrectas);
    }else{
    contIncorrectas++;
    console.log('incorrectas'+contIncorrectas);
    /*const ans$$ = document.querySelector('.answer');
    ans$$.className = 'marked';*/
    }
    //answer.classList.remove("marked")
}

buttonCheck$$.addEventListener('click', () => corregir(contCorrectas,contIncorrectas));

const corregir = () =>{
    console.log('h')
    const newP$$ = document.createElement('p');
    gameboard$$.appendChild(newP$$);
    newP$$.textContent = innerHTML = `Has acertado"${contCorrectas}" preguntas y has fallado "${contIncorrectas} " preguntas."`

}

/*const createGame = () =>{
    resetGame();
    fetch(baseUrl + input$$.value).then(res => res.json()).then(res => {
        createQuestions(res.results);
    })
}

const resetGame = () =>{
    gameboard$$.innerHTML = ``;
}

const createQuestions = (questions) =>{
    for(let i = 0; i < questions.length; i++){
    const pregunta = questions[i];
    
    const h4$$ = document.createElement('h4');
    gameboard$$.appendChild(h4$$);
    h4$$.textContent = pregunta.question;
    //console.log(pregunta.incorrect_answers)
    //console.log(pregunta.correct_answer)
    createAnswers(pregunta.correct_answer, pregunta.incorrect_answers);
    }
}

const createAnswers = (resCorrecta, resIncorrectas) => {
    const p$$ = document.createElement('p');
    gameboard$$.appendChild(p$$);
    p$$.className = `answer`;
    p$$.innerHTML=`${resCorrecta}`
    for (let i = 0; i<resIncorrectas.length; i++){
        const incorrecta = resIncorrectas[i];
        const p$$ = document.createElement('p');
        //console.log(incorrecta);
        gameboard$$.appendChild(p$$);
        
        p$$.innerHTML=`${incorrecta}`;
        p$$.className = `answer`;
    }
    const answer$$ = document.querySelector('.answer');
    answer$$.addEventListener('click', aaaa);
}
const aaaa = () =>{
    console.log('aaa')
}*/



/*var questionary = [];
function createQuestionary(inputPreguntas){
    questionary.splice(0, questionary.length);
        fetch(baseUrl+'api.php?amount='+inputPreguntas)
        .then((res) => res.json())
        .then((questionaries)=>{
            gameboard$$.innerHTML=``;
            for(const quest of questionaries.results){
            questionary.push(quest);
            }
            gameboard$$.innerHTML='<h4>'+questionary.question+'</h4>'
        console.log(questionary);        
        })   
}*/


