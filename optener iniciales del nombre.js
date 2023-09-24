var resultado = obtenerIniciales("John,Doe,Anna,Smith");
console.log(resultado); // Output: "JDAS"
function obtenerIniciales(nombres) {
  // Dividir el string en nombres individuales
  var nombresIndividuales = nombres.split(",");

  // Crear un array para almacenar las iniciales
  var iniciales = [];

  // Iterar sobre cada nombre individual
  for (var i = 0; i < nombresIndividuales.length; i++) {
    // Separar el nombre de pila y el apellido
    var nombreCompleto = nombresIndividuales[i].trim().split(" ");
    var nombrePila = nombreCompleto[0];
    var apellido = nombreCompleto[1];

    // Obtener la inicial del nombre de pila y del apellido
    var inicialNombrePila = nombrePila.charAt(0);
    var inicialApellido = apellido.charAt(0);

    // Agregar las iniciales al array
    iniciales.push(inicialNombrePila + inicialApellido);
  }

  // Devolver las iniciales como un string separado por espacios
  return iniciales.join(" ");
}
/* esta en el ejemplo de prueba */
var nombres = "Juan Perez,Ana Garcia,Pedro Sanchez";
console.log(obtenerIniciales(nombres)); // Salida: "JP AG PS"