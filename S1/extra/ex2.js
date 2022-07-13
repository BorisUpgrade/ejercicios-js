/*Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas.
Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for(let index = 0; index < foodSchedule.length; index++){
    if(!foodSchedule[index].isVegan){
        foodSchedule[index].name = fruits.shift();
        foodSchedule[index].isVegan = true;
        
        }
    
}
console.log(foodSchedule);