var reparaciones = JSON.parse(localStorage.getItem('reparaciones')) || [];

document.getElementById("agregarReparacionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fechaRegistro = new Date().toISOString().split('T')[0]; 

    var nombreCliente = document.getElementById("nombreCliente").value;
    var fechaSolicitud = document.getElementById("fechaSolicitud").value;
    var estadoReparacion = document.getElementById("estadoReparacion").value;
    var costoEstimado = document.getElementById("costoEstimado").value;
    var fechaEntregaEstimada = document.getElementById("fechaEntregaEstimada").value;
    var notas = document.getElementById("notas").value;

    var maxId = 0;
    reparaciones.forEach(function(reparacion) {
        if (reparacion.id > maxId) {
            maxId = reparacion.id;
        }
    });

    var nuevoId = maxId + 1;

    var reparacion = {
        id: nuevoId,
        nombreCliente: nombreCliente,
        fechaSolicitud: fechaSolicitud,
        estadoReparacion: estadoReparacion,
        costoEstimado: costoEstimado,
        fechaEntregaEstimada: fechaEntregaEstimada,
        notas: notas,
        fechaRegistro: fechaRegistro 
    };

    reparaciones.push(reparacion);

    localStorage.setItem('reparaciones', JSON.stringify(reparaciones));

    alert("Reparación agregada correctamente con el ID: " + nuevoId);

    window.location.href = "../../html/inventario.html";

});
