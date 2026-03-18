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