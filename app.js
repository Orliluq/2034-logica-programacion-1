//alert('Hola Mundo');

//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

// Desafío:
//cambiar el valor de la variable numeroMaximoPosible. 
//Para jugar entre 1 y 100, cambiar el valor de la variable a 
//numeroMaximoPosible = 100; para jugar entre 1 y 1000, 
//cambiar el valor de la variable a numeroMaximoPosible = 1000.

//Variables
/* let numeroMaximoPosible = 100; //100, 1000
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
 */

/* Usar una función para generar el número secreto, en donde, la función 
podría tomar como entrada el rango de números deseado y devolver 
un número aleatorio dentro de ese rango.
 */

/* function generarNumeroSecreto(numeroMaximoPosible) {
    return Math.floor(Math.random()*numeroMaximoPosible)+1;
}
//Variables
let numeroMaximoPosible = 100; //100, 1000
let numeroSecreto = generarNumeroSecreto(numeroMaximoPosible);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
} */


/* let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('mensajeDeBienvenida'); */

//javascript
/* alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 
 */

//javascript
/* let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia = contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
} */

//alert('¡Bienvenida y bievenido a nuestro sitio web!');

//let nombre = 'Luna';
//let edad = 25;
/* let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

let nombre = 'Luna';
prompt('Cuál es el nombre de usuario');

let edad = 25;
prompt('Ingrese su edad');

if (edad >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
}
 */

/* let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
} */

/* javascript
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
} */

/* let porcentajeDescuento = 0;

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
} else {
    porcentajeDescuento = 0;
} */

//alert('Bienvenido al juego del número secreto');

/* // Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
 */

/* let diaSemana = prompt('¿Qué día de la semana es?');
if (diaSemana === 'Sábado' || diaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}

let puntuacion = 101;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}

let saldoCuenta = 1000; 
alert(`Tu saldo es de $${saldoCuenta}.`);

let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`); */

/* let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
} */

/* let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    soma += numero;
}

let promedio = soma / qtdNumeros;

console.log(promedio); */

/* let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
} */

/* let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
} */

/* let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
} */

/* let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}"
 */

/* let idad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (idad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
} */

// si tiene manzana o tiene banama…
/* if (tieneManzana|| tieneBanana) {
    console.log("Tienes frutas!");
  } else {
    console.log("No tienes frutas.");
  }
   */

/*   let palabraPersona = "";

  if(cantidadPersonas == 1){
      palabraPersona = "persona";
  }else{
      palabraPersona = "personas"
  } */
  
/* 0.5248738910328501
0.08458620904957355
0.9347284927568912 */

/* console.log('Bienvenido');
let nombre = 'Orli';
console.log(`¡Hola, ${nombre}!`);
let nombre = 'Orli';
alert(`¡Hola, ${nombre}!`);
let lenguajePreferido = Prompt('¿Qué lenguaje de programación te gusta más?');
console.log(lenguejaPreferido);
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`La suma de ${value1} y ${value2} es igual a ${resultado}.`)

let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`La diferencia entre ${value1} y ${value2} es igual a ${resultado}.`);

let edad = Prompt('Ingrese su edad:');
if (edad > 17) {
     console.log('Eres mayor de edad.');
} else {
     console.log('Eres menor de edad');
}

var número = parseFloat(prompt("Ingrese un número:"));


if (número > 0) {
     console.log("El número es positivo.");
} else if (número < 0) {
     console.log("El número es negativo.");
} else {
     console.log("El número es cero.");
}

var numero = parseFloat(prompt("Enter a number:"));


if (numero > 0) {
     console.log("El número es positivo.");
} else if (numero < 0) {
     console.log("El número es negativo.");
} else {
     console.log("El número es cero.");
}

let numero = 1;
while (numero <= 10) {
     console.log(numero);
     numero++;
}

let nota = 8; // Replace with the value of the note you want to test

if (grado >= 7) {
     console.log("Aprobado");
} else {
     console.log("Reprobado");
}

let randomNumber = Math.random();
console.log(randomNumber);

let randomInteger = parseInt(Math.random() * 10) + 1;
console.log(RandomInteger);

let randomInteger = parseInt(Math.random() * 1000) + 1;
console.log(RandomInteger); */
