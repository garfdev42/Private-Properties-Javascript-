//pasar informacion por valor y por referencia 
// const a = [1,2,3,4];
// const b = a;

// a.push(5);

// console.log(a);
// console.log(b);


// const foo = (str) => {
//     str = 'otra cosa';
//     return str;
// }

// const aString = 'a';
// console.log(foo(aString));
// console.log(aString);

// const foo2 = (arr) => {
//     const results = [];

//     while (arr.length ) {
//         results.push(doSomethingWithArrayItem(arr.shift()));
//     }
//     return results;
// };


// const arr = [1, 2, 3, 4];
// foo2(arr);
// console.log(arr);



let a = 30;
let b = a;
a =10;

console.log({a,b});

let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';
//en javascript todos los objetos son pasados por referencia
console.log({juan,ana});

//aqi en la linea 49 lo que quiere decir es que 
//declaramos una constante llamada cambia nombre y le asignamos una funcion 
//es una funcion de flecha que toma un parametro llamado persona.
const cambiaNombre = ({...persona}) => { 
    //Dentro de la funcion estamos cambiando la propiedad nombre del objeto persona a tony 
    persona.nombre = 'Tony';
    //devuelve el objeto persona modificado
    return persona;
}


//declaramos una variable con let llamada peter 
//asignamos un objeto con una propiedad nombre cuyo valor es peter 
let peter = {nombre: 'Peter'};
//en este caso llamamos a la funcion cambia nombre y pasamos el objeto peter 
//y devuelve el opbjeto modificado 
let tony = cambiaNombre(peter);

console.log({peter,tony});


//Arreglos con el operador spreed 

const frutas = ['Manzana','Pera','Piña'];


console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');


console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas}); 

