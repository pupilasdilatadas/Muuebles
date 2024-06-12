document.addEventListener("DOMContentLoaded", function() {
    var proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
    var tablaProveedores = document.getElementById("tablaProveedores");

    function crearFila(proveedor) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${proveedor.id}</td>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.ciudad}</td>
            <td>${proveedor.pais}</td>
            <td>${proveedor.fechaRegistro}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${proveedor.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${proveedor.id}">Eliminar</button>
                </div>
            </td>
        `;
        tablaProveedores.appendChild(fila);
    }

    proveedores.forEach(crearFila);

    function editarProveedor(event) {
        var idProveedor = event.target.getAttribute("data-id");
        var proveedor = proveedores.find(p => p.id == idProveedor);
        
        if (proveedor) {
            // Redirigir a la página de edición de proveedor con los datos del proveedor
            window.location.href = `editarProveedores.html?id=${idProveedor}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarProveedor);
    });

    function eliminarProveedor(event) {
        var idProveedor = event.target.getAttribute("data-id");
        var index = proveedores.findIndex(p => p.id == idProveedor);
        
        if (index !== -1) {
            proveedores.splice(index, 1);
            localStorage.setItem('proveedores', JSON.stringify(proveedores));
            location.reload(); // Recargar la página para reflejar los cambios
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarProveedor);
    });
});
