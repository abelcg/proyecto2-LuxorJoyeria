/*------------------ show password--------------------- */

let password = document.getElementById('su-password-confirm');
let siPassword = document.getElementById('si-password');
let suPassword = document.getElementById('su-password');
let showPassword = document.getElementById('show-password');
let passwordShow = document.getElementById('showPassword');
let passwordShow2 = document.getElementById('showPassword2');

showPassword.addEventListener('click', passwordReveal, false);
passwordShow.addEventListener('click', passwordReveal, false);
passwordShow2.addEventListener('click', passwordReveal, false);

function passwordReveal() {
    
    if (this.checked) {
            password.type = 'text';  
            siPassword.type = 'text'; 
            suPassword.type = 'text'; 
    } else {
            password.type = 'password'; 
            siPassword.type = 'password'; 
            suPassword.type = 'password';  
    }
};


window.addEventListener('load', function() {
    passwordReveal();
  }); 


/* ----------------------------------------------------- */

// declarar variables
/* let productos = [];

cargarInicial();

function cargarInicial() {
  productos = JSON.parse(localStorage.getItem("listaProductoKey")) || [];

  // Si hay datos dentro del arreeglo dibujo las columnas con las cards

  if (productos.length > 0) {
    // aqui dibujo las cards
    productos.forEach((producto) => {
      crearColumna(producto);
    });
  }
}

function crearColumna(producto) {
  let grilla = document.querySelector("#grilla");
  console.log(producto);
  grilla.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-5">
    <div class="card">
      <img src="${producto.url}" class="card-img-top" alt="${producto.nombreProducto}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombreProducto}</h5>
        <p class="card-text">${producto.descripcion}</p>
      </div>
    </div>
  </div>`;
} */
