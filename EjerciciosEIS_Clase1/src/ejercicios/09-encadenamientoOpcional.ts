export interface Pasajero {
    nombre: string;
    hijos?: string[];   
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
    hijos: ['Natalia', 'Gabriel']
}

const pasajero2: Pasajero = {
    nombre: 'ana'
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.length ?? 0;
    console.log(cantidadHijos);
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

