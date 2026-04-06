function clasificarDato() {
    let inputElement = document.getElementById("miInput");
    let valor = inputElement.value.trim();

    if (valor === "") return;

    let valorParaMates = valor.replace(',', '.');
    let textoAAgregar =  valor + " " +"-";

    if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
        document.getElementById("variables-boolean").innerHTML += textoAAgregar;
    } 
    else if (!isNaN(valorParaMates) && valorParaMates !== "") {
        let numero = Number(valorParaMates);
        
        if (Number.isInteger(numero)) {
            document.getElementById("variables-int").innerHTML += textoAAgregar;
        } else {
            document.getElementById("variables-double").innerHTML += textoAAgregar;
        }
    } 
    else {
        document.getElementById("variables-string").innerHTML += textoAAgregar;
    }

    inputElement.value = "";
}

function limpiarDatos() {
    document.getElementById("variables-int").innerHTML = "";
    document.getElementById("variables-string").innerHTML = "";
    document.getElementById("variables-double").innerHTML = "";
    document.getElementById("variables-boolean").innerHTML = "";
}



const btnEmpezar = document.getElementById('btn-empezar');
const areaJuego = document.getElementById('area-juego');
const areaConclusion = document.getElementById('area-conclusion');
const textoPregunta = document.getElementById('texto-pregunta');
const textoConclusion = document.getElementById('texto-conclusion');
const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');

let preguntaActual = 0;
let primerRespuestaFueSi = false;

btnEmpezar.addEventListener('click', () => {
    btnEmpezar.style.display = 'none';
    areaConclusion.style.display = 'none';
    areaJuego.style.display = 'block';
    
    preguntaActual = 1;
    textoPregunta.textContent = "¿Está lloviendo afuera?";
});

btnSi.addEventListener('click', () => {
    if (preguntaActual === 1) {
        primerRespuestaFueSi = true;
        preguntaActual = 2;
        textoPregunta.textContent = "¿Tienes un paraguas a la mano?";
    } else if (preguntaActual === 2) {
        areaJuego.style.display = 'none';
        areaConclusion.style.display = 'block';
        
        if (primerRespuestaFueSi === true) {
            textoConclusion.textContent = "Sales de casa con tu paraguas. ¡Perfecto, no te mojas!";
        } else {
            textoConclusion.textContent = "Vas a la playa a disfrutar del calor tropical.";
        }
        
        btnEmpezar.style.display = 'inline-block';
        btnEmpezar.textContent = "Volver a jugar";
    }
});

btnNo.addEventListener('click', () => {
    if (preguntaActual === 1) {
        primerRespuestaFueSi = false;
        preguntaActual = 2;
        textoPregunta.textContent = "¿Hace mucho calor?";
    } else if (preguntaActual === 2) {
        areaJuego.style.display = 'none';
        areaConclusion.style.display = 'block';
        
        if (primerRespuestaFueSi === true) {
            textoConclusion.textContent = "Decides quedarte en casa para no empaparte. ¡Buena elección!";
        } else {
            textoConclusion.textContent = "Sales a dar un paseo agradable por el parque.";
        }
        
        btnEmpezar.style.display = 'inline-block';
        btnEmpezar.textContent = "Volver a jugar";
    }
});

function ejecutarFor() {
    const contenedor = document.getElementById("resultado-bucles");
    contenedor.innerHTML = "<strong>Iniciando Bucle For (i=1; i<=5; i++):</strong><br>";
    
    
    for (let i = 1; i <= 5; i++) {
        contenedor.innerHTML += `Vuelta número: ${i} <br>`;
    }
    
    contenedor.innerHTML += "<strong>¡Bucle finalizado!</strong>";
}

function ejecutarWhile() {
    const contenedor = document.getElementById("resultado-bucles");
    contenedor.innerHTML = "<strong>Iniciando Bucle While (Lanzando dado hasta que salga 6):</strong><br>";
    
    let dado = 0;
    let intentos = 0;

    
    while (dado !== 6) {
        intentos++;
        dado = Math.floor(Math.random() * 6) + 1; // Genera número entre 1 y 6
        contenedor.innerHTML += `Intento ${intentos}: Salió un [${dado}] <br>`;
        
        if (intentos > 20) break; 
    }

    contenedor.innerHTML += `<strong>¡Objetivo logrado en ${intentos} intentos!</strong>`;
}

function limpiarBucles() {
    document.getElementById("resultado-bucles").innerHTML = "> Esperando ejecución...";
}

let miTren = [];

function agregarAlArray() {
    let input = document.getElementById("input-array");
    let valor = input.value.trim();
    
    if (valor !== "") {
        miTren.push(valor);
        actualizarVistaArray();
        input.value = "";
    }
}

function quitarDelArray() {
    miTren.pop();
    actualizarVistaArray();
}

function actualizarVistaArray() {
    let visor = document.getElementById("visualizacion-array");
    if (miTren.length === 0) {
        visor.innerHTML = "[ El tren está vacío ]";
        return;
    }
    
    // Mostramos cada elemento como un "vagón"
    visor.innerHTML = miTren.map((item, index) => 
        `<span class="vagon"><strong>${index}:</strong> ${item}</span>`
    ).join(" ↔ ");
}


// POO
class Mascota {
    constructor(tipo, sonido) {
        this.tipo = tipo;
        this.sonido = sonido;
        this.id = Math.floor(Math.random() * 1000);
    }
}

function crearObjeto(tipoSeleccionado) {
    let sonido = (tipoSeleccionado === 'Perro') ? "¡Guau!" : "¡Miau!";
    const nuevaMascota = new Mascota(tipoSeleccionado, sonido);
    
    const contenedor = document.getElementById("resultado-poo");
    
    // Creamos un "molde" visual para el objeto
    const card = document.createElement("div");
    card.className = "tarjeta-objeto";
    card.innerHTML = `
        <strong>${nuevaMascota.tipo}</strong><br>
        <small>ID: ${nuevaMascota.id}</small><br>
        <hr>
        <p>Dice: ${nuevaMascota.sonido}</p>
    `;
    
    contenedor.appendChild(card);
}