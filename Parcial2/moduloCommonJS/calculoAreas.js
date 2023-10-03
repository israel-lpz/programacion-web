let areas = require("./areas.js");
let cowsay = require("cowsay");


let a = areas.AreaCuadrado(4)
let b = areas.AreaTringualo(4, 10)

let obj = require("./areas.js");
// Llamamos a la función 'saludar' del módulo
obj.saludar();


console.log(a, b);
// Accedemos a la variable 'numero' del módulo
console.log("El número es: " + obj.numero);

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));


// console.log(cowsay);
