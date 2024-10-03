class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " Instancias";
  }
  static mensaje() {
    console.log(this.nombre);
    console.log("Hola a todos, soy un método stático");
  }

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

    Persona._conteo++;
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

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;
console.log("Conteo Stático:", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);
