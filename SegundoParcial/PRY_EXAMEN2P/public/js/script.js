var productos = [
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 200, categoria: "Accesorios" },
    { nombre: "PC", precio: 250, categoria: "Electronica" },
    { nombre: "PC", precio: 250, categoria: "Electronica" }
];

let total = 0;

function mostrarProductos() {
    var tabla = document.getElementById("tabla_productos");
    tabla.innerHTML = "";
    productos.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.categoria}</td>
            </tr>


            
        `;
    });
}

function calcularTotal() {
    let total = 0;
    productos.forEach(producto => {
        total += producto.precio;
    });
    document.getElementById("total").textContent = total;
}
