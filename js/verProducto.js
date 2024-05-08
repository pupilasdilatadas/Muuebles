document.addEventListener("DOMContentLoaded", function() {
    // Obtener el array de productos del localStorage
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Obtener el elemento donde se mostrarán los productos
    var tablaProductos = document.getElementById("tablaProductos");

    // Recorrer el array de productos y crear filas en la tabla para cada producto
    productos.forEach(function(producto) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.idp}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.garantia}</td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td>
            <button class="btn btn-primary btn-sm editar-btn" data-id="${producto.nombre}">Editar</button>
            </td>
        `;
        tablaProductos.appendChild(fila);
    });

    
});
