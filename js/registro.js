function registrarUsuario() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var contrasena = document.getElementById("contrasena").value.trim();
    var tipoUsuario = document.getElementById("tipoUsuario").value;

    if (nombre === "" || correo === "" || contrasena === "") {
        mostrarAlertaBootstrap("Por favor, completa todos los campos", "danger");
        return;
    }

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioExistente = usuarios.find(function(usuario) {
        return usuario.correo === correo;
    });

    if (usuarioExistente) {
        mostrarAlertaBootstrap("El correo electrónico ya está registrado", "danger");
    } else {
        var nuevoUsuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena,
            tipo: tipoUsuario
        };

        usuarios.push(nuevoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        localStorage.setItem('mensajeAlerta', 'Usuario registrado correctamente');
        window.location.href = "../html/iniciarSesion.html";
    }
}

function registrarAdministrador() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var contrasena = document.getElementById("contrasena").value.trim();
    var tipoUsuario = document.getElementById("tipoUsuario").value;

    if (nombre === "" || correo === "" || contrasena === "") {
        mostrarAlertaBootstrap("Por favor, completa todos los campos", "danger");
        return;
    }

    var usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        tipo: tipoUsuario
    };

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('mensajeAlerta', 'Usuario registrado correctamente');
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
