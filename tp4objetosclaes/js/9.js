class Animal {
    
    Name;
    Age;

    constructor(nameParam, ageParam) {
        this.Name = nameParam;
        this.Age = ageParam;
    }

   
    getName() {
        return this.Name;
    }

    getAge() {
        return this.Age;
    }

    
    set name(newNameString) {
        if (typeof newNameString === 'string' && newNameString.trim() !== '') {
            this.Name = newNameString.trim();
        } else {
            console.warn(`[Animal: ${this.Name}] Advertencia: Ingrese un valor correcto para el nombre. No se modificó.`);
            document.writeln("<p style='color: orange;'>Advertencia: Ingrese un valor correcto para el nombre.</p>");
        }
    }

    set age(ageInt) {
        
        if (typeof ageInt === 'number' && !isNaN(ageInt) && ageInt >= 0) {
            this.Age = ageInt;
        } else {
            console.warn(`[Animal: ${this.Name}] Advertencia: Ingrese un valor correcto para la edad (número no negativo). No se modificó.`);
            document.writeln("<p style='color: orange;'>Advertencia: Ingrese un valor correcto para la edad.</p>");
        }
    }

   
    makeSound() {
        document.writeln(`<p><strong>${this.Name}:</strong> -Sonido de animal-</p>`);
        console.log(`[Animal: ${this.Name}] -Sonido de animal-`);
    }
}

class Dog extends Animal {
    constructor(nameParam, ageParam) {
        super(nameParam, ageParam); 
    }

    
    makeSound() {
        document.writeln(`<p><strong>${this.Name} (Perro):</strong> ¡Guau Guauchr!</p>`);
        console.log(`[Perro: ${this.Name}] ¡Guau Guauchr!`);
    }
}

class Cat extends Animal {
    constructor(nameParam, ageParam) {
        super(nameParam, ageParam); 
    }

    
    makeSound() {
        document.writeln(`<p><strong>${this.Name} (Gato):</strong> ¡Miau MiauChr!</p>`);
        console.log(`[Gato: ${this.Name}] ¡Miau MiauChr!`);
    }
}



document.writeln("<h1>Ejercicio 9: Clases Animal y Herencia (Estilo Tu Aporte)</h1>");


const perro = new Dog("Poppy", 10);
const gato = new Cat("Lucy", 8);

document.writeln("<h2>Sonidos de los animales:</h2>");


perro.makeSound(); 
gato.makeSound();  

document.writeln("<hr>");


const animalGenerico = new Animal("Pajaro", 2);
animalGenerico.makeSound();

document.writeln("<hr>");


document.writeln("<h2>Probando Setters (revisa la consola):</h2>");
perro.name = ""; 
gato.age = -3;   

console.log("\n--- Objetos Animales en consola (para ver propiedades finales) ---");
console.log(perro);
console.log(gato);
console.log(animalGenerico);