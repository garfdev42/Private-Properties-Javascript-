//Aqui documentare lo que tenga que ver con el libro en ingles que esta buenisiso 
//se define una funcion llamada factorial que toma un argumento n este argumento representa el numero del cual se quiere calcular el factorial
//se inicia un bucle for con una variable i que empieza en 2 y continua
//incrementandose hasta que i sea mayor que n este bucle se utiliza
//para multiplicar todos los numeros desde 2 hasta n 

function factorial(n){
    var p = 1;
    for(var i = 2; i <= n; i++)
        p *= i;
    return p;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));


