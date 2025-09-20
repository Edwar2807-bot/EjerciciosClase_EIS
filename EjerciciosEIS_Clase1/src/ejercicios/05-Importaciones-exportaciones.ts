import {type Producto, calcularImpuesto} from './04-desestructurador'

const carrito: Producto[] = [
    {
        descripcion: 'Carro',
        precio: 1020
    },
    {
        descripcion: 'Moto',
        precio: 200
    }
];


const [total, totalImpuesto] = calcularImpuesto({
    impuesto: 100,
    productos: carrito,
    propina: 0
});

console.log("Ejercicio 5 - Importaciones Exportaciones");
console.log("Total: " + total + " Total Impuesto: " + totalImpuesto);




