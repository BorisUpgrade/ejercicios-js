/*Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch()
y recibir los datos que devuelve. Imprimelo mediante un console.log().
Para ello, es necesario que crees un .html y un .js.*/




fetch('https://api.agify.io?name=michael').then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);   
})