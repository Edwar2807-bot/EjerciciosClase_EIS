
/**
 * Devuelve un saludo personalizado para el nombre proporcionado.
 *
 * @param nombre - El nombre de la persona a saludar.
 * @returns Un saludo en formato de cadena, por ejemplo: "Hola Juan".
 */
function NombreFuncion(nombre: string): string {
  return `Hola ${nombre}`;
}

console.log(NombreFuncion('Juan'));
const result = NombreFuncion("Pedro");
console.log(result);

const sumar = (a: number, b: number): number => {
    return a + b;
}

const sumar2 = (a: number, b: number): number => a + b;

const multiplicar = (num1: number , num2: number): number => num1 * num2;

console.log(sumar(2,3));
console.log(sumar2(5,6));
console.log(multiplicar(4,5));



//////------------------------------////
interface PersonajeLOR {
    nombre: string;
    vida: number;
    mostrarDetalles: () => void;
}

const porcentajeVida = (personaje: PersonajeLOR, valor: number): number => personaje.vida += valor;

const persona1: PersonajeLOR = {
    nombre: "Gandalf",
    vida: 100,  
    mostrarDetalles() {
        console.log(`Personaje: ${this.nombre}, Vida: ${this.vida}`);
    }
}


porcentajeVida(persona1, 20);
persona1.mostrarDetalles();


/////----------------/////
//ejercicio implementar la interfaz para lo siguiente

const usuario1: Usuario = {
    id: 1,
    nombre: "Ana perez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "user"],
    direccion: {
        ciudad: "Bogota",
        pais: "Colombia"
    },
    saludar() :string {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string):void{
        this.email = nuevoEmail;
    }
};


interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: IDireccion;
    saludar: () => string;
    actualizarEmail: (nuevoEmail: string) => void;
}

interface IDireccion {
    ciudad: string;
    pais: string;
}



console.log(usuario1.saludar());
console.log(usuario1.direccion);

export {};