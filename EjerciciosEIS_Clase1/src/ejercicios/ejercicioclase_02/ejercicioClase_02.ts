// ------   1.  Creación de la interface Comida
interface Comida {
    nombre: string
    calorias: number
    esVegana: boolean
}

// ----------------2 . objectos que implementan la interfaz
const pizza: Comida = {
    nombre: "Pizza",
    calorias: 400,
    esVegana: false
}

const ensalada: Comida = {
    nombre: "Ensalada",
    calorias: 150,
    esVegana: true
}

const hamburguesa: Comida = {
    nombre: "Hamburguesa",
    calorias: 500,
    esVegana: false
}


//-------------------3. Creación de clase -------------------

class ComidaService {

    public mostrarInfo(comida: Comida): void {
        const { nombre, calorias, esVegana } = comida;
        console.log(`La comida ${nombre} tiene ${calorias} calorías y ${esVegana ? 'es vegana' : 'no es vegana'}.`);
    }
    public modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        comida.calorias = nuevasCalorias;
        return comida;
    }
}

///_________________ 4. Clase notificadorComida___________
class NotificadorComida {
    private comidaService: ComidaService;
    constructor(comidaService: ComidaService) {
        this.comidaService = comidaService;        
    }
    public notificar(comida: Comida): void {
        console.log("Notificando comida ....:");
        this.comidaService.mostrarInfo(comida);
    }
}

//----------------5. Uso de las clases -------------------
const comidaService = new ComidaService();
const notificador = new NotificadorComida(comidaService);
notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

comidaService.modificarCalorias(pizza, 500);
notificador.notificar(pizza);
