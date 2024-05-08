var productos = JSON.parse(localStorage.getItem('productos')) || [];

document.getElementById("agregarProductoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    var idp = document.getElementById("idProd").value;
    var nombre = document.getElementById("nombreProd").value;
    var categoria = document.getElementById("categoriaProd").value;
    var garantia = document.getElementById("garantiaProd").value;
    var stock = document.getElementById("stockProd").value;
    var precio = document.getElementById("precioProd").value;
    var imagen = document.getElementById("imagenProd").files[0]; // Obtener el archivo de imagen

    // Crear un objeto para el producto
    var producto = {
        idp: idp,
        nombre: nombre,
        categoria: categoria,
        garantia: garantia,
        stock: stock,
        precio: precio,
        imagen: imagen.name // Guardar solo el nombre del archivo de imagen
    };

    productos.push(producto);

    // Guardar el producto en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    alert("Producto agregado correctamente");
});
