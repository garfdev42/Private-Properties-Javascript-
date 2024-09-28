//Funcion de flecha que me va a determinar cual es el numero mayor
const elMayor = (a,b) => (a>b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '2 dolares': '10 dolares';

console.log(elMayor(20,15));
console.log(tieneMembresia (true));
console.log(tieneMembresia (false));


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loki',
    elMayor(10,15)//Woww amazinggg!!!
];

console.log(amigosArr); 


const nota = 85.6;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';


console.log({nota,grado});