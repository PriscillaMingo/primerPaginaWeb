var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

/* Variables */
var b = 4;
var showIncorrecta = true;
var showPista = true;
var notwin = true;

/* Funcion para respuesta */
function envie() {
     var a = document.getElementById("text").value;

    // Si es respuesta correcta
    if (a.toLowerCase() === "coles de brusela") {
        notwin = false;

        if (!!document.getElementById("inco")) {
            document.getElementById("inco").remove();
        }

        document.getElementById("text").insertAdjacentHTML("afterend", "<div id='win'><span id='a' style='color: tomato;'><br><b>GANASTE!!</b></div><br></div></span>");

        
        // Deshabilitar los botones de respuesta y pista
        document.getElementById("button").setAttribute("disabled", "disabled");

        if (!!document.getElementById("pista")) {
            document.getElementById("pista").setAttribute("disabled", "disabled");
        }

        // Aparece nuevo boton para jugar de nuevo
        document.getElementById("button").insertAdjacentHTML("afterend", "<button id='nuevo' onclick='reset()' type='submit'>Volver a jugar</button>");

    }
    // Si la respuesta no es correcta, se inserta un cartel de "Respuesta incorrecta"
    else {
        if (showIncorrecta == true) {
            document.getElementById("text").insertAdjacentHTML("afterend", "<span id='inco' style='color: red;'><br>Respuesta incorrecta</span>");
        showIncorrecta = false;
        }
    }

    // se habilita el boton ver pista
    if (showPista && notwin && b == 3) {
        document.getElementById("button").insertAdjacentHTML("afterend", "<div id='id_pista'><br><button id='pista' onclick='pistas()' type='submit'>Pista</button></div>");
        showPista = false;
    }

    // Si todavia no gano
    if (b > 0 && notwin) {

        // Descontar intento y actualizar en el html
        b--;
        document.getElementById("num").textContent = b;

        // Renovamos el contador de intentos
        const ee = document.getElementById("num");
        ee.classList.remove('fail');
        void ee.offsetWidth;
        ee.classList.add('fail');


        if (!!document.getElementById("pista")) {
            (b == 1 || b == 2) ? document.getElementById("pista").removeAttribute("disabled", "disabled"): document.getElementById("pista").setAttribute("disabled", "disabled");

        }

        // No hay intentos
        if (b == 0) {

            if (notwin) {
                if (!!document.getElementById("inco")) {
                    document.getElementById("inco").remove();
                }
                document.getElementById("text").insertAdjacentHTML("afterend", "<div id='lose'><span id='a' style='color: tomato;'><br><b>PERDISTE :C</b><br></div></span>");
            }

            // Deshabilitamos botones
            document.getElementById("button").setAttribute("disabled", "disabled");
            if (!!document.getElementById("pista")) {
                document.getElementById("pista").setAttribute("disabled", "disabled");
            }

            // Volver a jugar
            document.getElementById("button").insertAdjacentHTML("afterend", "<button id='nuevo' onclick='reset()' type='submit'>Volver a jugar</button>");
        }
    }

}

/* Variables de pistas */
var dado1 = false;
var dado2 = false;

/* Funcion para mostrar pistas */
function pistas() {

    if (b == 2 && !dado1) {
        document.getElementById("button").insertAdjacentHTML("afterend", "<span id='a' style='color: tomato;'><br><br><b>Son de hojas verdes</b></span>");

        dado1 = true;

        document.getElementById("pista").setAttribute("disabled", "disabled");
    }
    
    else if (b == 1 && !dado2) {

        // Se agrega pista abajo sino se pidio aun 
        if (!!document.getElementById("a")) {
            document.getElementById("a").insertAdjacentHTML("afterend", "<span id='b' style='color: tomato;'><br><br><b>A muchos niños no le gustan...</b></span>");
        } else {
            document.getElementById("button").insertAdjacentHTML("afterend", "<span id='b' style='color: tomato;'><br><br><b>A muchos niños no le gustan...</b></span>");
        }
        dado2 = true;

        document.getElementById("pista").setAttribute("disabled", "disabled");
    }

}

/* Resetear el juego */
function reset() {

    b = 4;
    document.getElementById("num").textContent = b;
    const ee = document.getElementById("num");
    ee.classList.remove('fail');
    void ee.offsetWidth;
    ee.classList.add('fail');
    showIncorrecta = true;
    showPista = true;
    notwin = true;
    dado1 = false;
    dado2 = false;

    // Volvemos todos los elementos
    if (!!document.getElementById("a")) {
        document.getElementById("a").remove();
    }

    if (!!document.getElementById("b")) {
        document.getElementById("b").remove();
    }

    if (!!document.getElementById("win")) {
        document.getElementById("win").remove();
    }

    if (!!document.getElementById("lose")) {
        document.getElementById("lose").remove();
    }

    if (!!document.getElementById("inco")) {
        document.getElementById("inco").remove();
    }

    if (!!document.getElementById("id_pista")) {
        document.getElementById("id_pista").remove();
    }
    
    document.getElementById("nuevo").remove();
    document.getElementById("text").value = "";
    document.getElementById("button").removeAttribute("disabled", "disabled");
}