

class Person { 
    
    Name;
    Age;
    Profession;

    constructor(nameParam, ageParam, professionParam) {
        this.Name = nameParam;
        this.Age = ageParam;
        this.Profession = professionParam;
    }

    
    getName() {
        return this.Name;
    }

    getAge() {
        return this.Age;
    }

    getProfession() {
        return this.Profession;
    }

    
    set name(newNameString) {
        if (typeof newNameString === 'string' && newNameString.trim() !== '') {
            this.Name = newNameString.trim();
        } else {
            console.warn("Ingrese un valor correcto para el nombre. No se modificó.");
            document.writeln("<p style='color: orange;'>Advertencia: Ingrese un valor correcto para el nombre.</p>");
        }
    }

    set age(ageInt) {
        
        if (typeof ageInt === 'number' && !isNaN(ageInt) && ageInt >= 0) {
            this.Age = ageInt;
        } else {
            console.warn("Ingrese un valor correcto para la edad (número positivo). No se modificó.");
            document.writeln("<p style='color: orange;'>Advertencia: Ingrese un valor correcto para la edad.</p>");
        }
    }

    set profession(professionString) {
        if (typeof professionString === 'string' && professionString.trim() !== '') {
            this.Profession = professionString.trim();
        } else {
            console.warn("Ingrese un valor correcto para la profesión. No se modificó.");
            document.writeln("<p style='color: orange;'>Advertencia: Ingrese un valor correcto para la profesión.</p>");
        }
    }

    
    saludar() {
        
        document.writeln(`<p>Hola, soy ${this.Name}, y soy ${this.Profession}. ¡Cómo te va!</p>`);
        console.log(`[${this.Name}] Saludo: Hola, soy ${this.Name}, y soy ${this.Profession}. ¡Cómo te va!`);
    }

    despedirse() {
        document.writeln(`<p>Adiós de parte de ${this.Name}. ¡Hasta luego!</p>`);
        console.log(`[${this.Name}] Despedida: Adiós de parte de ${this.Name}. ¡Hasta luego!`);
    }
}



document.writeln("<h1>Ejercicio 8: Clase Persona (Estilo Tu Aporte)</h1>");


const persona = new Person();
const persona2 = new Person();


document.writeln("<h2>Configurando Personas y Saludando:</h2>");

persona.name = "Juan"; 
persona.age = 43;      
persona.profession = "Programador"; 

persona.saludar();
persona.despedirse();

document.writeln("<hr>");

persona2.name = "Lis";
persona2.age = 29;
persona2.profession = "Doctora";

persona2.saludar();
persona2.despedirse();

document.writeln("<hr>");


document.writeln("<h2>Probando con valores inválidos (revisa la consola para advertencias):</h2>");
const personaInvalida = new Person("SinNombre", -10, "");
personaInvalida.name = null; 
personaInvalida.age = "veinte"; 
personaInvalida.profession = " "; 

personaInvalida.saludar(); 
personaInvalida.despedirse();

console.log("\n--- Objetos Persona en consola (para ver propiedades finales) ---");
console.log(persona);
console.log(persona2);
console.log(personaInvalida);