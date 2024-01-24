let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSoterado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "P",
      `Acertaste el numero en  ${intentos} ${intentos === 1 ? "vez" : "veces"} `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroSecreto > numeroDeUsuario) {
    asignarTextoElemento("p", "el numero es mayor ");
  } else {
    asignarTextoElemento("p", "el numero es menor");
  }
  intentos++;
  lipiarCaja();

  return;
}

function lipiarCaja() {
  let cajaLimpia = (document.querySelector("#valorUsuario").value = "");
}

function condcionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function generarNumeroSecreto() {
  let numeroSSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroSSecreto);
  console.log(listaNumeroSoterado);
  if (listaNumeroSoterado.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortaeron todos los numeros posobles");
  } else {
    if (listaNumeroSoterado.includes(numeroSSecreto)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSoterado.push(numeroSSecreto);
    }
    return numeroSSecreto;
  }
}
function reiniciarJuego() {
  lipiarCaja();
  condcionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condcionesIniciales();
