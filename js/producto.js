//Defino la clase producto

export class Producto {
  constructor(ID, url, nombre, descripcion, precio, stock, orden) {
    this.id = ID;
    this.url = url;
    this.nombre = nombre;
    this.descripcion = descripcion;
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
  get getURL() {
    return this.url;
  }

  set setURL(nuevoURL) {
    this.url = nuevoURL;
  }

  get getNombre() {
      return this.nombre;
  }

  set setNombre(nuevoNombre) {
      this.nombre = nuevoNombre;
  }
  get getDescripcion() {
      return this.descripcion;
  }

  set setDescripcion(nuevoDescripcion) {
      this.descripcion = nuevoDescripcion;
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
