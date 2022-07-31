/*Añade un botón a tu html con el id btnToClick 
en tu javascript añade el evento click que ejecute
un console log con la información del evento del click*/



document.body.innerHTML = `<button id='btnToClick' onclick='btnPress()'>clickame</button>`;

function btnPress(){
    console.log('me has clickado');
}