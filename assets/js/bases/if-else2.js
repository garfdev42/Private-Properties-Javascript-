let a = 10;

if (a >= 10){
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();

let dia = hoy.getDay();
console.log({ dia });

if (dia === 1){
    console.log('Lunes');
}else if(dia === 2){
    console.log('Martes')
    // if (dia === 2){
    //     console.log('Martes');
    // }else{
    //     console.log('No es martes ni lunes');
    // }
}else if(dia === 3){
    console.log('Miercoles');
}else{
    console.log('No es lunes, martes ni miercoles...');
}

// si usar if else, o switch, unicamente objetos 
dia = 9;
// dia de la semana

//como solucionarlo con objetos
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

const diasLetras2 = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diasLetras2[dia] || 'Dia no definido...' );










