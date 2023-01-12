console.log("MDFK");

var numConect = 5;
console.log("Estado de la cadena de numeros es:"+numConect);

numConect = 12.7,
console.log("Actualizacoin de la cadena de numero es:"+numConect);

console.log("Cierre de aplicacion");

// condicionales

// let num = 7;
// let name=  "Neo"

// if (num < 8) {
//     console.log(true)
// }else{
//     console.log(false)
// }

// let num2 = 0;
// if (num < 7 || name == "Neo") {
//     console.log(true)
// }else if(num2 == 0){
//     console.log("sin comentarios")
// }else{
//     console.log("error")
// }

//Bucle

// let cont = 0;
// while(cont < 3){
//     console.log(cont);
//     cont = cont + 1;
// }

for(let i = 0; i < 10; i = i +1){
    console.log(i);
}

//funcion
hola("camilo")
function hola(name){
    console.log("el joven "+ name+" es spam") 
}

function multiplicar(num, num2){
    let result =num * num2;
    return result;
}

console.log(multiplicar(2,10));

//array

let firstArray= ["Camilo", "Luz", "Daniel", "Ivan"]
 for(let i = 0; i <4; i++){
    let name = firstArray[i];
    console.log("Acceso al inice=> "+ i);
    console.log(name);
 }

//objetos

let persona ={
    nombre : "Luz",
    edad: 19,
    masculino: false,
}

let persona2 = {
    nombre: "Daniel",
    edad: 13,
    masculino: true,
}

console.log(persona);

persona.femenino = true;

console.log(persona);

console.log(persona2);