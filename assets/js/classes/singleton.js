class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    const a = undefined;
    console.log(a);
    console.log(!a);
    console.log(!!a);

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}
const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Hulk");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia1.nombre}`);
