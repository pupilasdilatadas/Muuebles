var productos = JSON.parse(localStorage.getItem('productos')) || [];

document.getElementById("agregarProductoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombreProd").value;
    var categoria = document.getElementById("categoriaProd").value;
    var garantia = document.getElementById("garantiaProd").value;
    var stock = document.getElementById("stockProd").value;
    var precio = document.getElementById("precioProd").value;
    var imagen = document.getElementById("imagenProd").value; 
    var proveedor = document.getElementById("proveedorProd").value;
    var marca = document.getElementById("marcaProd").value; 
    var material = document.getElementById("materialProd").value; 
    var medidas = document.getElementById("medidasProd").value; 
    var peso = document.getElementById("pesoProd").value; 
    var descripcion = document.getElementById("descripcionProd").value; 
    var fechaIngreso = document.getElementById("fechaIngresoProd").value; 

    var maxId = 0;
    productos.forEach(function(producto) {
        if (producto.idp > maxId) {
            maxId = producto.idp;
        }
    });

    var nuevoId = maxId + 1;

    var producto = {
        idp: nuevoId,
        nombre: nombre,
        categoria: categoria,
        garantia: garantia,
        stock: stock,
        precio: precio,
        imagen: imagen,
        proveedor: proveedor, 
        marca: marca, 
        material: material,
        medidas: medidas, 
        peso: peso, 
        descripcion: descripcion, 
        fechaIngreso: fechaIngreso, 
        tipo: "producto" 
    };

    productos.push(producto);

    localStorage.setItem('productos', JSON.stringify(productos));

    alert("Producto agregado correctamente con el ID: " + nuevoId);

    window.location.href = "../../html/inventario.html";

});
