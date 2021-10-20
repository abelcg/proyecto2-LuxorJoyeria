// defino las funciones de validaciones

export function validarCampoRequerido(input) {
    // console.log(input);
    console.log(input.value);
  
    if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
      console.log("el dato es correcto");
      input.className = "form-control is-valid";
      return true;
    } else {
      console.log("dato erroneo");
      input.className = "form-control is-invalid";
      return false;
    }
  }

export function validarID(input) {
    // validar que tenga al menos 3 caracteres
  
    if (input.value.trim() != "" && input.value.trim().length >= 3) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }

  export function validarNumeros(input) {
    // validar con expresiones regulares
    let patron = /\d+(\.\d{1,3})?/;
    if (input.value.trim() >= 0 && patron.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }

  export function validarFecha(input) {
    console.log(input.value);
    let patron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (patron.test(input.value)) {
        input.className = "form-control is-valid";
      return true;
    } else {
        input.className = "form-control is-invalid";
      return false; 
    }

  }

  export function validarGeneral() {
 
    let alerta = document.querySelector('#msjAlerta');
    if (
      validarID(document.querySelector("#ID_producto")) &&
      validarCampoRequerido(document.querySelector("#nombre")) &&
      validarNumeros(document.querySelector("#precio")) &&
      validarNumeros(document.querySelector("#stock")) &&
      validarFecha(document.querySelector("#fecha_orden"))
    ) {
      console.log("validación correcta");
      alerta.className = 'alert alert-danger mt-4 d-none';
      return true;
    } else {
      console.log("validación incorrecta");
      alerta.className = 'alert alert-danger mt-4';
      return false;
    }
  }

 


  
  