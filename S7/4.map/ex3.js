/*devuelve una lista que contenga los valores de la propiedad .name 
añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/


const cities = [
    {isVisited:true, name: 'Tokyo'},
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'},
    {isVisited:false, name: 'Seul'}];

var visited = cities.filter(function(city){
    if(city.isVisited){
    console.log(city);
    }
})