

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        
        if (typeof precio !== 'number' || precio < 0) {
            console.error("El precio debe ser un número no negativo. Establecido a 0.");
            this.precio = 0;
        } else {
            this.precio = precio;
        }
    }

    
    imprimeDatos() {
        document.writeln(`
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                <h3>Producto: ${this.nombre}</h3>
                <p><strong>Código:</strong> ${this.codigo}</p>
                <p><strong>Precio:</strong> $${this.precio.toFixed(2)}</p>
            </div>
        `);
        
        console.log(`Producto: Código=${this.codigo}, Nombre=${this.nombre}, Precio=$${this.precio.toFixed(2)}`);
    }
}


document.writeln("<h1>Ejercicio 4: Clase Producto</h1>");


const producto1 = new Producto("P001", "Laptop Gamer", 1200.50);
const producto2 = new Producto("P002", "Teclado Mecánico", 85.99);
const producto3 = new Producto("P003", "Mouse Inalámbrico", 25.00);


const listaProductos = [producto1, producto2, producto3];

document.writeln("<h2>Listado de Productos:</h2>");


listaProductos.forEach((producto, index) => {
    document.writeln(`<h3>Detalles del Producto ${index + 1}:</h3>`);
    producto.imprimeDatos();
});

console.log("\n--- Array de Productos en consola ---");
console.log(listaProductos);