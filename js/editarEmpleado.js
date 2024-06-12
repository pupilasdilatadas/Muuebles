document.addEventListener("DOMContentLoaded", function() {
    var parametros = new URLSearchParams(window.location.search);
    var idEmpleado = parametros.get('id');
    var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    var empleado = empleados.find(e => e.id == idEmpleado);

    if (empleado) {
        document.getElementById("editEmployeeId").value = empleado.id;
        document.getElementById("editEmployeeFirstName").value = empleado.nombre;
        document.getElementById("editEmployeeLastName").value = empleado.apellido;
        document.getElementById("editEmployeePosition").value = empleado.puesto;
        document.getElementById("editEmployeePhone").value = empleado.telefono;
        document.getElementById("editEmployeeEmail").value = empleado.correo;
        document.getElementById("editEmployeeRegistrationDate").value = empleado.fechaRegistro;

        document.getElementById("editarEmpleadoForm").addEventListener("submit", function(event) {
            event.preventDefault();

            empleado.nombre = document.getElementById("editEmployeeFirstName").value;
            empleado.apellido = document.getElementById("editEmployeeLastName").value;
            empleado.puesto = document.getElementById("editEmployeePosition").value;
            empleado.telefono = document.getElementById("editEmployeePhone").value;
            empleado.correo = document.getElementById("editEmployeeEmail").value;
            empleado.fechaRegistro = document.getElementById("editEmployeeRegistrationDate").value;

            localStorage.setItem('empleados', JSON.stringify(empleados));

            alert("Cambios guardados correctamente");
        });
    } else {
        alert("El empleado no existe");
    }
});
