let juegos = [
    'Zelda',
    'Mario',
    'Elden Ring',
    'Naruto'
];

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({primero,ultimo});

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});

//ahora con el push es necesario saber que se agrega un nuevo elemento al arreglo 
let nuevaLongitud = juegos.push('F-zero ');
console.log({nuevaLongitud, juegos});

//ahora que pasaria si quiero agregar un elemento al arreglo al final 
nuevaLongitud = juegos.unshift('Mario Kart');
console.log({nuevaLongitud, juegos});

//ahora que pasaria cuando quiero borrar el que se encuentra al final
//este metodo es el metodo pop 
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//ahora que pasaria cuando quiero borrar algun elemento en especifico del arreglo
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos});

//ahora quiero saber la poscion indice del objeto
let eldenRing = juegos.indexOf('Elden Ring');
console.log({eldenRing});







