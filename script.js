// // 1) Crear una función flecha que reciba un número y devuelva el doble del mismo.

// let doble = num => num * 2;
// console.log(doble(2));

// // 2) Crear una función flecha que reciba dos números y muestre la suma de ellos.

// let numeros = (num1, num2) => num1 + num2;
// console.log(numeros(2, 4));

// // 3) Crear una función flecha que valide si un número es mayor a otro. Luego mostrar el resultado por consola

// let numeros = (num1, num2) => {
//     if (num1 > num2) {
//         console.log(`${num1} es mayor que ${num2}`);
//     } else {
//         console.log(`${num2} es mayor que ${num1}`);
//     }
// }
// numeros(2, 3);

// //4) Mostrar por pantalla uno por uno reccoriéndolo, el siguiente array:

// let frutas = ["sandía", "manzana", "damasco", "pelón", "frambuesa", "plátano"];

// function logArrayElements(element) {
//     alert(`${element}`);
// }
// //Recorro cada elemento del array
// frutas.forEach(logArrayElements);

// //5) Mostrar por pantalla las raíces cuadradas de los números del siguiente array:
// //let numeros = [16,29,120,64,81]; 

// const numeros = [16, 29, 120, 64, 81];
// const raices = numeros.map(Math.sqrt);
// console.log(raices);

// //6) Solicitar al usuario su nombre y su signo del zodíaco y devolver un mensaje que devuelva esos mismos datos. Ejemplo: “Su nombre es Fermin y su signo es Escorpio”.

// let nombre = prompt("Ingrese su nombre");
// let signo = prompt("Ingrese su signo zodiacal");

// let nombreSigno = (nombreusuario, signousuario) => {
//     alert(`Su nombre es ${nombreusuario} y su signo es ${signousuario}`)
// }

// nombreSigno(nombre, signo);

// //7) Mostrar por pantalla los números mayores a 100 del siguiente array.
// //let numeros = [160,23,120,60,1,-10,8,9483]

// let numeros = [160, 23, 120, 60, 1, -10, 8, 9483];
// const numMayores = numeros.filter(numero => numero > 100);
// console.log(numMayores);

// //8) Generar en base a un array, un nuevo array que tenga todos sus números consecutivos, y otro con sus números precedentes. (Ejemplo: Si el número es 8 : En el array de consecutivos irá 9 , y en el array de precedentes irá 7). Al final mostrar por pantalla los tres array formados.
// //let numeros = [15,28,32,40,11,-3,0,100]

// let numeros = [15, 28, 32, 40, 11, -3, 0, 100];
// let numerosConsecutivos = numeros.map(numero => numero + 1);
// let numerosPrecedentes = numeros.map(numero => numero - 1);

// alert(` Números: ${numeros} \n Números Consecutivos: ${numerosConsecutivos} \n Números Precedentes: ${numerosPrecedentes}`);

// //9) Crear una función flecha que reciba un parámetro que indique el momento del día: “Mañana, tarde, noche” y en base a eso de un saludo personalizado. Ejemplo: “Buenos días, buenas tardes, buenas noches”.

// momentoDelDia = prompt("Qué momento del día es? (Mañana, Tarde, Noche)").toLowerCase();

// let saludo = momentoDelDia => {
//     if (momentoDelDia === 'mañana') {
//         alert("Buenos días");
//     } else if (momentoDelDia === 'tarde') {
//         alert("Buenas tardes");
//     } else {
//         alert("Buenas noches");
//     }
// }

// saludo(momentoDelDia);

// // 10) Mostrar del siguiente array los nombres que comiencen con “M”.

// let personas = ["Mario", "Santino", "Clotilde", "Margarita", "Sebastian", "Melchor", "Macarena", "Flavio"];
// const nombresEmpiezanEnM = personas.filter(persona => persona.charAt(0) === "M");
// console.log(nombresEmpiezanEnM);

// // 11)  Transformar las siguientes funciones a ArrowFunctions y aplicar TemplateStrings cuando corresponda:
// /*  a) function despedir (nombre){
//     console.log("Adios" + nombre) }
//     b) function cobrar (monto,pago){
//     return monto - pago;}
//     console.log("Su vuelto es: " cobrar(monto,pago))
//     c) function saludar () {
//     console.log("Hola")} */

// // a) 
// let despedir = nombre => console.log(`Adios ${nombre}`)
// despedir('Alberto');

// // b) 
// const monto = 10;
// const pago = 50;

// let cobrar = (monto, pago) => pago - monto; // pago - monto(sino es vuelto negativo)
// console.log(`Su vuelto es: ${cobrar(monto, pago)}`);

// // c)
// let saludar = () => console.log(`Hola`)
// saludar();