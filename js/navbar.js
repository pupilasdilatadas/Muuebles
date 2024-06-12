document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.getElementById("navbarContainer");

  const currentPath = window.location.pathname;
  const depth = currentPath.split("/").length - 3; 
  const basePath = "../".repeat(depth);

  const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between align-items-center">

        <!-- Logo -->

        <a class="navbar-brand" href="${basePath}index.html">
            <img src="${basePath}../img/logo.png" alt="Logo" width="auto" height="40">
        </a>

        <!-- La hamburguesa -->

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- El Search -->

        <div id="navbarSupportedContent">
            <form class="search-form">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" class="bi bi-person me-3" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input class="search-input" type="search" placeholder="Buscar" aria-label="Buscar">
                <a href="${basePath}productosCliente.html" class="search-button">Buscar</a>
            </form>
        </div>        
        
        <!-- Iconitos -->

        <span class="navbar-text"">
            ${localStorage.getItem('usuario') ? 
                `<a href="#" onclick="cerrarSesion()" class="navbar-text" style="text-decoration: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" class="bi bi-person me-3" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    <span style="margin-right: 20px; ">Cerrar sesión</span> 
                </a>` 
                :
                `<a href="${basePath}iniciarSesion.html" class="navbar-text" style="text-decoration: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" class="bi bi-person me-3" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    <span style="margin-right: 20px; ">Iniciar sesión o Regístrate</span> 
                </a>`
            }
            <a href="${basePath}carrito.html" class="navbar-text" style="text-decoration: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" class="bi bi-person me-3" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
            </a>
 
        </span>

    </div>
  </nav>
    <div class="bajoNavbar">
        <a href="${basePath}productosCliente.html" class="btn btn-transparent all-link" id="productosClienteLink">Productos</a>
        <a href="${basePath}crud/agregarInstalacion.html" class="btn btn-transparent all-link" id="productosClienteLink">Instalaciones a Domicilio</a>
        <a href="${basePath}inventario.html" class="btn btn-transparent admin-link" id="inventarioLink">Inventario</a>
    </div>
    
  `;

  navbarContainer.innerHTML = navbarHTML;
  
  const scriptInicioSesion = document.createElement("script");
  scriptInicioSesion.src = "../js/inicioSesion.js";
  document.body.appendChild(scriptInicioSesion);

          
});
