function getProductById(id) {
    var productos = JSON.parse(localStorage.getItem('productos')) || [];

    var productoEncontrado = productos.find(function(producto) {
        return producto.idp == id; 
    });

    return productoEncontrado;
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    function cargarDetallesDelProducto(id) {
        const producto = getProductById(id);

        const productDetailsContainer = document.getElementById('productDetails');

        if (producto) {
            let imageUrl = producto.imagen || 'path/to/default/image.jpg'; 

            productDetailsContainer.innerHTML = `
                <div class="col-md-6">
                    <img src="${imageUrl}" alt="${producto.nombre}" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <h1>${producto.nombre}</h1>
                    <p><strong>Categoría:</strong> ${producto.categoria}</p>
                    <p><strong>Garantía:</strong> ${producto.garantia}</p>
                    <p><strong>Stock:</strong> ${producto.stock}</p>
                    <p><strong>Precio:</strong> ${producto.precio}</p>
                    <!-- Agrega más información del producto según sea necesario -->
                </div>
            `;
        } else {
            productDetailsContainer.innerHTML = `
                <div class="col-12">
                    <h1>Producto no encontrado</h1>
                    <p>El producto con ID ${id} no existe o no está disponible.</p>
                </div>
            `;
        }
    }

    cargarDetallesDelProducto(productId);
});
