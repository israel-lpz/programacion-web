export function AreaCuadrado(Lado)
{
    return  Lado*Lado;
}

/**
 * This is the main 'AreaTringualo' function where it calculates the area of a triangle.
 * @param {Number} Base - This is the base of the triangle.
 * @param {Number} altura - This is the height of the triangle.
 * @returns {Number} The area of the triangle.
 * The function works by calculating (base*height)/2.
 * It does not perform checks for invalid (such as negative) inputs.
 */

export function AreaTringualo(Base, altura){
    return ((Base*altura)/2 ); 
}

export const saludar = function() {
    console.log("Hola desde el módulo!");
}

// Exportamos una variable llamada 'numero'
export const numero = 42;
