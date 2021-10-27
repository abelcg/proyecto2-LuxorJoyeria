// defino las funciones de validaciones

export function validarCampoRequerido(input) {
  console.log(input.value);

  if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
    input.className = "form-control is-valid";
    return true;
  } else {
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

export function validarURL(input) {
  // validar URL con una expresión regular

  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (input.value.trim() != "" && patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarEmail(input) {
  // validar URL con una expresión regular

  let patron =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (input.value.trim() != "" && patron.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarGeneral() {
  console.log("desde validar general");
  let alerta = document.querySelector("#msjAlerta");
  if (
    validarID(document.querySelector("#ID_producto")) &&
    validarURL(document.querySelector("#URL")) &&
    validarCampoRequerido(document.querySelector("#nombre")) &&
    validarCampoRequerido(document.querySelector("#descripcion")) &&
    validarNumeros(document.querySelector("#precio")) &&
    validarNumeros(document.querySelector("#stock")) &&
    validarFecha(document.querySelector("#fecha_orden"))
  ) {
    console.log("validación correcta");
    alerta.className = "alert alert-danger mt-4 d-none";
    return true;
  } else {
    console.log("validación incorrecta");
    alerta.className = "alert alert-danger mt-4";
    return false;
  }
}
