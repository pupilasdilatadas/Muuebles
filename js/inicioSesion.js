document.addEventListener("DOMContentLoaded", function() {
    var mensaje = localStorage.getItem('mensajeAlerta');
    if (mensaje) {
        mostrarAlertaBootstrap(mensaje, "success");
        localStorage.removeItem('mensajeAlerta'); 
    }
});

function iniciarSesion() {
    var correo = document.getElementById("correoLogin").value;
    var contrasena = document.getElementById("contrasenaLogin").value;

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuario = usuarios.find(function(u) {
        return u.correo === correo && u.contrasena === contrasena;
    });

    if (usuario) {
        var mensaje = "¡Bienvenido, " + usuario.nombre + "!";
        localStorage.setItem('mensajeAlerta', mensaje);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        window.location.href = "../html/index.html";
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrito');

    window.location.href = "../html/iniciarSesion.html";
}

function mostrarAlertaBootstrap(mensaje, tipo) {
    var alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-" + tipo);
    alerta.textContent = mensaje;
    document.body.appendChild(alerta);
    
    setTimeout(function() {
        alerta.remove();
    }, 3000);
}
