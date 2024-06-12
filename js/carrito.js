document.addEventListener('DOMContentLoaded', function() {
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var container = document.getElementById('carritoProductosContainer');
    var subtotalElement = document.getElementById('subtotal');
    var btnComprar = document.querySelector('.btn-comprar');
    var envioGratis = document.querySelector('.envio-gratis');

    function mostrarProductosCarrito() {
        container.innerHTML = ''; 
        var subtotal = 0; 
    
        var productosAgrupados = {};
    
        if (carrito.length === 0) {
            container.innerHTML = '<h1 style="margin: 30px 0; padding: 50px;">No tienes productos en tu carrito.</h1>';
            subtotalElement.textContent = '$0';
            return; 
        }
    
        carrito.forEach(function(item) {
            var id = item.idp || item.id; 
            var tipo = item.tipo;
    
            if (!productosAgrupados[id]) {
                productosAgrupados[id] = {
                    producto: tipo === 'producto' ? productos.find(p => p.idp === id) : item,
                    cantidad: 1,
                    tipo: tipo
                };
            } else {
                productosAgrupados[id].cantidad++;
            }
        });
    
        Object.values(productosAgrupados).forEach(function(item) {
            var producto = item.producto;
            var cantidad = item.cantidad;
            var tipo = item.tipo;
            var precio = producto.precio || producto.costo;
            var precioTotal = precio * cantidad;
            subtotal += precioTotal; 
    
            var itemElement = document.createElement('div');
            itemElement.className = 'carrito-item';
            var titulo = tipo === 'instalacion' ? `Instalación de ${producto.muebleDeseado}` : producto.nombre;
            itemElement.innerHTML = `
                <div>
                    <h4 class="fw-bold">${titulo}</h4>
                    <p>Precio: $${precio}</p>
                    <button class="btn btn-sm btn-dark agregar-producto" data-id="${producto.idp || producto.id}" data-tipo="${tipo}">+</button>
                    <span class="cantidad">${cantidad}</span>
                    <button class="btn btn-sm btn-dark quitar-producto" data-id="${producto.idp || producto.id}" data-tipo="${tipo}">-</button>
                    <button class="btn btn-sm btn-danger eliminar-carrito" data-id="${producto.idp || producto.id}" data-tipo="${tipo}">&times; Eliminar</button>
                </div>
            `;
    
            var envioGratisElement = document.getElementById('envioGratis');
            if (subtotal > 100000) {
                envioGratisElement.style.display = 'block';
            } else {
                envioGratisElement.style.display = 'none';
            }
    
            container.appendChild(itemElement);
    
            itemElement.querySelector('.eliminar-carrito').addEventListener('click', function() {
                eliminarDelCarrito(producto.idp || producto.id, tipo);
            });
    
            itemElement.querySelector('.agregar-producto').addEventListener('click', function() {
                agregarProducto(producto.idp || producto.id, tipo);
            });
    
            itemElement.querySelector('.quitar-producto').addEventListener('click', function() {
                quitarProducto(producto.idp || producto.id, tipo);
            });
        });
    
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    

    function eliminarDelCarrito(id, tipo) {
        carrito = carrito.filter(item => !(item.tipo === tipo && (item.idp || item.id) === id));
        actualizarCarrito();
        mostrarProductosCarrito();
    }

    function agregarProducto(id, tipo) {
        if (tipo === 'producto') {
            var producto = productos.find(p => p.idp === id);
            if (producto) {
                carrito.push({...producto, tipo: 'producto'});
                actualizarCarrito();
                mostrarProductosCarrito();
            } else {
                console.error('Producto no encontrado');
            }
        } else if (tipo === 'instalacion') {
            var instalacion = carrito.find(i => i.id === id && i.tipo === 'instalacion');
            if (instalacion) {
                carrito.push(instalacion);
                actualizarCarrito();
                mostrarProductosCarrito();
            } else {
                console.error('Instalación no encontrada');
            }
        }
    }

    function quitarProducto(id, tipo) {
        var index = carrito.findIndex(item => item.tipo === tipo && (item.idp || item.id) === id);
        if (index !== -1) {
            carrito.splice(index, 1);
            actualizarCarrito();
            mostrarProductosCarrito();
        }
    }

    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    btnComprar.addEventListener('click', function() {
        var usuarioActual = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioActual) {
            window.location.href = 'pagando.html';
        } else {
            window.location.href = 'pagando.html?invitado=true';
        }
    });

    mostrarProductosCarrito();
});
