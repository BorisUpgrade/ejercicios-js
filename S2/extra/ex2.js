/*Dado el siguiente javascript usa forof 
forin para hacer la media del volumen de todos los sonidos favoritos que tienen
los usuarios.*/


const users = [
    {name: 'Manolo el del bombo',
    favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let totalVolume = 0;
let contUsers = 0;

for(var persona of users){   
    for(var key in persona.favoritesSounds){
        contUsers++;
        totalVolume += persona.favoritesSounds[key].volume;
        console.log(totalVolume);
        
    }    
    }
    console.log("Los usuarios de la biblioteca son "+contUsers+ " y la media de volumen es: " +totalVolume / contUsers);
    
