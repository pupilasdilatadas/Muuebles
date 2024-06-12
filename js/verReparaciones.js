document.addEventListener("DOMContentLoaded", function() {
    var reparaciones = JSON.parse(localStorage.getItem('reparaciones')) || [];
    var tablaReparaciones = document.getElementById("tablaReparaciones");

    function crearFila(reparacion) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${reparacion.id}</td>
            <td>${reparacion.nombreCliente}</td>
            <td>${reparacion.fechaSolicitud}</td>
            <td>${reparacion.estadoReparacion}</td>
            <td>${reparacion.costoEstimado}</td>
            <td>${reparacion.fechaEntregaEstimada}</td>
            <td>${reparacion.notas}</td>
            <td>${reparacion.fechaRegistro}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${reparacion.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${reparacion.id}">Eliminar</button>
                </div>
            </td>
        `;
        tablaReparaciones.appendChild(fila);
    }

    reparaciones.forEach(crearFila);

    function editarReparacion(event) {
        var idReparacion = event.target.getAttribute("data-id");
        var reparacion = reparaciones.find(r => r.id == idReparacion);
        
        if (reparacion) {
            // Redirigir a la página de edición de reparación con los datos de la reparación
            window.location.href = `editarReparaciones.html?id=${idReparacion}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarReparacion);
    });

    function eliminarReparacion(event) {
        var idReparacion = event.target.getAttribute("data-id");
        var index = reparaciones.findIndex(r => r.id == idReparacion);
        
        if (index !== -1) {
            reparaciones.splice(index, 1);
            localStorage.setItem('reparaciones', JSON.stringify(reparaciones));
            location.reload(); // Recargar la página para reflejar los cambios
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarReparacion);
    });
});
