document.writeln("<h1>Ejercicios Extra: Notación Literal</h1>");
document.writeln("<h2>Ejercicio Extra 1: Persona con Hobbies (Tu estilo mejorado)</h2>");


const persona = {
    nombre: "",
    edad: 0,
    hobbies: [], 

    
    recibir_datos: function(nombreParam, edadParam, hobbiesParam) {
        
        if (typeof nombreParam === 'string' && nombreParam.trim() !== '') {
            this.nombre = nombreParam.trim();
        } else {
            console.warn("Nombre inválido. Usando 'Anónimo'.");
            this.nombre = "Anónimo";
        }

        if (typeof edadParam === 'number' && !isNaN(edadParam) && edadParam >= 0) {
            this.edad = edadParam;
        } else {
            console.warn("Edad inválida. Usando '0'.");
            this.edad = 0;
        }

        if (Array.isArray(hobbiesParam)) {
            
            this.hobbies = hobbiesParam.map(h => String(h).trim()).filter(h => h !== '');
        } else {
            console.warn("Hobbies iniciales no válidos. Inicializando como array vacío.");
            this.hobbies = [];
        }
        console.log(`[${this.nombre}] Datos iniciales recibidos.`);
    },

    
    agregar_hobby: function(nuevoHobby) {
        if (typeof nuevoHobby === 'string' && nuevoHobby.trim() !== '') {
            this.hobbies.push(nuevoHobby.trim());
            const msg = `Se añadió "${nuevoHobby.trim()}" a los hobbies de ${this.nombre}.`;
            alert(msg);
            document.writeln(`<p style="color: green;">${msg}</p>`);
            console.log(msg);
        } else {
            const msg = `El hobby a añadir no es válido. No se añadió.`;
            alert(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            console.warn(msg);
        }
    },

    
    mostrar_hobbies: function() {
        document.writeln(`<h3>Hobbies de ${this.nombre}:</h3>`);
        if (this.hobbies.length > 0) {
            document.writeln("<ul>"); 
            for (let i = 0; i < this.hobbies.length; i++) {
                document.writeln(`<li>${this.hobbies[i]}</li>`);
            }
            document.writeln("</ul>");
        } else {
            document.writeln("<p>No tiene hobbies registrados.</p>");
        }
        console.log(`Hobbies mostrados en la página para ${this.nombre}.`);
    },

    
    mostrar_todo_console: function() {
        console.log(`--- Datos Completos de ${this.nombre} ---`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Hobbies:`);
        if (this.hobbies.length > 0) {
            for (let i = 0; i < this.hobbies.length; i++) {
                console.log(`- ${this.hobbies[i]}`);
            }
        } else {
            console.log("- Ninguno");
        }
    }
};




let nombre = prompt("Ingrese el nombre de la persona:");
if (!nombre) { 
    nombre = ""; 
}

// Pedir edad
let edadInput = prompt("Ingrese la edad de la persona:");
let edad = parseInt(edadInput);
if (isNaN(edad)) { 
    edad = 0; 
}


let cantidadHobbiesStr = prompt("¿Cuántos hobbies iniciales quieres ingresar?");
let cantidadHobbies = parseInt(cantidadHobbiesStr);
let hobbiesArray = [];

if (!isNaN(cantidadHobbies) && cantidadHobbies > 0) {
    for (let i = 0; i < cantidadHobbies; i++) {
        let hob = prompt(`Ingrese el hobby #${i + 1}:`);
        if (hob) { 
            hobbiesArray.push(hob);
        }
    }
} else {
    alert("Cantidad de hobbies iniciales no válida o 0. No se agregarán hobbies iniciales.");
    document.writeln("<p style='color: orange;'>No se agregaron hobbies iniciales.</p>");
}


persona.recibir_datos(nombre, edad, hobbiesArray);

document.writeln("<hr>");


document.writeln("<h3>Datos iniciales de la persona:</h3>");
document.writeln(`<p><strong>Nombre:</strong> ${persona.nombre}</p>`);
document.writeln(`<p><strong>Edad:</strong> ${persona.edad}</p>`);
persona.mostrar_hobbies(); 
persona.mostrar_todo_console(); 

document.writeln("<hr>");


let continuar;
do {
    let nuevoHobby = prompt("Ingrese un nuevo hobby para añadir (o deje vacío y pulse Cancelar para terminar):");
    if (nuevoHobby === null) { 
        continuar = false;
        alert("Operación de añadir hobbies cancelada.");
        document.writeln("<p>Operación de añadir hobbies cancelada.</p>");
    } else if (nuevoHobby.trim() === '') {
        alert("El hobby no puede estar vacío. Por favor, ingrese un valor o cancele.");
        continuar = true; 
    }
    else {
        persona.agregar_hobby(nuevoHobby);
        continuar = confirm("¿Querés agregar otro hobby?");
    }
} while (continuar);

document.writeln("<hr>");


document.writeln("<h2>Estado Final de la Persona:</h2>");
persona.mostrar_hobbies();
persona.mostrar_todo_console();

console.log("\nObjeto 'persona' final:", persona);