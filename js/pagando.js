document.addEventListener('DOMContentLoaded', function() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var instalaciones = JSON.parse(localStorage.getItem('instalaciones')) || [];
    var container = document.querySelector('.carrito-container');
    var totalElement = document.querySelector('.total-pagando');
    var envioElement = document.getElementById('metodoEnvio');
    var envioCostoElement = document.getElementById('costoEnvio');
    var subtotalElement = document.getElementById('subtotal');

    var envioCostos = {
        estandar: 4990,
        rapido: 7990
    };

    var envioSeleccionado = 'estandar';

    function mostrarProductosCarrito() {
        container.innerHTML = ''; 
        var subtotal = 0; 

        var itemsAgrupados = {};

        if (carrito.length === 0) {
            container.innerHTML = '<p>No tienes productos en tu carrito.</p>';
            subtotalElement.textContent = 'Subtotal: $0.00';
            totalElement.textContent = 'Total: $0.00';
            return; 
        }

        carrito.forEach(function(item) {
            var id = item.idp || item.id; 
            var tipo = item.tipo;

            if (!itemsAgrupados[id]) {
                itemsAgrupados[id] = {
                    item: tipo === 'producto' ? productos.find(p => p.idp === id) : instalaciones.find(i => i.id === id),
                    cantidad: 1,
                    tipo: tipo
                };
            } else {
                itemsAgrupados[id].cantidad++;
            }
        });

        Object.values(itemsAgrupados).forEach(function(item) {
            var elemento = item.item;
            var cantidad = item.cantidad;
            var tipo = item.tipo;
            var precio = elemento.precio || elemento.costo;
            var precioTotal = precio * cantidad;
            subtotal += precioTotal; 

            var itemElement = document.createElement('div');
            itemElement.className = 'carrito-item';
            var titulo = tipo === 'instalacion' ? `Instalación de ${elemento.muebleDeseado}` : elemento.nombre;
            itemElement.innerHTML = `
                <div>
                    <h5>${titulo}</h5>
                    <span class="cantidad">Cantidad: ${cantidad}</span>
                </div>
            `;

            container.appendChild(itemElement);
        });

        var envioCosto = envioCostos[envioSeleccionado];
        subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        envioElement.textContent = `Envío: ${envioSeleccionado === 'estandar' ? 'Estándar (3 a 4 días hábiles)' : 'Rápido (entrega en 24 horas)'}`;
        envioCostoElement.textContent = `$${envioCosto.toFixed(2)}`;
        totalElement.textContent = `Total: $${(subtotal + envioCosto).toFixed(2)}`;
    }

    function actualizarEnvio() {
        var envioRadios = document.querySelectorAll('input[name="envio"]');
        envioRadios.forEach(function(radio) {
            if (radio.checked) {
                envioSeleccionado = radio.id;
            }
        });
        mostrarProductosCarrito();
    }

    var envioRadios = document.querySelectorAll('input[name="envio"]');
    envioRadios.forEach(function(radio) {
        radio.addEventListener('change', actualizarEnvio);
    });

    document.getElementById('estandar').checked = true;
    actualizarEnvio();

    mostrarProductosCarrito();
});
