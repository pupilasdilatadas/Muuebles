document.addEventListener("DOMContentLoaded", function() {
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var tablaProductos = document.getElementById("tablaProductos");

    function crearFila(producto) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.idp}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.garantia}</td>
            <td>${producto.stock}</td>
            <td>${producto.precio}</td>
            <td>${producto.proveedor}</td>
            <td>${producto.marca}</td>
            <td>${producto.material}</td>
            <td>${producto.medidas}</td>
            <td>${producto.peso}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.fechaIngreso}</td>
            <td><img src="${producto.imagen}" alt="Foto de ${producto.nombre}" width="50"></td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${producto.idp}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${producto.idp}">X</button>
                </div>
            </td>
        `;
        tablaProductos.appendChild(fila);
    }

    productos.forEach(crearFila);

    function editarProducto(event) {
        var idProducto = event.target.getAttribute("data-id");
        var producto = productos.find(p => p.idp == idProducto);
        
        if (producto) {
            window.location.href = `editarProductos.html?id=${idProducto}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarProducto);
    });

    function eliminarProducto(event) {
        var idProducto = event.target.getAttribute("data-id");
        var index = productos.findIndex(p => p.idp == idProducto);
        
        if (index !== -1) {
            productos.splice(index, 1);
            localStorage.setItem('productos', JSON.stringify(productos));
            location.reload(); 
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarProducto);
    });
});
