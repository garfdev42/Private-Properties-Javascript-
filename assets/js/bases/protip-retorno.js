
const crearPersona = (nombre,apellido) => ({nombre,apellido});

const persona = crearPersona('Santiago','Cepeda');
console.log(persona);

function imprimeArgumentos(){
    console.log(persona);
}

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad,args});
    return args;
}

const [casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false);
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Santiago','Cepeda');
console.log({nuevoApellido});