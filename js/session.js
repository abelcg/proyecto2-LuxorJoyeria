import { validarCampoRequerido, validarEmail } from "./validaciones.js";
import { Usuario } from "./usuario.js";

let loginEmail = document.getElementById("si-email");
let loginpassword = document.getElementById("si-password");
let username = document.getElementById("su-name");
let userEmail = document.getElementById("su-email");
let userPassword = document.getElementById("su-password");
let userPasswordConfirm = document.getElementById("su-password-confirm");
let registerError = document.getElementById("register-error");
let loginError = document.getElementById("login-error");
let loginForm = document.getElementById("signin-tab");
let registerForm = document.getElementById("signup-tab");
let loginBtn = document.getElementById("login-btn");
let logoutBtn = document.getElementById("logout-btn");
let adminBtn = document.getElementById("admin-btn");
let favoritesBtn = document.getElementById("favorites-btn");
let listTitle = document.getElementById("list-title");
let usuarios = [];

loginEmail.addEventListener("blur", () => {
  validarEmail(loginEmail);
});
loginpassword.addEventListener("blur", () => {
  validarCampoRequerido(loginpassword);
});
username.addEventListener("blur", () => {
  validarCampoRequerido(username);
});
userEmail.addEventListener("blur", () => {
  validarEmail(userEmail);
});
userPassword.addEventListener("blur", () => {
  validarCampoRequerido(userPassword);
});
userPasswordConfirm.addEventListener("blur", () => {
  validarCampoRequerido(userPasswordConfirm);
});

loginForm.addEventListener("submit", login);
registerForm.addEventListener("submit", registerUser);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    loadSession();
  },
  false
);

//llamo a la funcion que recupera los datos del localStorage
cargaInicialUsuario();

function registerUser(event) {
  event.preventDefault();
  registerError.innerHTML = "";

  let nuevoUsuario = new Usuario(
    username.value,
    userEmail.value,
    userPassword.value
  );

  console.log(nuevoUsuario);
  // compruebo si la contraseñas ingresadas coinciden
  if (userPassword.value === userPasswordConfirm.value) {
    // Para evitar ingreso de un usuarios con email repetidos creo un array vacio.
    let array = [];
    //Guardo el objeto usuario en el array a comparar
    array.push(nuevoUsuario);
    // Para cada dato del array comparo con cada item de la lista de usuarios
    array.forEach((dato) => {
      //Si no encuentra algún elemento con el mismo email como propiedad
      if (!usuarios.find((item) => item.email === dato.email)) {
        //agrego el producto nuevo al array de usuarios
        usuarios.push(dato);
        //guardo en localstorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        // limpiar el formulario
        limpiarFormulario();
        //  Dibujar FILA EN LA TABLA
        //crearFila(nuevoUsuario);
        //mostar un mensaje al usuario
        Swal.fire({
          icon: "success",
          title: "Nuevo usuario registrado!",
          text: "Por favor presione el botón de login para iniciar sesión",
          confirmButtonColor: "#4650dd",
        });
      } else {
        // limpiar el formulario
        limpiarFormulario();
        //mostar un mensaje al usuario
        Swal.fire({
          icon: "error",
          title: "Ups, ingreso un email ya registrado!",
          footer: '<a href="">¿Olvido su contraseña?</a>',
          confirmButtonColor: "#4650dd",
        });
      }
    });
  } else {
    registerError.innerHTML = "Las contraseñas deben de coincidir.";
  }
}

function limpiarFormulario() {
  // limpia los value de los elementos del form
  registerForm.reset();
  // limpia las clases de cada elemento del form
  username.className = "form-control";
  userEmail.className = "form-control";
  userPassword.className = "form-control";
  userPasswordConfirm.className = "form-control";

}

function cargaInicialUsuario() {
  // si hay algo en el localStorage lo guardo en el arreglo sino dejo el arreglo vacio
  usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
}

function login(e) {
  e.preventDefault();
  loginError.innerHTML = "";
  console.log(loginEmail.value);

  let usuarioEncontrado = usuarios.find((item) => {
    return item.email === loginEmail.value;
  });

  /*
      Aclaración:
      Los usuarios y contraseñas no deben implementarse de esta forma,
      sino que deben alojarse en una base de datos dentro de un servidor.
      Este uso es pura y exclusivamente para fines educativos.
    */
  if (usuarioEncontrado === undefined) {
    if (
      loginEmail.value === "admin@luxor.com" &&
      loginpassword.value === "admin123"
    ) {
      Swal.fire({
        icon: "success",
        title: "Usted inicio sesión!",
      });
      localStorage.setItem("AdminLogged", loginEmail.value);
      location.replace("/pages/admin.html");
    } else {
      loginError.innerHTML = "Usuario o contraseña incorrecta.";
    }
  } else if (loginpassword.value === usuarioEncontrado.password) {
    Swal.fire({
      icon: "success",
      title: "Usted inicio sesión!",
    });
    localStorage.setItem("UserLogged", loginEmail.value);
    location.replace("/index.html");
  } else {
    loginError.innerHTML = "Usuario o contraseña incorrecta.";
  }
}

function isAdminLogged() {
  return localStorage.getItem("AdminLogged") !== null;
}
function isLogged() {
  return localStorage.getItem("UserLogged") !== null;
}

function loadSession() {
  if (isAdminLogged()) {
    loginBtn.innerHTML = "";
    logoutBtn.innerHTML = '<i class="bx bx-log-out"></i>';
    favoritesBtn.innerHTML = '<i class="bx bx-heart"></i>';
    adminBtn.innerHTML = "Admin";
    listTitle.innerHTML = "Bienvenido a Luxor Joyas";
  } else if (isLogged()) {
    loginBtn.innerHTML = "";
    logoutBtn.innerHTML = '<i class="bx bx-log-out"></i>';
    favoritesBtn.innerHTML = '<i class="bx bx-heart"></i>';
    adminBtn.innerHTML = "";
    listTitle.innerHTML = "Bienvenido a Luxor Joyas";
  } else {
    adminBtn.innerHTML = "";
    loginBtn.innerHTML = '<i class="bx bx-log-in"></i>';
    logoutBtn.innerHTML = "";
    favoritesBtn.innerHTML = "";
  }
}

window.logout = () => {
  localStorage.removeItem("AdminLogged");
  localStorage.removeItem("UserLogged");
  location.replace("/index.html");
  location.reload();
};
