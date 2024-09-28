//Definimos dos funciones para luego utilizarlas 

const regresaTrue= () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse= () => {
    console.log('Regresa false');
    return false;
}

//logica booleana es una forma para trabajar con operadores boolenaos 
console.warn('Not o la negacion');
console.log(true);
console.log(false);
console.log(!true); //false
console.log(!false); //true

console.log( !regresaFalse() );
console.log(!regresaTrue() );


console.warn('And');//true si todos los valores son verdaderos
console.log(true && true);
console.log(true && false);
console.log(true && !false);

console.log('==========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaFalse() && !regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('=== && === ');
regresaFalse() && regresaTrue();

console.log(true && true && true && false);

console.warn('OR');// al menos un verdadero para que sea verdadero
console.log(true || false);
console.log(false || false);

console.log('4 condiciones: ', true || true || true ||false);

console.warn('Asignaciones'); 
//crear logica boolena con asignaciones 

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3,a4, a5});



if(regresaFalse() && regresaTrue() && (true || false || true)){
    console.log('Hacer algo');
}else{
    console.log('hacer otra cosa')
}







