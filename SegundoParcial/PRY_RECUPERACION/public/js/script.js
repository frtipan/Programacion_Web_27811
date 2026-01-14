class Producto {
  constructor(id, nombre, precio, disponible) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
}

let productos = JSON.parse(localStorage.getItem("productos")) || [
  new Producto(1, "Laptop", 1200, true),
  new Producto(2, "Teléfono", 800, false),
  new Producto(3, "Auriculares", 150, true)
];

let productoEditando = null;

const tbody = document.getElementById("product-list");
const form = document.getElementById("product-form");
const btnSubmit = document.getElementById("submit-btn");
const status = document.getElementById("status");
const buscar_producto = document.getElementById("buscar_producto");

function guardarLocal() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function renderStatus() {
  const total = productos.length;
  const disponibles = productos.filter(p => p.disponible).length;

  status.innerHTML = `
    <div class="alert alert-info mb-0">
      Total: <strong>${total}</strong> |
      Disponibles: <strong>${disponibles}</strong>
      ${productoEditando ? "| Modo edición" : ""}
    </div>
  `;
}

function renderProductos(lista = productos) {
  tbody.innerHTML = "";

  lista.forEach(producto => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td class="${producto.disponible ? "text-success" : "text-danger"}">
        ${producto.disponible ? "Disponible" : "Agotado"}
      </td>
      <td>
        <button class="btn btn-warning btn-sm editar">Editar</button>
        <button class="btn btn-danger btn-sm borrar">Borrar</button>
      </td>
    `;

    tr.querySelector(".editar")
      .addEventListener("click", () => editarProducto(producto.id));
    tr.querySelector(".borrar")
      .addEventListener("click", () => borrarProducto(producto.id));
    tbody.appendChild(tr);
  });

  renderStatus();
  guardarLocal();
}

function editarProducto(id) {
  productoEditando = productos.find(p => p.id === id);
  form.nombre.value = productoEditando.nombre;
  form.precio.value = productoEditando.precio;
  form.disponible.value = productoEditando.disponible;
  btnSubmit.textContent = "Actualizar";
  btnSubmit.className = "btn btn-primary";
}

function borrarProducto(id) {
  productos = productos.filter(p => p.id !== id);

  if (productoEditando?.id === id) {
    resetFormulario();
  }

  renderProductos();
}

function resetFormulario() {
  form.reset();
  productoEditando = null;
  btnSubmit.textContent = "Agregar";
  btnSubmit.className = "btn btn-success";
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const precio = Number(form.precio.value);
  const disponible = form.disponible.value === "true";
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 letras");
    return;
  }
  if (precio <= 0 || isNaN(precio)) {
    alert("Precio inválido");
    return;
  }
  if (productoEditando) {
    productoEditando.nombre = nombre;
    productoEditando.precio = precio;
    productoEditando.disponible = disponible;
  } else {
    productos.push(
      new Producto(Date.now(), nombre, precio, disponible)
    );
  }

  resetFormulario();
  renderProductos();
});

search.addEventListener("input", e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );
  renderProductos(filtrados);
});

renderProductos();
