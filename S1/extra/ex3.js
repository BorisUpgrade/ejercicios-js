/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. I
mprime cada array en por consola.*/


const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}];

let moviesShort = [];
let moviesMed = [];
let moviesLarg = [];

for(let index = 0; index < movies.length; index++){
    movie = movies[index];
    if(movie.durationInMinutes < 100){      
        moviesShort.push(movie);       
    }
    if(movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200){
        
        moviesMed.push(movie);
    }
    if(movie.durationInMinutes > 200){
        
        moviesLarg.push(movie);
    }
    
}
console.log(moviesLarg); 
console.log(moviesMed);
console.log(moviesShort);