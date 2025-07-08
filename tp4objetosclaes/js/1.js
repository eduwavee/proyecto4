const auto = {
    color: "Azul",
    marca: "Volkswagen",
    modelo: "Amarok 2022",
    encendido: false, 

    on_off: function () {
        if (confirm("¿Querés encender el auto?\nPresioná ACEPTAR para encender o CANCELAR para apagar.")) {
            this.encendido = true; 
            document.writeln("El auto está encendido.");
        } else {
            this.encendido = false; 
            document.writeln("El auto está apagado.");
        }
    }
};

auto.on_off();
console.log(auto);

document.writeln("<h1>Auto</h1>");
document.writeln("Auto.color " + "<br>"); // Esto no muestra el valor
document.writeln("Auto.marca " + "<br>"); // Esto no muestra el valor
document.writeln("Auto.modelo " + "<br>"); // Esto no muestra el valor
document.writeln("Auto.encendido " + "<br>"); // Esto no muestra el valor