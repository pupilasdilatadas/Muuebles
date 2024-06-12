document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById("footerContainer");

    const currentPath = window.location.pathname;
    const depth = currentPath.split("/").length - 3; 
    const basePath = "../".repeat(depth);

    const footerHTML = `
        <footer class="bg-dark text-white pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>Contacto</h5>
                        <p>Correo: contacto@empresa.com</p>
                        <p>Celular: +56 9 1234 5678</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Ubicación</h5>
                        <p>Calle Falsa 123, Santiago, Chile</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Dudas y Preguntas</h5>
                        <p><a href="${basePath}preguntasFrecuentes.html" class="text-white">Preguntas Frecuentes</a></p>
                    </div>
                </div>
            </div>
        </footer>
    `;

    footerContainer.innerHTML = footerHTML;
});
