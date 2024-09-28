let a = 5;

if(a >= 10){
    console.log('A es mayor o iggual a 10');
}else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');


const hoy = new Date();

// console.log(hoy);

let dia = hoy.getDay();
console.log({dia});

if(dia === 0){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
    // console.log('No es domingo');
}else if (dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes martes ni domingo');
}


//sin usar if else, o swithc, unicamente objetos obtener
//el dia de la semana 

dia = 6;

const diasLetras = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado' 
}

const diasLetras2 = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'];


//Dia de la semana
console.log(diasLetras2[dia]);




