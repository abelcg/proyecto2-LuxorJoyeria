import {
  validarGeneral,
  validarCampoRequerido,
  validarID,
  validarNumeros,
  validarFecha,
} from "./validaciones.js";

import { Producto } from "./producto.js";

 
// declaro variables
let productos = [];
let productoExistente = false; //variable bandera: false significa q tengo que agregar un producto nuevo, true -> tengo que modificar uno existente
let idProducto = document.querySelector("#ID_producto");
let nombreProducto = document.querySelector("#nombre");
let precioProducto = document.querySelector("#precio");
let stockDisponible = document.querySelector("#stock");
let ultimaOrden = document.querySelector("#fecha_orden");
let formularioProducto = document.querySelector("#formProducto");
let btnAgregar = document.querySelector("#btn-agregar");

//inicializo la dataTable
let dataTable = new simpleDatatables.DataTable("#myTable", {
  searchable: true,
  fixedHeight: true,
  sortable: true,
  labels: {
    placeholder: "Buscar...",
    perPage: "{select} entradas por página",
    noRows: "Ninguna entrada fue encontrada",
    info: "Mostrando del {start} al {end} de {rows} entradas",
  },
});

// agrego eventos

idProducto.addEventListener("blur", () => {
  validarID(idProducto);
});
nombreProducto.addEventListener("blur", () => {
  validarCampoRequerido(nombreProducto);
});
precioProducto.addEventListener("blur", () => {
  validarNumeros(precioProducto);
});
stockDisponible.addEventListener("blur", () => {
  validarNumeros(stockDisponible);
});
ultimaOrden.addEventListener("blur", () => {
  validarFecha(ultimaOrden);
});
formularioProducto.addEventListener("submit", guardarProducto);
btnAgregar.addEventListener("click", limpiarFormulario);
//llamo a la funcion que recupera los datos del localStorage
cargaInicial();

//agregar producto
function agregarProducto() {
  let nuevoProducto = new Producto(
    idProducto.value,
    nombreProducto.value,
    precioProducto.value,
    stockDisponible.value,
    ultimaOrden.value
  );

  console.log(nuevoProducto);
  // Para evitar ingreso de un productos con ID repetidos creo un array vacio. 
  let array = [];
  //Guardo el objeto producto en el array a comparar
  array.push(nuevoProducto);
  // Para cada dato del array comparo con cada item de la lista de productos 
  array.forEach((dato) => {
    //Si no encuentra algún elemento con el mismo id como propiedad
    if (!productos.find((item) => item.id === dato.id)) {
      //agrego el producto nuevo al array de productos
      productos.push(dato);
      //guardo en localstorage
      localStorage.setItem("productos", JSON.stringify(productos));
      // limpiar el formulario
      limpiarFormulario();
      //  Dibujar FILA EN LA TABLA
      crearFila(nuevoProducto);
      //mostar un mensaje al usuario
      Swal.fire(
        "Producto agregado",
        "El producto fue correctamente agregado",
        "success"
      );
    } else {
      // limpiar el formulario
      limpiarFormulario();
       //mostar un mensaje al usuario
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Ingreso un ID de producto repetido!",
        confirmButtonColor: "#4650dd",
      });
    }
  });

}

//funcion guardar los datos en la tabla o la actualizo
function guardarProducto(e) {
  e.preventDefault();

  // validar los datos del formulario
  if (validarGeneral()) {
    // tengo que modificar o tengo que guardar uno nuevo
    if (productoExistente) {
      //modificar
      actualizarProducto();
    } else {
      //agregar
      // crear un nuevo producto
      console.log("aqui debería crear un producto");
      agregarProducto();
    }
  } else {
    console.log("aqui solo mostrar el cartel de error");
  }
}

// recupero los datos del localStorage al cargar la página

function cargaInicial() {
  // si hay algo en el localStorage lo guardo en el arreglo sino dejo el arreglo vacio
  productos = JSON.parse(localStorage.getItem("productos")) || [];

  // llamar a la funcion que crea filas
  productos.forEach((item) => {
    crearFila(item);
  });
}

//creo la tabla

