//Javascript most important data type is the object
//an object is a collection of name/ value pairs, or a string to value map.

var book = {                 //object are enclosed in curly braces.
    topic: 'Javascript',
    fat:true
};

//Access the properties of an object with . or[]:
book.topic
book['fat']
book.author = 'Flanagan';
book.contents = {};
//Explicacion del codigo
//declaramos una variable llamada book y asigandole un objeto. los objetos en javascript se definen utilizando llaves {}
//las propiedades se separan por coma
//añadiendo ortra propiedad al objeto book llamada fat y asignandole el valor true este valor es booleano
//book.topic accede al valor de la propiedad 
// otra forma de acceder a las propiedades es mediante corchetes y asignadole un valor a la propiedad del objeto


var primes = [2,3,5,7];
primes[0]
primes.length
primes[primes.length - 1]
primes[4] = 9;
primes[4] = 11;
var empty = [];
empty.length


//Arrays and objects con hold other arrays and objects:

var points = [
    {x:0, y:0},
    {x:1, y:1}
];
var data = {
    trial1: [[1,2],[3,4]],
    trial2: [[2,3],[4,5]]
};


//Javascript defines some shorthand arithmetic operators
var count = 0;
//ity and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
var x = 2, y = 3;

//Los operadores logicos combinan o invierten valores booleanos 
(x==2)&&(y==3);

function plus1(x){
    return x + 1;
}
var square = function(x){
    return x*x;
};
square(plus1(y));


var a =[];

points.dist = function(){
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x-p1.x;
    var b = p2.y-p1.y;
    return Math.sqrt(a*a + b*b);
};

points.dist();
