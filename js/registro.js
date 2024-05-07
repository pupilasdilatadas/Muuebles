function registrarUsuario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    // Comprobación si el correo ya está registrado
    if (localStorage.getItem(correo)) {
        alert("El correo electrónico ya está registrado");
    } else {
        var usuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };
        localStorage.setItem(correo, JSON.stringify(usuario));
        alert("Usuario registrado correctamente");
    }
}

function iniciarSesion() {
    var correo = document.getElementById("correoLogin").value;
    var contrasena = document.getElementById("contrasenaLogin").value;

    var usuario = JSON.parse(localStorage.getItem(correo));

    if (usuario && usuario.contrasena === contrasena) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario.nombre + "!");
        // Aquí puedes redirigir al usuario a otra página, por ejemplo:
        // window.location.href = "dashboard.html";
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}
