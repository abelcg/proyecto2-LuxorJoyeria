//Defino la clase producto

export class Producto {
  constructor(ID, nombre, precio, stock, orden) {
    this.id = ID;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.orden = orden;
  }

  //getters y setters

  get getId() {
    return this.id;
  }

  set setId(nuevoID) {
    this.id = nuevoID;
  }

  get getNombre() {
      return this.nombre;
  }

  set setNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
  }

  get getStock() {
      return this.stock;
  }

  set setStock(stock) {
      this.stock = stock;
  }

  get getOrden() {
      return this.orden;
  }
  set setOrden(orden) {
      this.orden = orden;
  }
};
