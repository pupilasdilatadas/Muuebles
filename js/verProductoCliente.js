document.addEventListener('DOMContentLoaded', function() {
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    var container = document.getElementById('productosContainer');
    var carritoButton = document.getElementById('carritoButton');
    var carritoCount = document.getElementById('carritoCount');
    var alertContainer = document.getElementById('alertContainer');

    function actualizarCarritoCount() {
        carritoCount.textContent = carrito.length;
    }

    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarritoCount();
    }

    function mostrarProductos() {
        container.innerHTML = '';
    
        productos.forEach(function(producto) {
            var card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top producto-imagen" alt="${producto.nombre}">
                    <div class="card-body">
                        <h4 class="card-title text-center producto-link" data-id="${producto.idp}">${producto.nombre}</h4>
                        <p class="card-text"><strong>Categoría:</strong> ${producto.categoria}</p>
                        <p class="card-text"><strong>Garantía:</strong> ${producto.garantia}</p>
                        <p class="card-text"><strong>Stock:</strong> ${producto.stock}</p>
                        <p class="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                        <button class="comprar-button agregar-carrito">Agregar al Carrito</button>
                    </div>
                </div>
            `;        
            container.appendChild(card);
    
            card.querySelector('.agregar-carrito').addEventListener('click', function() {
                agregarAlCarrito(producto);
            });
    
            card.querySelector('.producto-link','.producto-imagen').addEventListener('click', function(event) {
                event.preventDefault(); 
                var productId = event.target.dataset.id; 
                window.location.href = `paginaProducto.html?id=${productId}`; 
            });
            card.querySelector('.producto-imagen').addEventListener('click', function() {
                window.location.href = `paginaProducto.html?id=${producto.idp}`;
            });
        });
    }
    
    
  


    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarCarrito();
        mostrarAlerta('Producto agregado al carrito', 'success');
    }

    function mostrarAlerta(mensaje, tipo) {
        var alert = document.createElement('div');
        alert.className = `alert alert-${tipo} alert-dismissible fade show`;
        alert.role = 'alert';
        alert.innerHTML = `
            ${mensaje}
            <button type="button" class="btn-close close" aria-label="Close">
            </button>
        `;
        alertContainer.appendChild(alert);

        alert.querySelector('.close').addEventListener('click', function() {
            alertContainer.removeChild(alert);
        });

        setTimeout(function() {
            alertContainer.removeChild(alert);
        }, 3000);
    }

    mostrarProductos();

    actualizarCarritoCount();
});
