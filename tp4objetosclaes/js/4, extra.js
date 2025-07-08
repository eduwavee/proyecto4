document.writeln("<h1>Ejercicios Extra: Notación Literal</h1>");
document.writeln("<h2>Ejercicio Extra 4: Alumno y Calificaciones (Tu estilo mejorado)</h2>");


const alumno = {
    nombre: "",
    curso: "",
    calificaciones: []
};


let nombreInput = prompt("Ingrese el nombre del alumno:");
alumno.nombre = nombreInput ? nombreInput.trim() : "Alumno Anónimo"; 

let cursoInput = prompt("Ingrese el curso del alumno:");
alumno.curso = cursoInput ? cursoInput.trim() : "Curso Desconocido"; 

document.writeln(`<h3>Datos del Alumno: ${alumno.nombre} (${alumno.curso})</h3>`);
console.log("Alumno inicial:", alumno);

document.writeln("<hr>");


function agregarCalificacion(alumnoObj, nuevaNota) {
    
    if (typeof nuevaNota === 'number' && !isNaN(nuevaNota) && nuevaNota >= 0 && nuevaNota <= 10) {
        alumnoObj.calificaciones.push(nuevaNota);
        const msg = `Calificación ${nuevaNota} añadida a ${alumnoObj.nombre}.`;
        document.writeln(`<p style="color: green;">${msg}</p>`);
        console.log(msg);
    } else {
        const msg = `Calificación "${nuevaNota}" no válida para ${alumnoObj.nombre}. Debe ser un número entre 0 y 10.`;
        document.writeln(`<p style="color: red;">${msg}</p>`);
        console.warn(msg);
    }
}


function mostrarAlumno(alumnoObj) {
    document.writeln(`<h3>Resultados Finales de ${alumnoObj.nombre}:</h3>`);

    
    let notaMasAlta;
    if (alumnoObj.calificaciones.length > 0) {
        notaMasAlta = Math.max(...alumnoObj.calificaciones);
    } else {
        notaMasAlta = "N/A"; 
        document.writeln("<p style='color: orange;'>No hay calificaciones para calcular la más alta.</p>");
        console.warn(`No hay calificaciones para ${alumnoObj.nombre}.`);
    }

    
    let clasificacion = "N/A (Sin Calificaciones)";
    if (typeof notaMasAlta === 'number') { 
        if (notaMasAlta >= 9 && notaMasAlta <= 10) {
            clasificacion = "A (Excelente)";
        } else if (notaMasAlta >= 7 && notaMasAlta <= 8) {
            clasificacion = "B (Muy Bueno)";
        } else if (notaMasAlta >= 5 && notaMasAlta <= 6) {
            clasificacion = "C (Aprobado)";
        } else if (notaMasAlta >= 0 && notaMasAlta <= 4) {
            clasificacion = "D (Insuficiente)";
        }
    }

    
    document.writeln(`<p><strong>Nombre:</strong> ${alumnoObj.nombre}</p>`);
    document.writeln(`<p><strong>Curso:</strong> ${alumnoObj.curso}</p>`);
    document.writeln(`<p><strong>Calificaciones:</strong> ${alumnoObj.calificaciones.join(", ") || "Ninguna"}</p>`);
    document.writeln(`<p><strong>Nota más alta:</strong> ${notaMasAlta}</p>`);
    document.writeln(`<p><strong>Clasificación:</strong> ${clasificacion}</p>`);

   
    console.log(`\n--- Resumen de ${alumnoObj.nombre} ---`);
    console.log(`Nombre: ${alumnoObj.nombre}`);
    console.log(`Curso: ${alumnoObj.curso}`);
    console.log(`Calificaciones: ${alumnoObj.calificaciones.join(", ") || "Ninguna"}`);
    console.log(`Nota más alta: ${notaMasAlta}`);
    console.log(`Clasificación: ${clasificacion}`);
}

document.writeln("<hr>");


let cantidadNotasStr = prompt("¿Cuántas calificaciones vas a ingresar?");
let cantidadNotas = parseInt(cantidadNotasStr);

if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
    alert("Cantidad de calificaciones no válida o cero. No se ingresarán calificaciones.");
    document.writeln("<p style='color: orange;'>No se ingresaron calificaciones válidas.</p>");
    console.warn("Cantidad de notas inválida.");
    cantidadNotas = 0; 
}

for (let i = 0; i < cantidadNotas; i++) {
    let notaInput = prompt(`Ingrese la calificación ${i + 1} (entre 0 y 10):`);
    let nota = parseFloat(notaInput);
    // La validación completa se hace dentro de agregarCalificacion
    agregarCalificacion(alumno, nota);
}

document.writeln("<hr>");

// 5. Mostrar el alumno final
mostrarAlumno(alumno);

console.log("\nObjeto 'alumno' final:", alumno);