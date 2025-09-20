/* Crear un archivo con dos interfaces, otro archivo con una funcion 
que reciba por parametro un objeto de tipo de una interfaz y retorne un 
string con datos del objeto, y otro archivo que haga el llamado 
de la funcion*/


export interface Suma{
    numeroAS: number,
    numeroBS: number,
    operacion: string
}

export interface Resta{
    numeroAR: number,
    numeroBR: number,
    operacion: string
}

export interface Operacion{
    Resta?: Resta,
    Suma?: Suma
}