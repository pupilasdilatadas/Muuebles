document.addEventListener("DOMContentLoaded", function() {
    var parametros = new URLSearchParams(window.location.search);
    var idProveedor = parametros.get('id');
    var proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];
    var proveedor = proveedores.find(p => p.id == idProveedor);

    if (proveedor) {
        document.getElementById("editProviderId").value = proveedor.id;
        document.getElementById("editProviderName").value = proveedor.nombre;
        document.getElementById("editProviderContact").value = proveedor.contacto;
        document.getElementById("editProviderPhone").value = proveedor.telefono;
        document.getElementById("editProviderEmail").value = proveedor.correo;
        document.getElementById("editProviderAddress").value = proveedor.direccion;
        document.getElementById("editProviderRegistrationDate").value = proveedor.fechaRegistro;

        document.getElementById("editarProveedorForm").addEventListener("submit", function(event) {
            event.preventDefault();

            proveedor.nombre = document.getElementById("editProviderName").value;
            proveedor.contacto = document.getElementById("editProviderContact").value;
            proveedor.telefono = document.getElementById("editProviderPhone").value;
            proveedor.correo = document.getElementById("editProviderEmail").value;
            proveedor.direccion = document.getElementById("editProviderAddress").value;
            proveedor.fechaRegistro = document.getElementById("editProviderRegistrationDate").value;

            localStorage.setItem('proveedores', JSON.stringify(proveedores));

            alert("Cambios guardados correctamente");
        });
    } else {
        alert("El proveedor no existe");
    }
});
