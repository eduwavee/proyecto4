class Avion {
    constructor(nombre, capacidad, destino) {
        
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            console.error("El nombre del avión no puede estar vacío.");
            this.nombre = "Avión Desconocido"; 
        } else {
            this.nombre = nombre.trim();
        }

        if (typeof capacidad !== 'number' || capacidad <= 0 || isNaN(capacidad)) {
            console.error(`La capacidad de ${this.nombre} debe ser un número positivo. Asignando 1.`);
            this.capacidad = 1; 
        } else {
            this.capacidad = capacidad;
        }

        if (typeof destino !== 'string' || destino.trim() === '') {
            console.warn(`El destino de ${this.nombre} no puede estar vacío. Asignando "Sin Destino".`);
            this.destino = "Sin Destino"; 
        } else {
            this.destino = destino.trim();
        }

        this.listaPasajeros = []; 
    }

    abordar(nombrePasajero = "Pasajero Desconocido") { 
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(nombrePasajero); 
            const msg = `[${this.nombre}] El pasajero "${nombrePasajero}" ha abordado el avión. Pasajeros: ${this.listaPasajeros.length}/${this.capacidad}.`;
            console.log(msg);
            document.writeln(`<p style="color: green;">${msg}</p>`);
        } else {
            const msg = `[${this.nombre}] ¡Avión lleno! No se puede abordar a "${nombrePasajero}". Capacidad: ${this.capacidad}, Actual: ${this.listaPasajeros.length}.`;
            console.log(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
        }
    }

    
    obtenerInfoAvion() {
        return `Nombre: ${this.nombre}, Capacidad: ${this.capacidad}, Destino: ${this.destino}, Pasajeros a bordo: ${this.listaPasajeros.length}`;
    }
}

class Aeropuerto {
    constructor(nombreAeropuerto) {
        if (typeof nombreAeropuerto !== 'string' || nombreAeropuerto.trim() === '') {
            console.error("El nombre del aeropuerto no puede estar vacío.");
            this.nombreAeropuerto = "Aeropuerto Genérico"; 
        } else {
            this.nombreAeropuerto = nombreAeropuerto.trim();
        }
        this.listaAviones = []; 
    }

    agregarAvion(avion) {
        
        if (!(avion instanceof Avion)) {
            const msg = `Error: El objeto a agregar no es un Avión válido.`;
            console.error(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            return false;
        }
        if (this.listaAviones.some(a => a.nombre.toLowerCase() === avion.nombre.toLowerCase())) {
            const msg = `El avión "${avion.nombre}" ya existe en el aeropuerto ${this.nombreAeropuerto}.`;
            console.warn(msg);
            document.writeln(`<p style="color: orange;">${msg}</p>`);
            return false;
        }

        this.listaAviones.push(avion);
        const msg = `Avión "${avion.nombre}" agregado al ${this.nombreAeropuerto}.`;
        console.log(msg);
        document.writeln(`<p style="color: green;">${msg}</p>`);
        return true;
    }

    buscarAvion(nombreAvion) {
        
        const avionEncontrado = this.listaAviones.find(avion => avion.nombre.toLowerCase() === nombreAvion.toLowerCase());
        if (avionEncontrado) {
            
            const info = `Avión encontrado: ${avionEncontrado.obtenerInfoAvion()}.`;
            console.log(info);
            document.writeln(`<p style="color: blue;">${info}</p>`);
            return avionEncontrado; 
        } else {
            const msg = `No se encontró el avión con nombre "${nombreAvion}" en ${this.nombreAeropuerto}.`;
            console.log(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            return null; 
        }
    }
}



document.writeln("<h1>Ejercicio 10: Aeropuerto y Avión (Estilo Tu Aporte)</h1>");

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional de Lules");
document.writeln(`<h2>${aeropuertoInternacional.nombreAeropuerto}</h2>`);


const avion1 = new Avion("Avianca", 2, "Bogota"); 
const avion2 = new Avion("Latam", 2, "Santiago");
const avion3 = new Avion("American Airlines", 2, "Miami");


document.writeln("<h3>Agregando aviones:</h3>");
aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

document.writeln("<hr>");


document.writeln("<h3>Buscando Avión 'Latam' y abordando:</h3>");
const latamAvion = aeropuertoInternacional.buscarAvion("Latam");

if (latamAvion) { 
    
    latamAvion.abordar("Juan");
    latamAvion.abordar("Maria");
    latamAvion.abordar("Carlos"); 
}

document.writeln("<hr>");


document.writeln("<h3>Estado final del avión 'Latam':</h3>");
aeropuertoInternacional.buscarAvion("Latam");

document.writeln("<hr>");
document.writeln("<h3>Buscando un avión que no existe:</h3>");
aeropuertoInternacional.buscarAvion("Air France"); 

console.log("\n--- Objetos Aeropuerto y Aviones en consola ---");
console.log(aeropuertoInternacional);
console.log(avion1);
console.log(avion2);
console.log(avion3);