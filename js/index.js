document.addEventListener("DOMContentLoaded", function() {
    var mensaje = localStorage.getItem('mensajeAlerta');
    if (mensaje) {
        mostrarAlertaBootstrap(mensaje, "success");
        localStorage.removeItem('mensajeAlerta'); 
    }
});

function mostrarAlertaBootstrap(mensaje, tipo) {
    var alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-" + tipo);
    alerta.textContent = mensaje;
    document.body.appendChild(alerta);
    
    setTimeout(function() {
        alerta.remove();
    }, 3000);
}
