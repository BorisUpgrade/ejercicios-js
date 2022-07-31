/*filtra los videojuegos por gender = 'RPG' usando .filter() 
usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el array .gender.*/


const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

const gamesFiltered =[];

videogames.filter(function(game){
    gamesFiltered.push(game);
});
console.log(gamesFiltered);



const sumScore = gamesFiltered.reduce((acumulador, game) => acumulador + game.score, 0);
const mediaScore = sumScore / videogames.length;

console.log(mediaScore);

const findRpg = videogames.find(videogame => !!videogame.genders.find(gender => gender.toLowerCase().includes('rpg')));

console.log(findRpg);