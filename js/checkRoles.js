document.addEventListener("DOMContentLoaded", function() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioActual) {
        if (usuarioActual.tipo === 'Admin') {
            document.querySelectorAll('.admin-link').forEach(link => link.style.display = 'inline-block');
        } else if (usuarioActual.tipo === 'Vendedor') {
            document.querySelectorAll('.vendedor-link').forEach(link => link.style.display = 'inline-block');
        }
        document.querySelectorAll('.all-link').forEach(link => link.style.display = 'inline-block');
    } else {
        document.querySelectorAll('.all-link').forEach(link => link.style.display = 'inline-block');
    }
});
