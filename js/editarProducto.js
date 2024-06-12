document.addEventListener("DOMContentLoaded", function() {
    var parametros = new URLSearchParams(window.location.search);
    var idProducto = parametros.get('id');
    var productos = JSON.parse(localStorage.getItem('productos')) || [];
    var producto = productos.find(p => p.idp == idProducto);

    if (producto) {
        document.getElementById("editProductId").value = producto.idp;
        document.getElementById("editProductName").value = producto.nombre;
        document.getElementById("editProductCategory").value = producto.categoria;
        document.getElementById("editProductWarranty").value = producto.garantia;
        document.getElementById("editProductStock").value = producto.stock;
        document.getElementById("editProductPrice").value = producto.precio;
        document.getElementById("editProductImage").value = producto.imagen;
        document.getElementById("editProductProvider").value = producto.proveedor; 
        document.getElementById("editProductBrand").value = producto.marca; 
        document.getElementById("editProductMaterial").value = producto.material; 
        document.getElementById("editProductSize").value = producto.medidas; 
        document.getElementById("editProductWeight").value = producto.peso; 
        document.getElementById("editProductDescription").value = producto.descripcion; 
        document.getElementById("editProductEntryDate").value = producto.fechaIngreso; 

        document.getElementById("editarProductoForm").addEventListener("submit", function(event) {
            event.preventDefault();

            producto.nombre = document.getElementById("editProductName").value;
            producto.categoria = document.getElementById("editProductCategory").value;
            producto.garantia = document.getElementById("editProductWarranty").value;
            producto.stock = document.getElementById("editProductStock").value;
            producto.precio = document.getElementById("editProductPrice").value;
            producto.imagen = document.getElementById("editProductImage").value;
            producto.proveedor = document.getElementById("editProductProvider").value; 
            producto.marca = document.getElementById("editProductBrand").value; 
            producto.material = document.getElementById("editProductMaterial").value; 
            producto.medidas = document.getElementById("editProductSize").value; 
            producto.peso = document.getElementById("editProductWeight").value; 
            producto.descripcion = document.getElementById("editProductDescription").value;
            producto.fechaIngreso = document.getElementById("editProductEntryDate").value;

            localStorage.setItem('productos', JSON.stringify(productos));

            alert("Cambios guardados correctamente");
        });
    } else {
        alert("El producto no existe");
    }
});
