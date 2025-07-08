// Ejercicio 6: Clase Libro

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        
        if (typeof numPaginas === 'number' && numPaginas > 0) {
            this.numPaginas = numPaginas;
        } else {
            console.error(`[Libro: ${titulo}] El número de páginas debe ser un número positivo. Establecido a 1 por defecto.`);
            this.numPaginas = 1; 
        }
    }

    
    getIsbn() {
        return this.isbn;
    }

    getTitulo() {
        return this.titulo;
    }

    getAutor() {
        return this.autor;
    }

    getNumPaginas() {
        return this.numPaginas;
    }

    
    setIsbn(nuevoIsbn) {
        if (nuevoIsbn && typeof nuevoIsbn === 'string' && nuevoIsbn.trim() !== '') {
            this.isbn = nuevoIsbn;
            console.log(`ISBN modificado a: ${this.isbn}`);
        } else {
            console.warn(`[Libro: ${this.titulo}] Intento de asignar ISBN inválido: '${nuevoIsbn}'. No se modificó.`);
        }
    }

    setTitulo(nuevoTitulo) {
        if (nuevoTitulo && typeof nuevoTitulo === 'string' && nuevoTitulo.trim() !== '') {
            this.titulo = nuevoTitulo;
            console.log(`Título modificado a: ${this.titulo}`);
        } else {
            console.warn(`[Libro: ${this.titulo}] Intento de asignar Título inválido: '${nuevoTitulo}'. No se modificó.`);
        }
    }

    setAutor(nuevoAutor) {
        if (nuevoAutor && typeof nuevoAutor === 'string' && nuevoAutor.trim() !== '') {
            this.autor = nuevoAutor;
            console.log(`Autor modificado a: ${this.autor}`);
        } else {
            console.warn(`[Libro: ${this.titulo}] Intento de asignar Autor inválido: '${nuevoAutor}'. No se modificó.`);
        }
    }

    setNumPaginas(nuevoNumPaginas) {
        
        if (typeof nuevoNumPaginas === 'number' && nuevoNumPaginas > 0) {
            this.numPaginas = nuevoNumPaginas;
            console.log(`Número de páginas modificado a: ${this.numPaginas}`);
        } else {
            console.warn(`[Libro: ${this.titulo}] Intento de asignar Número de Páginas inválido: '${nuevoNumPaginas}'. Debe ser un número positivo. No se modificó.`);
        }
    }

    
    mostrarLibro() {
        
        const mensaje = `El libro ${this.titulo} con ISBN ${this.isbn}, creado por el autor ${this.autor}, tiene ${this.numPaginas} páginas.`;
        document.writeln(`<p>${mensaje}</p>`);
        console.log(mensaje); 
    }
}



document.writeln("<h1>Ejercicio 6: Clase Libro (Estilo Tu Aporte)</h1>");


let libro1 = new Libro("978-987-1234567", "El Guardián entre el Centeno", "J.D. Salinger", 277);
let libro2 = new Libro("978-987-7654321", "Cien Años de Soledad", "Gabriel García Márquez", 417);


document.writeln("<h2>Información de los Libros:</h2>");
libro1.mostrarLibro();
libro2.mostrarLibro();

document.writeln("<hr>"); 
document.writeln("<h2>Comparación de Páginas:</h2>");

if (libro1.numPaginas > libro2.numPaginas) {
    document.writeln(`<p>El libro con más páginas es "${libro1.titulo}" (${libro1.numPaginas} páginas).</p>`);
} else if (libro2.numPaginas > libro1.numPaginas) {
    document.writeln(`<p>El libro con más páginas es "${libro2.titulo}" (${libro2.numPaginas} páginas).</p>`);
} else {
    document.writeln("<p>Ambos libros tienen la misma cantidad de páginas.</p>");
}


document.writeln("<hr>");
document.writeln("<h2>Prueba de Setters (revisa la consola):</h2>");
libro1.setNumPaginas(-50); 
libro2.setTitulo(null);  
console.log("\n--- Objetos Libro completos en consola ---");
console.log(libro1);
console.log(libro2);