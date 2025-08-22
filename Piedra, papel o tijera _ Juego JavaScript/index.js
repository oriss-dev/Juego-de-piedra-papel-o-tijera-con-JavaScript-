// Declaramos nuestras variables
// Guardaremos en variables todos los elementos que 
// veamos necesarios utilizar

let boton_jugar = document.querySelector(".boton-jugar")
let jugador = document.getElementById("#emojijugador")
let computadora = document.querySelector("#emojicomputadora")
let resultado = document.querySelector("#textoResultado")
let opciones = document.querySelectorAll(".opcion")
let versus = document.querySelector("#versus")


// Ahora empezamos agregando funcionalidad cuando damos click en jugar
boton_jugar.addEventListener("click", () => {
    opciones.forEach((opcion) => {
        opcion.removeAttribute("disabled")
    })
    jugador.textContent = "?"
    computadora.textContent = "?"
})

// Luego creemos la funcionalidad cuando seleccionemos una opcion
let mi_opcion = ""

let emojis = {
    piedra: "✊",
    papel: "✋",
    tijeras: "✌️"
}

let opciones_computadora = ["piedra", "papel", "tijeras"]

// 0 => piedra
//opciones_computadora[numero aleatorio] => "papel"


opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        mi_opcion = opcion.getAttribute("id")
        jugador.textContent = emojis[mi_opcion]

        // Al final agregaremos la funcionalidad cuando la computadora piensa
        let numero_aleatorio = Math.floor(Math.random() * 3)
        let eleccion_computadora = opciones_computadora[numero_aleatorio]
        computadora.textContent = eleccion_computadora
        computadora.textContent = emojis[eleccion_computadora]


        versus.style.displey = "none"

        if (mi_opcion == eleccion_computadora){
            resultado.textContent = "Empate"
        } else if (
            (mi_opcion == "piedra" && eleccion_computadora == "tijeras") ||
            (mi_opcion == "papel" && eleccion_computadora == "piedra") ||
            (mi_opcion == "tijeras" && eleccion_computadora == "papel")

        ) {
        resultado.textContent = "Ganaste"
        } else {
            resultado.textContent = "Perdiste"
        }

    })
})


