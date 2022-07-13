
const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for(let index = 0; index < users.length; index++){
    var element = users[index];
    if(element.years >= 18){
        console.log('Usuarios menores de edad ' +element.name+ ' ' +element.years+ ' años');
    }else {
    console.log('Usuarios mayores de edad ' +element.name+ ' ' +element.years+ ' años');
}

}