import { validarCampoRequerido, validarEmail } from "./validaciones.js";
import { Usuario } from "./usuario.js";
//import {crearFilaUsuario} from "./admin.js";

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

//llamo a la funcion que recupera los datos del localStorage
cargaInicialUser();

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

// recupero los datos de usuarios del localStorage al cargar la pagina
function cargaInicialUser() {
  // si hay algo en el localStorage lo guardo en el arreglo sino dejo el arreglo vacio
  usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // llamar a la funcion que crea filas
  usuarios.forEach((user) => {
    crearFilaUser(user);
   }); 
}

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
       // crearFilaUser(nuevoUsuario);
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

function crearFilaUser(user) {
  console.log(user);
 let tabla = document.getElementById('tablaUsuarios');
// console.log(tabla);
 if(tabla != null){
  tabla.innerHTML = `<tr>
 <th scope="row">${ user.nombre}</th>
 <td>${ user.email}</th>
 <td><span class="badge text-success bg-success-light">Active</span></td>
 <td>${Math.floor((Math.random() * (10-1))+1)}</th>
 <td>
 <div class="btn-group" role="group" aria-label="botones de acciones">
  <a class="btn text-danger fs-4" role="button" onclick="eliminarUsuario('${user.email}')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      class="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
      />
      <path
        fill-rule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  </a>
  </div>
</td>`;
 }
} 

window.eliminarUsuario = (email) => {
  
  Swal.fire({
    title: "¿Esta seguro de borrar el usuario?",
    text: "No se puede revertir este proceso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4650dd",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Borrar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
     
      let _usuarios = usuarios.filter((user) => {
        return user.email != email;
      });
     
      usuarios = _usuarios;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      //Borramos la tabla
      borrarFilasUsuario();
      //vuelvo a dibujar la tabla
      usuarios.forEach((user) => {
        crearFilaUser(user);
      });
      //muestro el mensaje
      Swal.fire(
        "Producto eliminado!",
        "El producto fue eliminado correctamente",
        "success"
      );
    }
  });
};
function borrarFilasUsuario() {
   let tabla = document.querySelector("#tablaProductos");
   if(tabla != null){
    tabla.innerHTML = "";
   }
};

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
