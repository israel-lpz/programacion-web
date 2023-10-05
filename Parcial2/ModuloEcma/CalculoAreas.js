import * as areas from "./Areas.js";

import cowsay from "cowsay";

let a=areas.AreaCuadrado(4)

let b=areas.AreaTringualo(4 , 10)
// Llamamos a la función 'saludar' del módulo
areas.saludar();

console.log(a, b  );

// Accedemos a la variable 'numero' del módulo
console.log("El número es: " + areas.numero);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));




// console.log(cowsay);