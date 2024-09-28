class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `la comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

    function quienSoy() {
      console.log("Hola Mundo");
    }
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spider",
  "Soy tu amigable amigo spiderman"
);
const ironman = new Persona("Tony Stark", "Iron Man", "Yo soy IronMan");
// console.log(ironman);

spiderman.miFrase();

spiderman.setComidaFavorita = "El pie de cereza de la tia May";
// spiderman.comida = "Duende Verde";

console.log(spiderman.getComidaFavorita);
console.log(spiderman);
