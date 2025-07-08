class Contacto {
    constructor(nombre, telefono) {
        
        if (!nombre || nombre.trim() === '') {
            throw new Error("El nombre del contacto no puede estar vacío.");
        }
        if (!telefono || telefono.trim() === '') {
            throw new Error("El teléfono del contacto no puede estar vacío.");
        }
        this.nombre = nombre.trim();
        this.telefono = telefono.trim();
    }

    
    getNombre() {
        return this.nombre;
    }

    
    getTelefono() {
        return this.telefono;
    }

    
    equals(otroContacto) {
        if (!otroContacto || typeof otroContacto.getNombre !== 'function') {
            return false; 
        }
        return this.nombre.toLowerCase() === otroContacto.getNombre().toLowerCase();
    }

    
    toString() {
        return `Nombre: ${this.nombre}, Teléfono: ${this.telefono}`;
    }
}

// Clase Agenda
class Agenda {
    constructor(tamanio = 10) { 
        this.contactos = [];
        this.tamanioMaximo = tamanio; 
    }

    
    aniadirContacto(Contacto) { 
        
        if (this.existeContacto(Contacto)) {
            const msg = `El contacto "${Contacto.getNombre()}" ya existe en la agenda. No se añadió.`;
            alert(msg);
            document.writeln(`<p style="color: orange;">${msg}</p>`);
            console.warn(msg);
            return false;
        }

        
        if (this.agendaLlena()) {
            const msg = `La agenda está llena. No se puede añadir a "${Contacto.getNombre()}".`;
            alert(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            console.warn(msg);
            return false;
        }

        
        this.contactos.push(Contacto);
        const msg = `Contacto "${Contacto.getNombre()}" añadido con éxito.`;
        alert(msg);
        document.writeln(`<p style="color: green;">${msg}</p>`);
        console.log(msg);
        return true;
    }

    
    existeContacto(contactoAComprobar) {
        return this.contactos.some(c => c.equals(contactoAComprobar));
    }

    
    listarContactos() {
        document.writeln("<h2>Listado de Contactos:</h2>");
        if (this.contactos.length === 0) {
            const msg = "La agenda está vacía.";
            document.writeln(`<p>${msg}</p>`);
            console.log(msg);
        } else {
            document.writeln("<ul>");
            this.contactos.forEach(c => {
                document.writeln(`<li>${c.toString()}</li>`); 
                console.log(c.toString());
            });
            document.writeln("</ul>");
        }
    }

    
    buscarContacto(nombre) {
        
        const contactoEncontrado = this.contactos.find(c => c.getNombre().toLowerCase() === nombre.toLowerCase());
        if (contactoEncontrado) {
            const msg = `Contacto encontrado: Nombre: ${contactoEncontrado.getNombre()}, Teléfono: ${contactoEncontrado.getTelefono()}`;
            alert(msg);
            document.writeln(`<p style="color: blue;">${msg}</p>`);
            console.log(msg);
            return contactoEncontrado;
        } else {
            const msg = `El contacto "${nombre}" no se encontró en la agenda.`;
            alert(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            console.warn(msg);
            return null;
        }
    }

    
    eliminarContacto(contactoAEliminar) {
        
        const index = this.contactos.findIndex(c => c.equals(contactoAEliminar));
        if (index !== -1) {
            const nombreEliminado = this.contactos[index].getNombre();
            this.contactos.splice(index, 1); 
            const msg = `Contacto "${nombreEliminado}" eliminado con éxito.`;
            alert(msg);
            document.writeln(`<p style="color: green;">${msg}</p>`);
            console.log(msg);
            return true;
        } else {
            const msg = `El contacto "${contactoAEliminar.getNombre()}" no se encontró para eliminar.`;
            alert(msg);
            document.writeln(`<p style="color: red;">${msg}</p>`);
            console.warn(msg);
            return false;
        }
    }

    
    agendaLlena() {
        return this.contactos.length >= this.tamanioMaximo;
    }

    
    huecosLibres() {
        return this.tamanioMaximo - this.contactos.length;
    }
}



document.writeln("<h1>Ejercicio 7: Agenda Telefónica</h1>");

let miAgenda;

let tamanoInput = prompt("Ingrese el tamaño máximo de la agenda (deje vacío para 10 por defecto):");
let tamanoAgenda = parseInt(tamanoInput);

if (isNaN(tamanoAgenda) || tamanoAgenda <= 0) {
    miAgenda = new Agenda(); 
    document.writeln(`<p>Agenda creada con tamaño por defecto: ${miAgenda.tamanioMaximo} contactos.</p>`);
} else {
    miAgenda = new Agenda(tamanoAgenda);
    document.writeln(`<p>Agenda creada con tamaño máximo: ${miAgenda.tamanioMaximo} contactos.</p>`);
}


let opcion;
do {
    opcion = prompt(
        `--- MENÚ DE AGENDA ---
        1- Añadir contacto
        2- ¿Existe contacto?
        3- Listar contactos
        4- Buscar contacto
        5- Eliminar contacto
        6- ¿Agenda llena?
        7- Huecos libres
        8- Salir
        
        Ingrese el número de la opción deseada:`
    );

    
    switch (opcion) {
        case "1":
            try {
                let nombre = prompt("Ingrese el nombre del contacto a añadir:");
                let telefono = prompt("Ingrese el teléfono del contacto a añadir:");
                let nuevoContacto = new Contacto(nombre, telefono);
                miAgenda.aniadirContacto(nuevoContacto);
            } catch (error) {
                alert(`Error al añadir contacto: ${error.message}`);
                document.writeln(`<p style="color: red;">Error: ${error.message}</p>`);
                console.error(error);
            }
            break;

        case "2": 
            try {
                let nombreBuscar = prompt("Ingrese el nombre del contacto para verificar si existe:");
                
                let tempContacto = new Contacto(nombreBuscar, "0"); 
                if (miAgenda.existeContacto(tempContacto)) {
                    alert(`El contacto "${nombreBuscar}" SÍ existe en la agenda.`);
                    document.writeln(`<p>El contacto "${nombreBuscar}" <strong style="color: blue;">SÍ</strong> existe en la agenda.</p>`);
                } else {
                    alert(`El contacto "${nombreBuscar}" NO existe en la agenda.`);
                    document.writeln(`<p>El contacto "${nombreBuscar}" <strong style="color: red;">NO</strong> existe en la agenda.</p>`);
                }
            } catch (error) {
                alert(`Error al verificar contacto: ${error.message}`);
                document.writeln(`<p style="color: red;">Error: ${error.message}</p>`);
                console.error(error);
            }
            break;

        case "3": 
            miAgenda.listarContactos();
            break;

        case "4": 
            let nombreBuscarTelefono = prompt("Ingrese el nombre del contacto para buscar su teléfono:");
            if (nombreBuscarTelefono && nombreBuscarTelefono.trim() !== '') {
                miAgenda.buscarContacto(nombreBuscarTelefono);
            } else {
                alert("El nombre no puede estar vacío para buscar.");
                document.writeln("<p style='color: red;'>El nombre no puede estar vacío para buscar.</p>");
            }
            break;

        case "5": // Eliminar contacto
            try {
                let nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
                
                let contactoParaEliminar = new Contacto(nombreEliminar, "0"); 
                miAgenda.eliminarContacto(contactoParaEliminar);
            } catch (error) {
                alert(`Error al eliminar contacto: ${error.message}`);
                document.writeln(`<p style="color: red;">Error: ${error.message}</p>`);
                console.error(error);
            }
            break;

        case "6": 
            if (miAgenda.agendaLlena()) {
                alert("La agenda está LLENA.");
                document.writeln(`<p style="color: red;">La agenda está LLENA (${miAgenda.contactos.length}/${miAgenda.tamanioMaximo}).</p>`);
            } else {
                alert("La agenda NO está llena.");
                document.writeln(`<p style="color: green;">La agenda NO está llena (${miAgenda.contactos.length}/${miAgenda.tamanioMaximo}).</p>`);
            }
            break;

        case "7": 
            let huecos = miAgenda.huecosLibres();
            alert(`Quedan ${huecos} huecos libres en la agenda.`);
            document.writeln(`<p>Quedan <strong style="color: blue;">${huecos}</strong> huecos libres en la agenda.</p>`);
            break;

        case "8": 
            alert("Saliendo de la agenda. ¡Hasta luego!");
            document.writeln("<p>Fin de la demostración de la Agenda.</p>");
            console.log("Fin del programa.");
            break;

        default:
            alert("Opción no válida. Por favor, intente de nuevo.");
            document.writeln("<p style='color: red;'>Opción no válida.</p>");
            break;
    }
    
    document.writeln("<hr>");

} while (opcion !== "8");