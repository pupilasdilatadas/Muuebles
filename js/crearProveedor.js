var proveedores = JSON.parse(localStorage.getItem('proveedores')) || [];

document.getElementById("agregarProveedorForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fechaRegistro = new Date().toISOString().split('T')[0]; 

    var nombre = document.getElementById("nombreProv").value;
    var telefono = document.getElementById("telefonoProv").value;
    var email = document.getElementById("emailProv").value;
    var direccion = document.getElementById("direccionProv").value;
    var ciudad = document.getElementById("ciudadProv").value;
    var pais = document.getElementById("paisProv").value;

    var maxId = 0;
    proveedores.forEach(function(proveedor) {
        if (proveedor.id > maxId) {
            maxId = proveedor.id;
        }
    });

    var nuevoId = maxId + 1;

    var proveedor = {
        id: nuevoId,
        nombre: nombre,
        telefono: telefono,
        email: email,
        direccion: direccion,
        ciudad: ciudad,
        pais: pais,
        fechaRegistro: fechaRegistro
    };

    proveedores.push(proveedor);

    localStorage.setItem('proveedores', JSON.stringify(proveedores));

    alert("Proveedor agregado correctamente con el ID: " + nuevoId);

    window.location.href = "../../html/inventario.html";

});
