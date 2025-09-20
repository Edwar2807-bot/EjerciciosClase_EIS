//Acceder a una estructura de una mejor forma par obtener los datos

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

interface Detalle{
    autor: string;
    anio: number;
}

const reproductorAudio : ReproductorAudio= {
    volumen: 0,
    duracion: 0,
    cancion: "prueba",
    detalle: {
        autor: "Edwar",
        anio: 2025
    }
}

console.log(reproductorAudio);

const personaCancion:string = reproductorAudio.cancion;
console.log(personaCancion);

//Desestructurador

const {cancion} = reproductorAudio;
console.log(cancion);

// Conseguir nombre del autor usando desestructuración anidada
const { detalle: { autor } } = reproductorAudio;
console.log(autor);

//Conseguir nombre del autor
// const {detalle} = reproductorAudio;
// const {autor} = detalle;
// console.log(autor);


//Arrays

const frutas: string[] = ["Peras", "Manzanas"];
console.log("Frutas: " + (frutas[2] || 'No se ha encontrado'));

const [,,p3] = frutas;
console.log(p3);


//  ### ----------interfaces ----------------####
export interface Producto{
    descripcion: string;
    precio: number
} 

const Celular: Producto = {
    descripcion: "Samsung",
    precio: 1000
};

const computador: Producto = {
    descripcion: "Lenovo",
    precio: 200
}

const carrito: Producto[] =[Celular , computador];
const impuesto: number = 0.19;
const propinaDef: number = 0.1;

interface ImpuestoOption{
    impuesto: number
    productos: Producto[]
    propina?: number
}

export function calcularImpuesto(Options: ImpuestoOption): number[]{
    let total: number = 0;
    Options.productos.forEach((producto: Producto) => {
        total += producto.precio;
    });
    const propina = Options.propina !== undefined ? Options.propina : 0
    return [total, total*Options.impuesto, propina*total*Options.impuesto];
}

const [totalCompra,totalImpuesto, propinaVoluntaria]: number[] = calcularImpuesto({
    impuesto,
    productos: carrito
});

console.log("Total: " + totalCompra);
console.log("Total impuesto: " + totalImpuesto)
console.log("Propina voluntaria: " + propinaVoluntaria)

const Options: ImpuestoOption = {
    impuesto,
    productos: carrito
}

const resultadoCompra: number[] = calcularImpuesto(Options);

console.log("")
