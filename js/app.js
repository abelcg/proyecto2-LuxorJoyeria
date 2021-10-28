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
let productos = [];

cargarInicial();

function cargarInicial() {
  productos = JSON.parse(localStorage.getItem("productos")) || [];

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
  grilla.innerHTML += ` <div class="card shadow">
  <div class="imgBx">
      <img src="${producto.url}"
          alt="${producto.nombre}">
      <ul class="action">
          <li>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <span>Añadir a lista de deseos</span>
          </li>
          <li>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>Añadir al carrito</span>
          </li>
          <li>
              <i class="fa fa-eye" aria-hidden="true"></i>
              <span>Ver detalles</span>
          </li>
      </ul>
  </div>
  <div class="content mt-auto">
      <div class="productName">
          <h3>${producto.nombre}</h3>
      </div>
      <div class="price_rating">
          <h2>$${producto.precio}</h2>
          <div class="star mt-3 align-items-center">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa grey fa-star"></i>
          </div>
      </div>
  </div>
</div>`;
};

