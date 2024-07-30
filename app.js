
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     
if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento ('p',`Acertaste el Número Secreto en ${intentos} ${(intentos===1) ?'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (numeroDeUsuario > numeroSecreto){
    asignarTextoElemento ('p','El Número Secreto es menor');
    } else {
        asignarTextoElemento ('p','El Número Secreto es mayor');
            }
         intentos++;   
         limpiarCaja();   
        }
    return;
}
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Acabaste el juego...Ya se sortearon todos los números posibles');    
} else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto ();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;


    }
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto!!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();


