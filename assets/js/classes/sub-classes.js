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

class Heroe extends Persona {
  clan = "Sin clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);

    this.clan = "Los avengers";
  }
  quienSoy() {
    console.log(`Soy ${this.nombre},${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
