export class Persona{
    constructor(
        public nombre: string, 
        public direccion: string) {
    }
}


const Persona1: Persona = new Persona("Edwar", "Universidad de los llanos");
console.log("Nombre: "+ Persona1.nombre +" --  Direccion: "+Persona1.direccion);


//------------------------------------------------------------------------------
export class Trabajador extends Persona{
    constructor(
        public nombre: string,
        public direccion: string,
        public cargo: string, 
        public empresa: string)
        {
            super(nombre, direccion);
    }}

const Trabajador1: Trabajador = new Trabajador("Edwar", "Universidad de los llanos", "Docente", "Unillanos");
console.log("Nombre: "+ Trabajador1.nombre +" --  Direccion: "+Trabajador1.direccion+" -- Cargo: "+Trabajador1.cargo+" -- Empresa: "+Trabajador1.empresa);
