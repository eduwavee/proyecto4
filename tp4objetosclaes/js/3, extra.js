document.writeln("<h1>Ejercicios Extra: Notación Literal</h1>");
document.writeln("<h2>Ejercicio Extra 3: Libros por Género (Tu estilo mejorado)</h2>");


const libros = []; 


let cantidadStr = prompt("¿Cuántos libros quieres ingresar?");
let cantidad = parseInt(cantidadStr);

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad de libros inválida o cero. No se ingresarán libros.");
    document.writeln("<p style='color: orange;'>No se ingresaron libros válidos.</p>");
    console.warn("Cantidad de libros inválida.");
    cantidad = 0;
}

console.log("Cantidad de libros a ingresar:", cantidad);

for (let i = 0; i < cantidad; i++) {
    document.writeln(`<p><strong>Ingresando datos del Libro ${i + 1}:</strong></p>`);
    console.log(`Ingresando datos del Libro ${i + 1}:`);

    let titulo = prompt(`Libro ${i + 1} - Título:`);
    if (!titulo || titulo.trim() === '') {
        alert("El título no puede estar vacío. Se usará 'Título Desconocido'.");
        document.writeln("<p style='color: orange;'>Título no ingresado para el libro " + (i + 1) + ". Se usará 'Título Desconocido'.</p>");
        titulo = "Título Desconocido";
    } else {
        titulo = titulo.trim();
    }
    console.log("Título ingresado:", titulo);

    let autor = prompt(`Libro ${i + 1} - Autor:`);
    if (!autor || autor.trim() === '') {
        alert("El autor no puede estar vacío. Se usará 'Autor Desconocido'.");
        document.writeln("<p style='color: orange;'>Autor no ingresado para el libro " + (i + 1) + ". Se usará 'Autor Desconocido'.</p>");
        autor = "Autor Desconocido";
    } else {
        autor = autor.trim();
    }
    console.log("Autor ingresado:", autor);

   

    let genero = prompt(`Libro ${i + 1} - Género:`);
    if (!genero || genero.trim() === '') {
        alert("El género no puede estar vacío. Se usará 'Sin Género'.");
        document.writeln("<p style='color: orange;'>Género no ingresado para el libro " + (i + 1) + ". Se usará 'Sin Género'.</p>");
        genero = "Sin Género";
    } else {
        genero = genero.trim();
    }
    console.log("Género ingresado:", genero);

    
    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        
        genero: genero
    };

    console.log("Objeto libro creado:", nuevoLibro);
    libros.push(nuevoLibro); 
    console.log("Array de libros hasta ahora:", libros);
}

document.writeln("<hr>");
document.writeln("<h3>Listado de libros ingresados:</h3>");
if (libros.length > 0) {
    document.writeln("<ul>");
    libros.forEach(libro => {
        document.writeln(`<li><strong>${libro.titulo}</strong> por ${libro.autor} (Género: ${libro.genero})</li>`);
    });
    document.writeln("</ul>");
} else {
    document.writeln("<p>No hay libros para mostrar.</p>");
}
console.log("Todos los libros ingresados:", libros);



function filtrarLibrosPorGenero(librosArray, generoBuscado) {
    console.log("\nFiltrando libros por género...");
    console.log("Género buscado:", generoBuscado);

    
    const resultadoFiltrado = librosArray.filter(libro => {
        
        return libro.genero && libro.genero.toLowerCase() === generoBuscado.toLowerCase();
    });

    console.log("Libros que coinciden con el género buscado:", resultadoFiltrado);
    return resultadoFiltrado;
}

document.writeln("<hr>");


let generoBuscadoInput = prompt("¿Qué género quieres buscar?");
let generoNormalizado = generoBuscadoInput ? generoBuscadoInput.trim() : ""; 
console.log("Género ingresado para búsqueda:", generoNormalizado);

if (!generoNormalizado) {
    alert("No se ingresó un género para buscar. No se realizará el filtro.");
    document.writeln("<p style='color: orange;'>No se ingresó un género para buscar.</p>");
    console.warn("Búsqueda de género cancelada.");
} else {
    
    let resultado = filtrarLibrosPorGenero(libros, generoNormalizado);

    document.writeln(`<h3>Libros encontrados del género "${generoNormalizado}":</h3>`);

    if (resultado.length === 0) {
        document.writeln(`<p>No se encontraron libros de ese género.</p>`);
    } else {
        document.writeln("<ul>"); 
        resultado.forEach((libro, index) => {
            document.writeln(`<li>
                <strong>Título:</strong> ${libro.titulo}<br>
                <strong>Autor:</strong> ${libro.autor}<br>
                <strong>Género:</strong> ${libro.genero}<br>
            </li>`);
        });
        document.writeln("</ul>");
    }
}

console.log("\nEstado final de 'libros':", libros);