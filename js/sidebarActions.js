/* let btnProductos = document.getElementById('btnProductos');
let btnDashboard = document.getElementById('btnDashboard');


function productSection(){
    console.log('desde productSection')
    // busco el elemento padre
    let pageContainer = document.getElementById('page-container');
     // compruebo si tiene algún elemento hijo y lo borro
     console.log(pageContainer.hasChildNodes()); // sirve para saber si tengo nodos
     console.log(pageContainer.children.length); // sirve para saber cuantos nodos hijos posee
    console.log(pageContainer.children); 
   if (pageContainer.hasChildNodes() && pageContainer.children.length) {
 
         // eliminar efectivamente le sections
        for (let i = 0; i < pageContainer.children.length; i++) {
            pageContainer.removeChild(pageContainer.children[pageContainer.children.length - 1]);
         }   
     } 
    // creo elemneto hijo
     let sectionProducts = ` <section class="mb-4">
    <h2 class="section-heading section-heading-ms fs-4 mb-4 mb-lg-5">
      Productos 🛍️
    </h2>
    <div class="row g-1">
      <div class="card mb-4 mb-lg-0 col-lg-4">
        <div class="py-4 card-header">
          <h4 class="card-heading">Cargar productos</h4>
        </div>
        <div class="card-body">
          <form class="my-0 py-3" id="formProducto">
            <div class="mb-3">
              <label for="codigo" class="form-label"
                >ID Producto</label
              >
              <input
                type="text"
                class="form-control"
                id="ID_producto"
                aria-describedby="ID_producto"
                placeholder="ID único"
                required
                maxlength="6"
              />
              <div class="invalid-feedback">
                Este campo es obligatorio
              </div>
              <div class="valid-feedback">Este campo es correcto</div>
            </div>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                aria-describedby="nombre"
                placeholder="Mouse Logitec"
                required
                maxlength="20"
              />
              <div class="invalid-feedback">
                Este campo es obligatorio
              </div>
            </div>
            <div class="mb-3">
              <label for="Precio" class="form-label">Precio</label>
              <input
                type="text"
                class="form-control"
                id="precio"
                aria-describedby="precio"
                placeholder="Precio del producto"
                required
                maxlength="10"
              />
            </div>
            <div class="mb-3">
              <label for="Stock" class="form-label"
                >Stock Disponible</label
              >
              <input
                type="number"
                class="form-control"
                id="stock"
                placeholder="ej: 5"
                aria-describedby="stock"
                required
                max="1000"
                min="1"
              />
              <div class="invalid-feedback">
                Este campo es obligatorio
              </div>
            </div>
            <div class="mb-3">
              <label for="fecha_orden" class="form-label"
                >Última Orden</label
              >
              <input
                type="date"
                class="form-control"
                id="fecha_orden"
                aria-describedby="fecha_orden"
                placeholder="AAAA/MM/DD"
                required
              />
            </div>
            <div
              class="alert alert-danger mt-4 d-none"
              role="alert"
              id="msjAlerta"
            >
              Debe completar todos los datos
            </div>
            <div class="text-end mt-4">
              <button type="submit" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer"></div>
      </div>
      <div class="card-table card mb-lg-0 col-lg-7 offset-lg-1 mb-4">
        <div class="py-4 card-header">
          <h2 class="card-heading">Productos</h2>
        </div>
        <div class="card-body">
          <div class="text-end">
            <button class="btn btn-primary my-4" id="btn-agregar">
              Agregar
            </button>
          </div>
          <div class="table-responsive d-flex flex-wrap">
            <table
              id="myTable"
              class="
                text-center
                mb-0
                table
                table-borderless
                table-hover
                table-light
                table-striped
                w-100
              "
            >
              <thead class="table-dark text-light">
                <tr>
                  <th>ID PRODUCTO</th>
                  <th>NOMBRE</th>
                  <th>PRECIO</th>
                  <th>STOCK</th>
                  <th>ÚLTIMA ORDEN</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody id="tablaProductos"></tbody>
              <tfoot>
                <tr>
                  <th>ID PRODUCTO</th>
                  <th>NOMBRE</th>
                  <th>PRECIO</th>
                  <th>STOCK</th>
                  <th>ÚLTIMA ORDEN</th>
                  <th>ACCIONES</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
  </section>`;
   
  pageContainer.innerHTML += sectionProducts;  

}


btnProductos.addEventListener('click',productSection); */
