function saludar(nombre){
    console.log(arguments);
    console.log('Hola '+ nombre)
}

const saludar2 = function(nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola '+nombre);
}

saludar('Santiago');
saludar2('Santiago');
saludarFlecha();
saludarFlecha2('Flecha 2');


function sumar(a,b){
    return a + b;
}

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();


const sumar2 = (a,b) => a + b;