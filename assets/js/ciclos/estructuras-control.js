//recopilacion de informacion sobre ciclos y estructuras de control en javascript qqque abarca los temas estudiados
//valor por referencia que son objetos o arrays ambas variables apuntan al mismo objeto o array en la memoria 
//if else y logica booleana es lo qque veremos adelante
//if 

let stopLigth = 'yellow';


if (stopLigth === 'red'){
    console.log('Stop');
}else if(stopLigth === 'yellow'){
    console.log('Slow down');
}else if (stopLigth === 'green'){
    console.log('Go!');
}else {
    console.log('Caution, unknow!');
}
//podemos hacer la estructura if mas pequeña, conocida como 
//Operador ternario

let price = 30;
let message = price > 10? 'Es mayor que 10' : 'Es menor que 10';
console.log({price, message});



//estructura switch
let edad = 2;

switch(edad){
    case 1:
        console.log('Tiene un año');
        break;
    case 2:
        console.log('Tienes dos años');
        break;
    default:
        console.log('Tienes mas de dos años de edad');
        break;
}

m = [1,2,3,4];

for(n in m){
    console.log(n);
}

//segunda forma y la mas conocida

for( let i = 0; i < 3; i++ ){
    console.log('andy');
}

//bucle while
//repite un código mientras se cumpla una condicion

let count = 1;

while(count < 5){
    console.log(count);
    count++;
}

//bucle do while
//este bucle realiza la condicion despues de cada iteracion
console.warn('do while');
let count2 = 1;
do{
    console.log(count2);
    count2++;
}while(count2 <5);

//resumiendo un if else con OR 

// let defaultName;
// if(username){
//     defaultName = username;
// }else{
//     defaultName = "Stranger";
// }

console.warn('IF-ELSE');
let i = 10;
if(i > 5){
    console.log(`El valor de i es mayor a 5`);
}
else{
    console.log(`El valor de i es menor a 5`); 
}

let j = 2;
if(j % 2 == 0){
    console.log(`${j} es número par`);
}

//diseñaremos un script qu nos permita saber si un añó es bisiesto 
//un año bisiesto deber ser divisible por 4 y no debe ser divisible por 100, ezcepto que tambien sea divisible por 400

// let year = prompt("Escribe un año");
// if(year % 4 == 0){
//     if((year%100 != 0) || (year%400 == 0)){
//         console.log("Bisiesto");
//     }else{
//         console.log("No bisiesto");
//     }
// }else{
//     console.log("No es bisiesto");
// }
//OPERADOR CONDICIONAL

let z = (15 % 3 == 0)? 'Si es multiplo': 'No es multiplo';












