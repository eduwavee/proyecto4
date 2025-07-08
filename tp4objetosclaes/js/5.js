class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        
        this.edad = edad || (new Date().getFullYear() - anioNacimiento);
        
        this.dni = dni || this.generaDNI(); 
        
        
        if (sexo && (sexo.toUpperCase() === 'H' || sexo.toUpperCase() === 'M')) {
            this.sexo = sexo.toUpperCase();
        } else {
            console.warn(`[${nombre}] Sexo no válido '${sexo}'. Usando 'H' por defecto.`);
            this.sexo = 'H'; 
        }
        
        
        this.peso = (typeof peso === 'number' && peso > 0) ? peso : null;
        this.altura = (typeof altura === 'number' && altura > 0) ? altura : null;
        
        this.anioNacimiento = anioNacimiento;
    }

    
    mostrarGeneracion() {
        let generacion = "";
        let rasgoCaracteristico = "";

        
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgoCaracteristico = "Irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgoCaracteristico = "Frustración";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgoCaracteristico = "Obsesión por el éxito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgoCaracteristico = "Ambición";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation (Los niños de la posguerra)";
            rasgoCaracteristico = "Austeridad";
        } else {
            generacion = "No clasificada";
            rasgoCaracteristico = "Sin información";
        }

        
        document.writeln(`
            <p><strong>Generación:</strong> ${this.nombre} (nacido en ${this.anioNacimiento}) pertenece a la <strong>${generacion}</strong>.</p>
            <p>Su rasgo característico es la <em>${rasgoCaracteristico}</em>.</p>
        `);
        console.log(`[${this.nombre}] ${generacion}: ${rasgoCaracteristico}`);
    }

    
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.writeln(`<p>${this.nombre} es mayor de edad (tiene ${this.edad} años).</p>`);
            return true;
        } else {
            document.writeln(`<p>${this.nombre} es menor de edad (tiene ${this.edad} años).</p>`);
            return false;
        }
    }

    
    mostrarDatos() {
        document.writeln(`<h3>Datos de la Persona: ${this.nombre}</h3>`);
        document.writeln(`<p><strong>Nombre:</strong> ${this.nombre}</p>`);
        document.writeln(`<p><strong>Edad:</strong> ${this.edad} años</p>`);
        document.writeln(`<p><strong>DNI:</strong> ${this.dni}</p>`);
        document.writeln(`<p><strong>Sexo:</strong> ${this.sexo === 'H' ? 'Hombre' : 'Mujer'}</p>`);
        
        document.writeln(`<p><strong>Peso:</strong> ${this.peso !== null ? `${this.peso} kg` : 'N/A'}</p>`);
        document.writeln(`<p><strong>Altura:</strong> ${this.altura !== null ? `${this.altura} cm` : 'N/A'}</p>`);
        document.writeln(`<p><strong>Año de Nacimiento:</strong> ${this.anioNacimiento}</p>`);
        
        
        console.log(`\n--- Datos de ${this.nombre} ---`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Sexo: ${this.sexo === 'H' ? 'Hombre' : 'Mujer'}`);
        console.log(`Peso: ${this.peso !== null ? `${this.peso} kg` : 'N/A'}`);
        console.log(`Altura: ${this.altura !== null ? `${this.altura} cm` : 'N/A'}`);
        console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
    }

    
    generaDNI() {
        
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
}



document.writeln("<h1>Ejercicio 5: Clase Persona (Estilo Tu Aporte)</h1>");


const persona1 = new Persona("Mateo", 20, null, "H", 70, 1.75, 1999); 
document.writeln("<h3>--- Persona 1: Mateo ---</h3>");
persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();

document.writeln("<hr>");


const persona2 = new Persona("Elena", null, "87654321", "M", 65, 1.68, 1985); 
document.writeln("<h3>--- Persona 2: Elena ---</h3>");
persona2.mostrarDatos();
persona2.mostrarGeneracion();
persona2.esMayorDeEdad();

document.writeln("<hr>");


const persona3 = new Persona("Lucas", null, null, "H", 50, 1.60, 2010); 
document.writeln("<h3>--- Persona 3: Lucas ---</h3>");
persona3.mostrarDatos();
persona3.mostrarGeneracion();
persona3.esMayorDeEdad();

console.log("\n--- Objetos Persona completos en consola ---");
console.log(persona1);
console.log(persona2);
console.log(persona3);