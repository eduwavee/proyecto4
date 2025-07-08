document.writeln("<hr>");
document.writeln("<h2>Ejercicio Extra 2: Nota Media de Estudiantes</h2>");


let estudiantes = [];


let continuarIngreso = true;
let numEstudiante = 1;

do {
    let nombreEstudiante = prompt(`Ingrese el nombre del estudiante #${numEstudiante} (o deje vacío para terminar el ingreso):`);

    if (!nombreEstudiante || nombreEstudiante.trim() === '') {
        continuarIngreso = false; 
        document.writeln("<p style='color: blue;'>Ingreso de estudiantes terminado.</p>");
        console.log("Ingreso de estudiantes terminado.");
        break;
    }

    nombreEstudiante = nombreEstudiante.trim(); 

    let notaValida = false;
    let notaEstudiante;
    while (!notaValida) {
        let notaInput = prompt(`Ingrese la nota de ${nombreEstudiante} (entre 0 y 10):`);
        notaEstudiante = parseFloat(notaInput);

        if (isNaN(notaEstudiante) || notaEstudiante < 0 || notaEstudiante > 10) {
            alert("¡Error! La nota debe ser un número entre 0 y 10. Por favor, reintente.");
            document.writeln(`<p style="color: red;">Error: Nota "${notaInput}" no válida para ${nombreEstudiante}. Reintentando...</p>`);
            console.warn(`Nota inválida para ${nombreEstudiante}: ${notaInput}.`);
        } else {
            notaValida = true;
        }
    }

    
    estudiantes.push({
        nombre: nombreEstudiante,
        nota: notaEstudiante
    });
    alert(`Estudiante "${nombreEstudiante}" con nota ${notaEstudiante} agregado.`);
    document.writeln(`<p style="color: green;">Estudiante "${nombreEstudiante}" agregado con nota ${notaEstudiante}.</p>`);
    console.log(`Estudiante agregado: ${nombreEstudiante} (${notaEstudiante}).`);

    numEstudiante++;
    continuarIngreso = confirm("¿Desea agregar otro estudiante?");

} while (continuarIngreso);


document.writeln("<h3>Listado de Estudiantes:</h3>");
if (estudiantes.length > 0) {
    document.writeln("<ul>");
    estudiantes.forEach(est => {
        document.writeln(`<li>Nombre: ${est.nombre}, Nota: ${est.nota}</li>`);
        console.log(`- ${est.nombre}: ${est.nota}`);
    });
    document.writeln("</ul>");
} else {
    document.writeln("<p>No se ingresaron estudiantes para calcular la media.</p>");
    console.log("No se ingresaron estudiantes.");
}



function calcularNotaMedia(arrayEstudiantes) {
    if (!arrayEstudiantes || arrayEstudiantes.length === 0) {
        console.warn("Array de estudiantes vacío. La nota media es 0.");
        return 0;
    }

    let sumaNotas = 0;
    
    arrayEstudiantes.forEach(est => {
        sumaNotas += est.nota;
    });

    return sumaNotas / arrayEstudiantes.length;
}

document.writeln("<hr>");


let notaMedia = calcularNotaMedia(estudiantes);
document.writeln(`<h3>Nota Media Calculada:</h3>`);
document.writeln(`<p>La nota media de los estudiantes es: <strong>${notaMedia.toFixed(2)}</strong></p>`); 
console.log(`Nota Media General: ${notaMedia.toFixed(2)}`);

console.log("Array de estudiantes final:", estudiantes);