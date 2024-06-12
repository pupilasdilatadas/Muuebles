document.addEventListener("DOMContentLoaded", function() {
    var instalaciones = JSON.parse(localStorage.getItem('instalaciones')) || [];
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var selectMuebles = document.getElementById("muebleInstalar");
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var costoInput = document.getElementById("costo");

    selectMuebles.innerHTML = '';

    var optionVacia = document.createElement("option");
    optionVacia.value = '';
    optionVacia.textContent = 'Seleccione un mueble';
    selectMuebles.appendChild(optionVacia);

    productos.forEach(function(producto) {
        var option = document.createElement("option");
        option.value = producto.nombre;
        option.textContent = producto.nombre;
        selectMuebles.appendChild(option);
    });

    function actualizarCosto() {
        var seleccionado = selectMuebles.value;
        if (seleccionado === '') {
            costoInput.value = '';
        } else {
            var productoSeleccionado = productos.find(function(producto) {
                return producto.nombre === seleccionado;
            });
            if (productoSeleccionado) {
                var precioProducto = parseInt(productoSeleccionado.precio);
                var costoTotal = precioProducto + 20000;
                costoInput.value = costoTotal;
            }
        }
    }

    selectMuebles.addEventListener("change", actualizarCosto);

    document.getElementById("agregarInstalacionForm").addEventListener("submit", function(event) {
        event.preventDefault();

    
        if (selectMuebles.value === '') {
            alert('Por favor, seleccione un mueble.');
            return; 
        }

        var nombreCliente = document.getElementById("nombreCliente").value;
        var fechaIngreso = document.getElementById("fechaIngreso").value;
        var fechaVisita = document.getElementById("fechaVisita").value;
        var costo = document.getElementById("costo").value;
        var muebleDeseado = document.getElementById("muebleInstalar").value;
        var telefono = document.getElementById("telefono").value;
        var direccion = document.getElementById("direccion").value;
        var descripcion = document.getElementById("descripcion").value;

        var maxId = 0;
        instalaciones.forEach(function(instalacion) {
            if (instalacion.id > maxId) {
                maxId = instalacion.id;
            }
        });

        var nuevoId = maxId + 1;

        var instalacion = {
            id: nuevoId,
            nombreCliente: nombreCliente,
            fechaIngreso: fechaIngreso,
            fechaVisita: fechaVisita,
            costo: costo,
            muebleDeseado: muebleDeseado,
            telefono: telefono,
            direccion: direccion,
            descripcion: descripcion,
            tipo: "instalacion"
        };

        instalaciones.push(instalacion);

        localStorage.setItem('instalaciones', JSON.stringify(instalaciones));

        carrito.push(instalacion);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert("Instalación agregada correctamente con el ID: " + nuevoId);
    });
});