function crearFila(item) {
  /*  console.log(item); */
  let codigo = item.id;
  let nombre = item.nombre;
  let precio = item.precio;
  let stock = item.stock;
  let orden = item.orden;
  let botones = ` <td>
  <div class="btn-group" role="group" aria-label="botones de acciones">
   <a class="btn text-success fs-4" role="button" onclick="edicionProducto('${item.id}')">
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="20"
       height="20"
       fill="currentColor"
       class="bi bi-pencil-square"
       viewBox="0 0 16 16"
     >
       <path
         d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
       />
       <path
         fill-rule="evenodd"
         d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
       />
     </svg>
   </a>
   <a class="btn text-danger fs-4" role="button" onclick="eliminarProducto('${item.id}')">
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

  let newData = {
    headings: [
      "ID PRODUCTO",
      "NOMBRE",
      "PRECIO",
      "STOCK",
      "ÚLTIMA ORDEN",
      "ACCIONES",
    ],
    data: [["#" + codigo, nombre, "$" + precio, stock, orden, botones]],
  };

  // Insert the data
  dataTable.insert(newData);

}

function limpiarFormulario() {
  // limpia los value de los elementos del form
  formularioProducto.reset();
  // limpia las clases de cada elemento del form
  idProducto.className = "form-control";
  nombreProducto.className = "form-control";
  precioProducto.className = "form-control";
  stockDisponible.className = "form-control";
  ultimaOrden.className = "form-control";

  productoExistente = false;
}

//agrego un metodo al objeto window para que la funcion creada sea global y la reconozca el arvhivo tipo kmodulo
window.edicionProducto = (id) => {

  // buscar el objeto dentro del arreglo
  let productoEncontrado = productos.find((item) => {
    return item.id === id;
  });
  console.log(productoEncontrado);
  //mostrar los datos del objeto en el formulario
  document.querySelector("#ID_producto").value = productoEncontrado.id;
  document.querySelector("#nombre").value = productoEncontrado.nombre;
  document.querySelector("#precio").value = productoEncontrado.precio;
  document.querySelector("#stock").value = productoEncontrado.stock;
  document.querySelector("#fecha_orden").value = productoEncontrado.orden;

  // cambiar el valor de la variable bandera para editar
  productoExistente = true;
};

//funcion para actualizar producto luego de la edición
function actualizarProducto() {
  Swal.fire({
    title: "Esta seguro que desea editar el producto?",
    text: "No puede revertir posteriormente este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4650dd",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    //promesa. detiene el proceso asincronico
    if (result.isConfirmed) {
      //aqui es donde procedemos a editar
      // buscar la posicion del objeto con el codigo indicado
      let indiceProducto = productos.findIndex((item) => {
        return item.id == idProducto.value;
      });
      console.log(indiceProducto);
      console.log(productos[indiceProducto].nombre);

      // actualizar los valores del objeto encontrado dentro de mi arreglo
      productos[indiceProducto].nombre =
        document.querySelector("#nombre").value;
      productos[indiceProducto].precio =
        document.querySelector("#precio").value;
      productos[indiceProducto].stock = document.querySelector("#stock").value;
      productos[indiceProducto].orden =
        document.querySelector("#fecha_orden").value;

      console.log(productos[indiceProducto]);

      //actualizar el localstorage
      localStorage.setItem("productos", JSON.stringify(productos));
      // actualizar la tabla
      borrarFilas();
      productos.forEach((item) => {
        crearFila(item);
      });

      // limpiar el formulario
      limpiarFormulario();

      // mostrar un mensaje que el producto fue editado
      Swal.fire(
        "Producto editado!",
        "Su producto fue correctamente editado",
        "success"
      );
    }
  });
}

function borrarFilas() {
  /* let tabla = document.querySelector("#tablaProductos");
    tabla.innerHTML = "";
 */
  let Data = {
    headings: [
      "ID PRODUCTO",
      "NOMBRE",
      "PRECIO",
      "STOCK",
      "ÚLTIMA ORDEN",
      "ACCIONES",
    ],
    data: [[]],
  };
  // Insert the data
  dataTable.insert(Data);
  dataTable.refresh();
  cargaInicial();
  location.reload();
}

window.eliminarProducto = (id) => {
  /*  console.log(id); */
  Swal.fire({
    title: "¿Eta seguro de borrar el producto?",
    text: "No se puede revertir este proceso posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4650dd",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Borrar!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // aqui el codigo si quiero borrar
      // opc1 usar splice(indice, 1), para obtener el indice puedo usar findIndex
      //opc2 usar filter
      let _productos = productos.filter((item) => {
        return item.id != id;
      });
      /* console.log(_productos); */
      // actualizar el arreglo y el localStorage
      productos = _productos;
      localStorage.setItem("productos", JSON.stringify(productos));
      //Borramos la tabla
      borrarFilas();
      //vuelvo a dibujar la tabla
      productos.forEach((item) => {
        crearFila(item);
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
