let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.043,
        lng: -128.98
    },
    trajes:['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'Malibu California'
    },
    'ultima-pelicula': 'Infinity War'
};

//ahora si, como puedo acceder a las propiedades y arreglos que tenemos dentro del personaje

console.log(personaje);
console.log('Nombre: ',personaje.nombre);

//para acceder con otra notacion seria con corchetes 
console.log('Nombre: ',personaje['nombre']);
//lo mismo pero con edad
console.log('Edad: ', personaje.edad);
console.log('Edad: ',personaje['edad']);

//ahora si para ver las coordenadas seria:
console.log('Coors', personaje.coords);
console.log('Coors: ', personaje.coords.lat);

//ahora si necesito ver el numero de trajes que tiene iron man 
console.log('No.Trajes: ',personaje.trajes.length);
//ahora si cuando quiero saber la ultima posicion del arreglo lo que hago es esto 
console.log('Ultimo Traje: ',personaje.trajes[personaje.trajes.length - 1]);


const x = 'vivo';
console.log('Vivo: ',personaje[x]);
console.log('Ultima Pelicula: ',personaje['ultima-pelicula']);















































