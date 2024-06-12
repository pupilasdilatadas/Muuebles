document.getElementById("editarReparacionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var reparaciones = JSON.parse(localStorage.getItem('reparaciones')) || [];

    var editReparationId = document.getElementById("editReparationId").value;
    var editReparationClientName = document.getElementById("editReparationClientName").value;
    var editReparationRequestDate = document.getElementById("editReparationRequestDate").value;
    var editReparationStatus = document.getElementById("editReparationStatus").value;
    var editReparationEstimatedCost = document.getElementById("editReparationEstimatedCost").value;
    var editReparationEstimatedDeliveryDate = document.getElementById("editReparationEstimatedDeliveryDate").value;
    var editReparationNotes = document.getElementById("editReparationNotes").value;

    reparaciones.forEach(function(reparacion) {
        if (reparacion.id == editReparationId) {
            reparacion.nombreCliente = editReparationClientName;
            reparacion.fechaSolicitud = editReparationRequestDate;
            reparacion.estadoReparacion = editReparationStatus;
            reparacion.costoEstimado = editReparationEstimatedCost;
            reparacion.fechaEntregaEstimada = editReparationEstimatedDeliveryDate;
            reparacion.notas = editReparationNotes;
            return;
        }
    });

    localStorage.setItem('reparaciones', JSON.stringify(reparaciones));

    alert("Reparación editada correctamente");

    window.location.href = "../inventario/reparaciones.html";

});
