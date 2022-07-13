/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruebalo con un console.log.*/


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(var i = 0; i < alumns.length; i++){
    const element = alumns[i];
    let aprovedTrim = 0;
    aprovedTrim = alumns.T1 ? aprovedTrim + 1 : aprovedTrim;
    aprovedTrim = alumns.T2 ? aprovedTrim + 1 : aprovedTrim;
    aprovedTrim = alumns.T3 ? aprovedTrim + 1 : aprovedTrim;

    element.isAproved = (aprovedTrim >= 2) ? true : false;

}




/*
for(var i = 0; i < alumns.length; i++){
    const alumn = alumns[i];
    let aprovedTrim = 0;

    if(alumns.T1  == true){
        aprovedTrim++;
    }
    if(alumns.T2 == true){
        aprovedTrim++;
    }
    if(alumns.T3 == true){
        aprovedTrim++;
    }
    alumn.isAproved = (aprovedTrim >= 2) ? true : false;
    
}*/
console.log(alumns);
