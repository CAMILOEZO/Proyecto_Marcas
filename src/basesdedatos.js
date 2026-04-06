let usuariosGlobales = []; // Aquí guardaremos nuestra "tabla" temporal

async function obtenerUsuarios() {
    const cuerpo = document.getElementById("cuerpo-tabla");
    const cabecera = document.getElementById("cabecera-tabla");
    
    cuerpo.innerHTML = "Cargando datos...";

    try {
        // Conectamos a la API (Esto es el FETCH)
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        usuariosGlobales = await respuesta.json();

        // Creamos la cabecera
        cabecera.innerHTML = `
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
        `;

        renderizarTabla(usuariosGlobales);

    } catch (error) {
        cuerpo.innerHTML = "Error al conectar con la base de datos.";
        console.error("Hubo un fallo:", error);
    }
}

function renderizarTabla(datos) {
    const cuerpo = document.getElementById("cuerpo-tabla");
    cuerpo.innerHTML = ""; // Limpiamos

    datos.forEach(user => {
        const fila = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
            </tr>
        `;
        cuerpo.innerHTML += fila;
    });
}

// Esto simula un "SELECT * FROM usuarios WHERE name LIKE %busqueda%"
function simularSQL() {
    const busqueda = document.getElementById("input-busqueda").value.toLowerCase();
    
    // El método .filter es nuestro WHERE en JavaScript
    const resultados = usuariosGlobales.filter(user => 
        user.name.toLowerCase().includes(busqueda)
    );

    renderizarTabla(resultados);
}