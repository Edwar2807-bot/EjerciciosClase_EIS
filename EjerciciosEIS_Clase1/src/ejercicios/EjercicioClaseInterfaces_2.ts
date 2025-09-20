/* Crear un archivo con dos interfaces, otro archivo con una funcion 
que reciba por parametro un objeto de tipo de una interfaz y retorne un 
string con datos del objeto, y otro archivo que haga el llamado 
de la funcion*/

import { type Operacion } from "./EjercicioClaseInterfaces_1"

export function RealizarOperacion(object: Operacion): string{
    const {Resta} = object;
    const {Suma} = object;

    var OperacionF = Resta !== undefined ? Resta.operacion : "null";
    OperacionF = Suma !== undefined ? Suma.operacion : "null";

    if(OperacionF == "SUMA")
    {
        return ("La suma es: "+ Suma?.numeroAS+Suma?.numeroBS);
    }
    else if(OperacionF == "RESTA"){
        if (Resta && typeof Resta.numeroAR === "number" && typeof Resta.numeroBR === "number") {
            return ("La resta es:" + (Resta.numeroAR - Resta.numeroBR));
        } else {
            return "Error en operación";
        }
    }
    else{
        return "Error en operación";
    }
}