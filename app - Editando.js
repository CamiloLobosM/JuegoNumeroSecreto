VARIABLES
//let titulo = document.querySelector('h1');                                           //aca traemos el dato del index.html...
//titulo.innerHTML = 'Juego del Número Secreto';                                       //con el InnerHtml podemos incluir un texto, es como el mensaje de bienvenida

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';


let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return
    
    //elementoHtml.innerHTML = 'Juego del Número Secreto';
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //let numeroDeUsuario = document.getElementById('valorUsuario').value;
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);                                                           // lo que es console.log se muestra en la parte de programador en el html
    //console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario === numeroSecreto){                                                   // esta es la condición SI  
        asignarTextoElemento ('p',`Acertaste el Número Secreto en ${intentos} ${(intentos===1) ?'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');                     // aca habilitamos el boton de reinicio...


    } else {
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p','El Número Srecreto es menor');   
        } else {
            asignarTextoElemento ('p','El Número Srecreto es mayor');
                }
            intentos++;  
            limpiarCaja();
    }
        return;
    }
    
    function limpiarCaja() {
        let valorCaja = document.querySelector('#valorUsuario');                                                     //sale del index...es el ID del imput    
        valorCaja.value = '';

    
    function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1;
    
    }

    //function asignarTextoElemento() 
    //let titulo = document.querySelector('h1');                                     //llamamos al index
    //titulo.innerHTML = 'Juego del Número Secreto';


function intentoDeUsuario(){                                                        //esta es la funcion
    alert('Click desde el botón');
}

asignarTextoElemento('h1','Juego del Número Secreto!!');                                                             //para asignar un texto y reemplazar las formulas de arriba let
asignarTextoElemento('p','Indica un número del 1 al 10');   

















------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


INDEX 

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>

<body>

    <div class="container">
        <div class="container__contenido">
            <div class="container__informaciones">
                <div class="container__texto">
                    <h1></h1>                                                                                                   //este debiera ser el titulo
                    <p class="texto__parrafo"></p>                                                                              //este debiera ser el parrafo
                </div>
                <input type="number" id="ValorUsuario"min="1" max="10" class="container__input">                                //</input>
                <div class="chute container__botones">
                <button onclick="verificarIntento();" class="container__boton">Intentar</button>                             //etiqueta que representa un boton
                <button onclick="reiniciarJuego()"  class="container__boton" id="reiniciar" disabled>Nuevo juego</button>    //etiqueta que representa un boton
                </div>
            </div>
            <img src="./img/ia.png" alt="Una persona mirando a la izquierda" class="container__imagen-persona" />
        </div>
    </div>




    <script src="app.js" defer></script>
</body>

</html>




--------------------------------------------------------------------------------------------------------------------------------------------

EJERCICIOS

¿Qué código JavaScript usarías para cambiar el texto mostrado en el encabezado de tu página (elemento h1) a "Bienvenido al mundo dev"?


let titulo = document.querySelector('h1')
titulo.innerHTML = 'Bienvenido al mundo dev'





Teniendo en cuenta lo que se enseñó sobre la función onclick, ¿cuál es la forma correcta de crear esta funcionalidad, 
utilizándose de las buenas prácticas de escritura de las funciones?

<button onclick="alertFunction()">Haz clic aquí</button>

function alertFunction() 
  alert("¡Hola, has hecho clic en el botón!");






--------------------------


¿Cómo puedes cambiar el texto del elemento h2 en tu página a "Has agregado una nueva canción!" usando los conceptos del curso "Lógica de programación: explore funciones y listas"?

let h2 = document.querySelector('h2');
h2.innerHTML = 'Has agregado una nueva canción!';

Al seleccionar el elemento h2 con el método querySelector y cambiar el texto con innerHTML, estás utilizando correctamente los conceptos enseñados en el curso.


--------------------------------------


La anatomía de una función en JavaScript está compuesta por diversas partes que definen su comportamiento. Es importante comprender estos elementos para crear funciones 
reutilizables y modularizar el código de manera eficiente. Por lo tanto, conocer la estructura de las funciones en JavaScript es fundamental para dominar el lenguaje y 
desarrollar aplicaciones complejas de manera organizada y funcional.

Con base en lo que vimos en esta lección, analiza las siguientes afirmaciones y marca solo las opciones verdaderas sobre funciones.

Selecciona 3 alternativas


Palabra clave function: Se utiliza para declarar una función en JavaScript.
Toda función en JavaScript se declara utilizando la palabra clave "function". Esta palabra clave se utiliza para crear una función.


Paréntesis (): Después del nombre de la función (si lo hay), los paréntesis se usan para definir los parámetros de la función.
Los paréntesis en una función en JavaScript se utilizan para contener los argumentos que recibe la función, lo que permite pasar 
información a la función e influir en su comportamiento y resultados




---------------------------------------------------



Eres un desarrollador de software que trabaja con JavaScript y necesitas crear una función que verifique si un número es positivo, negativo o cero. 
Tu tarea es implementar una función que reciba como parámetro un número entero y muestre un mensaje en la consola según las siguientes reglas:

Si el número es mayor que cero, el mensaje debe ser: "El número es positivo."
Si el número es menor que cero, el mensaje debe ser: "El número es negativo."
Si el número es igual a cero, el mensaje debe ser: "El número es cero."
Puedes utilizar la estructura de control if-else para verificar las condiciones y mostrar el mensaje correspondiente en la consola.

Analiza las siguientes alternativas y marca aquella que contiene el código que cumple con todas las reglas mencionadas anteriormente:

Alternativa correta
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("El número es positivo.");
  } else if (numero < 0) {
    console.log("El número es negativo.");
  } else {
    console.log("El número es zero.");
  }
}

En este código, utilizamos la estructura de control if-else para verificar las tres posibilidades: si el número es mayor que cero, si es menor que cero o si es igual a cero. 
Dependiendo de la condición, la función imprime el mensaje correspondiente en la consola."






const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.






