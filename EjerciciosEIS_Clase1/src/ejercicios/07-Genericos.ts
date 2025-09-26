export 

function verTipo<T>(argumento: T): T {
    return argumento;
}

let prueba: string = verTipo("Gol");
const prueba2: any = verTipo('Hola');

console.log(prueba.toUpperCase());

//------------------------------------------------------------------

interface Mamiferos{
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: 'bovino',
    genero: 'hembra',
    edad: 5
}

let mamifero = verTipo(vaca);
console.log(mamifero.edad);