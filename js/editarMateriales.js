document.addEventListener("DOMContentLoaded", function() {
    var parametros = new URLSearchParams(window.location.search);
    var idMaterial = parametros.get('id');
    var materiales = JSON.parse(localStorage.getItem('materiales')) || [];
    var material = materiales.find(m => m.id == idMaterial);

    if (material) {
        document.getElementById("editMaterialId").value = material.id;
        document.getElementById("editMaterialNombre").value = material.nombre;
        document.getElementById("editMaterialCosto").value = material.costo;
        document.getElementById("editMaterialCantidad").value = material.cantidad;
        document.getElementById("editMaterialProveedor").value = material.proveedor;
        document.getElementById("editMaterialDescripcion").value = material.descripcion;

        document.getElementById("editarMaterialForm").addEventListener("submit", function(event) {
            event.preventDefault();

            material.nombre = document.getElementById("editMaterialNombre").value;
            material.costo = document.getElementById("editMaterialCosto").value;
            material.cantidad = document.getElementById("editMaterialCantidad").value;
            material.proveedor = document.getElementById("editMaterialProveedor").value;
            material.descripcion = document.getElementById("editMaterialDescripcion").value;

            localStorage.setItem('materiales', JSON.stringify(materiales));

            alert("Cambios guardados correctamente");
        });
    } else {
        alert("El material no existe");
    }
});
