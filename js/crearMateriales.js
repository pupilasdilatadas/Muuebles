var materiales = JSON.parse(localStorage.getItem('materiales')) || [];

document.getElementById("agregarMaterialForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fechaIngreso = new Date().toISOString().split('T')[0];

    var nombre = document.getElementById("nombreMat").value;
    var costo = document.getElementById("costoMat").value;
    var cantidad = document.getElementById("cantidadMat").value;
    var proveedor = document.getElementById("proveedorMat").value;
    var descripcion = document.getElementById("descripcionMat").value;

    var materiales = JSON.parse(localStorage.getItem('materiales')) || [];
    var maxId = 0;
    materiales.forEach(function(material) {
        if (material.id > maxId) {
            maxId = material.id;
        }
    });

    var nuevoId = maxId + 1;

    var material = {
        id: nuevoId,
        nombre: nombre,
        costo: costo,
        cantidad: cantidad,
        proveedor: proveedor,
        descripcion: descripcion,
        fechaIngreso: fechaIngreso 
    };

    materiales.push(material);

    localStorage.setItem('materiales', JSON.stringify(materiales));

    alert("Material agregado correctamente con el ID: " + nuevoId);

    window.location.href = "../../html/inventario.html";
});
