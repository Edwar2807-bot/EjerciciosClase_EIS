let arreglo: (string | number | boolean)[] = ["Hola", 42, true, "Mundo", 3.14, false];
let arreglo2: string[] = ["Hola", "Mundo"];

const persona: PersonaInterface = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
  hobbies: ["leer", "viajar", "programar"],
};

interface PersonaInterface {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
    hobbies: string[];
}


console.log(persona);
export {};