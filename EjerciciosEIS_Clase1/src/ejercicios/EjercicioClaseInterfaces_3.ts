import {RealizarOperacion} from  "./EjercicioClaseInterfaces_2"
import {type Suma, type Operacion} from "./EjercicioClaseInterfaces_1"

const nums: Suma = {
    numeroAS: 10,
    numeroBS: 5,
    operacion: "SUMA"
}

const operacion: Operacion = {
    Suma: nums
}
console.log(RealizarOperacion(operacion));

