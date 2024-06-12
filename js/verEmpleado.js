document.addEventListener("DOMContentLoaded", function() {
    var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    var tablaEmpleados = document.getElementById("tablaEmpleados");

    function crearFila(empleado) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${empleado.id}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.puesto}</td>
            <td>${empleado.telefono}</td>
            <td>${empleado.email}</td>
            <td>${empleado.fechaRegistro}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${empleado.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${empleado.id}">Eliminar</button>
                </div>
            </td>
        `;
        tablaEmpleados.appendChild(fila);
    }

    empleados.forEach(crearFila);

    function editarEmpleado(event) {
        var idEmpleado = event.target.getAttribute("data-id");
        var empleado = empleados.find(e => e.id == idEmpleado);
        
        if (empleado) {
            window.location.href = `editarEmpleado.html?id=${idEmpleado}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarEmpleado);
    });

    function eliminarEmpleado(event) {
        var idEmpleado = event.target.getAttribute("data-id");
        var index = empleados.findIndex(e => e.id == idEmpleado);
        
        if (index !== -1) {
            empleados.splice(index, 1);
            localStorage.setItem('empleados', JSON.stringify(empleados));
            location.reload(); 
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarEmpleado);
    });
});
