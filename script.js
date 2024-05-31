let resultado = 5 + 9;

console.log(resultado);
// alert("Hola Mundo");
// prompt();
// confirm();
// document.write()

//-------------------------------------------------------------------------------
//Solución item c punto 2 Workshop

//1. Declaración de variables

const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;

//2. Proceso

resultado = (x + y) / (u + w / a);

//3. Mostrar resultado
console.log("2.c: ", resultado);

//punto 3 item b
const pVerdadera = true;
const qVerdadera = true;
const pFalsa = false;
const qFalsa = false;

//----Proceso: Cuando p y q son verdaderas
resultado = !pVerdadera && !qVerdadera;

//3. Mostrar resultado
console.log("3.b. NOTp AND NOTq", resultado);
