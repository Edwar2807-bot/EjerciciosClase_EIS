interface contenidoCaja<T>{
    contenido: T;
}

const Comida = {
    tipo: 'Carne',
    porcion: 500
}

function CrearCaja<T>(content: T): contenidoCaja<T>{
    return {contenido: content}
}    

const ejemploNum = CrearCaja(223);
const ejemploString = CrearCaja('Hola');
const ejemploObjeto = CrearCaja(Comida);

console.log(ejemploNum);
console.log(ejemploString);
console.log(ejemploObjeto);

