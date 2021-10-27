//Defino la clase usuario


//Aclaración esta implementación es a fines prácticos, lo correcto es guardar passwords en base de datos
export class Usuario {
    constructor(nombre, email, password) {
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
  
    //getters y setters
    get getNombre() {
        return this.nombre;
    }
  
    set setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get getEmail() {
        return this.email;
    }
  
    set setEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }
  
    get getPassword() {
        return this.password;
    }
  
    set setPassword(password) {
        this.password = password;
    }
  };
  