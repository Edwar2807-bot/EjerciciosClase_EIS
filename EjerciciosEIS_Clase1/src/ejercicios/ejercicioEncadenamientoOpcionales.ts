// Ejercicio: Biblioteca Digital con Encadenamiento Opcional

interface Libro {
    titulo: string;
    autor?: {
        nombre?: string;
        pais?: string;
    };
    anioPublicacion?: number;
}

function mostrarLibro(book: Libro): void{
    console.log('titulo:', book.titulo);
    console.log('autor:', book.autor?.nombre ?? 'Autor desconocido');
    console.log('pais del autor:', book.autor?.pais ?? 'País desconocido');
    console.log('año de publicación:', book.anioPublicacion ?? 'Año no disponible');
    console.log('-------------------------');
}


const libro1: Libro = {
    titulo: 'Cien Años de Soledad',
    autor: {
        nombre: 'Gabriel García Márquez',
        pais: 'Colombia'
    },
    anioPublicacion: 1967
};

const libro2: Libro = {
    titulo: 'El Principito',
    anioPublicacion: 1943
};

const libro3: Libro = {
    titulo: 'cuentos de la selva',
    autor: {
        nombre: 'Horacio Quiroga',
        pais: 'Uruguay'
    }
};

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);
