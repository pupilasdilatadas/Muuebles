document.addEventListener("DOMContentLoaded", function() {
    var materiales = JSON.parse(localStorage.getItem('materiales')) || [];
    var tablaMateriales = document.getElementById("tablaMateriales");

    function crearFila(material) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${material.id}</td>
            <td>${material.nombre}</td>
            <td>${material.costo}</td>
            <td>${material.cantidad}</td>
            <td>${material.proveedor}</td>
            <td>${material.descripcion}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary btn-sm editar-btn me-1" data-id="${material.id}">Editar</button>
                    <button class="btn btn-danger btn-sm eliminar-btn" data-id="${material.id}">Eliminar</button>
                </div>
            </td>
        `;
        tablaMateriales.appendChild(fila);
    }

    materiales.forEach(crearFila);

    function editarMaterial(event) {
        var idMaterial = event.target.getAttribute("data-id");
        var material = materiales.find(m => m.id == idMaterial);
        
        if (material) {
            window.location.href = `editarMateriales.html?id=${idMaterial}`;
        }
    }

    document.querySelectorAll('.editar-btn').forEach(btn => {
        btn.addEventListener('click', editarMaterial);
    });

    function eliminarMaterial(event) {
        var idMaterial = event.target.getAttribute("data-id");
        var index = materiales.findIndex(m => m.id == idMaterial);
        
        if (index !== -1) {
            materiales.splice(index, 1);
            localStorage.setItem('materiales', JSON.stringify(materiales));
            location.reload(); 
        }
    }

    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.addEventListener('click', eliminarMaterial);
    });
});
