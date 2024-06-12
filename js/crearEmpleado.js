var empleados = JSON.parse(localStorage.getItem('empleados')) || [];

document.getElementById("agregarEmpleadoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fechaRegistro = new Date().toISOString().split('T')[0]; 

    var nombre = document.getElementById("nombreEmp").value;
    var apellido = document.getElementById("apellidoEmp").value;
    var puesto = document.getElementById("puestoEmp").value;
    var telefono = document.getElementById("telefonoEmp").value;
    var email = document.getElementById("emailEmp").value;

    var maxId = 0;
    empleados.forEach(function(empleado) {
        if (empleado.id > maxId) {
            maxId = empleado.id;
        }
    });

    var nuevoId = maxId + 1;

    var empleado = {
        id: nuevoId,
        nombre: nombre,
        apellido: apellido,
        puesto: puesto,
        telefono: telefono,
        email: email,
        fechaRegistro: fechaRegistro 
    };

    empleados.push(empleado);

    localStorage.setItem('empleados', JSON.stringify(empleados));

    window.location.href = "../../html/inventario.html";

    alert("Empleado agregado correctamente con el ID: " + nuevoId);
});
