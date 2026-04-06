// --- Lógica de Sistemas ---
let cpuActual = 0;
let ramActual = 0;
let procesosContador = 0;

function lanzarProceso(nombre, consumoCPU, consumoRAM) {
    if (cpuActual + consumoCPU > 100 || ramActual + consumoRAM > 100) {
        alert("¡Peligro! El sistema no tiene suficientes recursos. Cierra algo primero.");
        return;
    }

    procesosContador++;
    const idProceso = `proc-${procesosContador}`;

    // Actualizar recursos
    cpuActual += consumoCPU;
    ramActual += consumoRAM;
    actualizarBarras();

    // Crear elemento visual del proceso
    const contenedor = document.getElementById("lista-procesos");
    const div = document.createElement("div");
    div.id = idProceso;
    div.className = "proceso-activo";
    div.innerHTML = `
        <span><strong>${nombre}</strong></span>
        <button class="btn-cerrar" onclick="cerrarProceso('${idProceso}', ${consumoCPU}, ${consumoRAM})">X</button>
    `;
    contenedor.appendChild(div);
}

function cerrarProceso(id, cpu, ram) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.remove();
        cpuActual -= cpu;
        ramActual -= ram;
        actualizarBarras();
    }
}

function actualizarBarras() {
    document.getElementById("barra-cpu").style.width = cpuActual + "%";
    document.getElementById("barra-ram").style.width = ramActual + "%";
}

function reiniciarSistema() {
    cpuActual = 0;
    ramActual = 0;
    document.getElementById("lista-procesos").innerHTML = "";
    actualizarBarras();
}