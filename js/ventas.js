document.addEventListener("DOMContentLoaded", function() {
    const ventasTableBody = document.getElementById("ventasTableBody");
    const tableTitle = document.getElementById("tableTitle");
    const toggleTableSelect = document.getElementById("toggleTableSelect");
    const totalVenta = document.getElementById("totalVenta");
    const totalIngresos = document.getElementById("totalIngresos");
    const totalItems = document.getElementById("totalItems");
    const ventasIndexTitle = document.getElementById("ventasIndexTitle");

    let isProductSales = true;

    const ventasProductos = [
        { fecha: "2024-06-01", producto: "Mesa", precio: 100, cantidad: 2, total: 200, proveedor: "Proveedor A" },
        { fecha: "2024-06-02", producto: "Silla", precio: 50, cantidad: 4, total: 200, proveedor: "Proveedor B" },
    ];

    const ventasInstalaciones = [
        { fecha: "2024-06-01", producto: "Instalación de Cocina", precio: 500, cantidad: 1, total: 500, proveedor: "Proveedor C" },
        { fecha: "2024-06-02", producto: "Instalación de Baño", precio: 300, cantidad: 1, total: 300, proveedor: "Proveedor D" },
    ];

    function renderTable(data) {
        ventasTableBody.innerHTML = "";
        let totalVentaSum = 0;
        let totalIngresosSum = 0;
        let totalItemsSum = 0;

        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.fecha}</td>
                <td>${item.producto}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
                <td>${item.total}</td>
                <td>${item.proveedor}</td>
            `;
            ventasTableBody.appendChild(row);

            totalVentaSum += item.total;
            totalIngresosSum += item.precio * item.cantidad;
            totalItemsSum += item.cantidad;
        });

        totalVenta.textContent = totalVentaSum;
        totalIngresos.textContent = totalIngresosSum;
        totalItems.textContent = totalItemsSum;
    }

    function toggleTable() {
        if (toggleTableSelect.value === "instalaciones") {
            tableTitle.textContent = "De Instalaciones";
            ventasIndexTitle.textContent = "Instalaciones Hechas";
            renderTable(ventasInstalaciones);
        } else {
            tableTitle.textContent = "De Productos";
            ventasIndexTitle.textContent = "Productos Vendidos";
            renderTable(ventasProductos);
        }
    }

    toggleTableSelect.addEventListener("change", toggleTable);

    renderTable(ventasProductos);
});