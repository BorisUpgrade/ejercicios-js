/*utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'.*/


const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
    var aidsPlayers = [];
    streamers.filter(function(streamer){
        if(streamer.gameMorePlayed=='League of Legends'){
            aidsPlayers.push(streamer);
        }
    });
console.log(aidsPlayers);
