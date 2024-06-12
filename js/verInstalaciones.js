document.addEventListener("DOMContentLoaded", function() {
    var instalaciones = JSON.parse(localStorage.getItem('instalaciones')) || [];
    var tablaInstalaciones = document.getElementById("tablaInstalaciones");

    function crearFila(instalacion) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${instalacion.id}</td>
            <td>${instalacion.nombre}</td>
            <td>${instalacion.ubicacion}</td>
            <td>${instalacion.fechaInauguracion}</td>
            <td>${instalacion.descripcion}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${instalacion.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${instalacion.id}">Eliminar</button>
                </div>
            </td>
        `;
        tablaInstalaciones.appendChild(fila);
    }

    instalaciones.forEach(crearFila);

    function editarInstalacion(event) {
        var idInstalacion = event.target.getAttribute("data-id");
        var instalacion = instalaciones.find(i => i.id == idInstalacion);
        
        if (instalacion) {
            window.location.href = `editarInstalaciones.html?id=${idInstalacion}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarInstalacion);
    });

    function eliminarInstalacion(event) {
        var idInstalacion = event.target.getAttribute("data-id");
        var index = instalaciones.findIndex(i => i.id == idInstalacion);
        
        if (index !== -1) {
            instalaciones.splice(index, 1);
            localStorage.setItem('instalaciones', JSON.stringify(instalaciones));
            location.reload(); 
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarInstalacion);
    });
});
