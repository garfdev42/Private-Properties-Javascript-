const carros = ['Ford','Mazda','Honda','Toyota'];


console.warn('While');
let i = 0;
// while(i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }


while(carros[i]){
    if( i===1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

//como es un ciclo do 

console.warn('Do while')
let j = 0;

do{
    console.log(carros[j]);
    j++;
}while(carros[j]);





