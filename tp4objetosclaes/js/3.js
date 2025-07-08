

class Rectangulo {
    constructor(alto, ancho) {
        
        if (typeof alto !== 'number' || alto <= 0) {
            console.error("El alto debe ser un número positivo.");
            this.alto = 1; 
        } else {
            this.alto = alto;
        }

        if (typeof ancho !== 'number' || ancho <= 0) {
            console.error("El ancho debe ser un número positivo.");
            this.ancho = 1; 
        } else {
            this.ancho = ancho;
        }
    }

    
    setAlto(nuevoAlto) {
        if (typeof nuevoAlto === 'number' && nuevoAlto > 0) {
            this.alto = nuevoAlto;
            console.log(`Alto modificado a: ${this.alto}`);
        } else {
            console.warn("El alto debe ser un número positivo para modificar.");
        }
    }

    setAncho(nuevoAncho) {
        if (typeof nuevoAncho === 'number' && nuevoAncho > 0) {
            this.ancho = nuevoAncho;
            console.log(`Ancho modificado a: ${this.ancho}`);
        } else {
            console.warn("El ancho debe ser un número positivo para modificar.");
        }
    }

    // Métodos para mostrar propiedades (Getters y un método combinado)
    getAlto() {
        return this.alto;
    }

    getAncho() {
        return this.ancho;
    }

    mostrarPropiedades() {
        return `Alto: ${this.alto}, Ancho: ${this.ancho}`;
    }

    // Métodos para calcular perímetro y área
    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }
}



document.writeln("<h1>Ejercicio 3: Clase Rectangulo</h1>");


const miRectangulo = new Rectangulo(10, 5);
document.writeln("<h2>Rectángulo Inicial:</h2>");
document.writeln(`<p>${miRectangulo.mostrarPropiedades()}</p>`);
document.writeln(`<p>Perímetro: ${miRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>Área: ${miRectangulo.calcularArea()}</p>`);

document.writeln("<hr>");


document.writeln("<h2>Rectángulo Modificado:</h2>");
miRectangulo.setAlto(12);
miRectangulo.setAncho(6);

document.writeln(`<p>${miRectangulo.mostrarPropiedades()}</p>`);
document.writeln(`<p>Perímetro: ${miRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>Área: ${miRectangulo.calcularArea()}</p>`);

document.writeln("<hr>");


document.writeln("<h2>Intentando modificar con valores inválidos:</h2>");
miRectangulo.setAlto(-5); 
miRectangulo.setAncho(0);  

document.writeln(`<p>Propiedades actuales (sin cambios por valores inválidos): ${miRectangulo.mostrarPropiedades()}</p>`);

console.log("\n--- Objeto Rectangulo en consola ---");
console.log(miRectangulo);