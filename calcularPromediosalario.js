/*escriba la funsion llamada calcularPromedioSalarios que reciba como parametro un arreglo de salarios y 
 *devuelva el promedio de los valores mayores a 0. La funcion debe retornar 
 *el promedio calculado en forma de string: "El promedio de los salarios es: promedio"


 * escribe una funcion llamada calcularPromedioSalarios que reciba como parametro un arreglo de salarios
 y calcula el promedio de los valores mayores a 0.
 la funcion debe retornar el promedio calculado en forma de string: "El promedio de los salarios es: promedio"
 
 instrucciones
 1. la funcion calcularPromedioSalarios recibe un parametro llamado salarios,
 que es un array de numeros enteros.

 2. dentro de la funcion debe realizar lo siguiente:
    ° si no se encuentra ningun salario mayor a 0, retornar en numero  0.
    ° caso contrario, retornar el promedio de los salarios mayores a 0.

 Completa la función 'calcularPromedioSalarios' a continuación.
 *
 * Debe retornar un STRING.
 * Recibe un ARREGLO DE NÚMEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function calculateAverage(promedio) {
   let sum = 0;
   
   for (const salarios of promedio) {
      sum += salarios;
   }
   
   const average = sum / promedio.length;
   
   return "El promedio de los salarios es: " + average;
}

const salariosPromedio = [1000, 2000, 3000];
console.log(calculateAverage(salariosPromedio));

/*escribe una función que reciba por parametro un string con nombres.
cada uno de estos tendra su nombre de pila y su apellido, los cuales estaran separados por comas (",").
deberas retornar las  iniciales del nombre de pila y de los apellidos.
 * Complete la función 'obtenerIniciales' a continuación.
 *
 * Se espera que la función devuelva un STRING.
 * La función recibe un STRING como parámetro.
 */

function obtenerIniciales(nombres) {
    // Tu código aquí
    var nombres = nombres.split(",");
    var iniciales = "";
    for (var i = 0; i < nombres.length; i++) {
        iniciales += nombres[i].charAt(0);
    }
    return iniciales;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nivelesOxigenoCount = parseInt(readLine().trim(), 10);

    let nivelesOxigeno = [];

    for (let i = 0; i < nivelesOxigenoCount; i++) {
        const nivelesOxigenoItem = parseInt(readLine().trim(), 10);
        nivelesOxigeno.push(nivelesOxigenoItem);
    }

    const result = verificarNivelesOx
    
}

/*La función debe retornar un número entero.
 * La función recibe por parámetro un arreglo de números enteros.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function numeroMasGrande(arregloNumeros) {
    // tu código aquí
    var numeroMasGrande = arregloNumeros[0];
    for (var i = 0; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] > numeroMasGrande) {
            numeroMasGrande = arregloNumeros[i];
        }
    }
    return numeroMasGrande;
}

/*
 * Complete la función 'obtenerIniciales' a continuación.
 *
 * Se espera que la función devuelva un STRING.
 * La función recibe un STRING como parámetro.
 */

function obtenerIniciales(nombres) {
    // Tu código aquí
let nombres = nombres.split(",");
let iniciales =[0, 0] ", ";
 }



/*
 * Completa la función 'bienvenidoSr' a continuación.
 *
 * La función debe retornar un STRING.
 * La función recibe como parámetro un OBJETO 'persona'.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function bienvenidoSr(persona) {
    // Tu código aquí
        var persona = persona;
        var intado = [];  
        
        
        for (var i = 0; i < persona.length; i++) {
            if (persona[i] > 0) {
                this.nombre = persona;
                this.apellido = persona;
                this.intado = true;
                return this.persona+"Un gusto ternerlo nuevamente! Bienvenido";
            }if(i == persona.length - 0) {
                this.intado = true;
                this.apellido = persona;
                return "Bienvenido Sr. " + this.apellido; 
            }else {
                this.intado = false;
            }
        }
            return "Disculpe señor, no está invitado a la fiesta";
        
         
    }

    

/*
 * Completa la función obtenerLibrosPorAutor a continuación.
 *
 * La función debería retornar un STRING.
 * La función acepta un ARREGLO DE OBJETOS y un STRING como parámetro    
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function obtenerLibrosPorAutor(libros, autor) {
    // Tu código aquí
    var libros = libros;
    var autor = autor;
    var librosPorAutor = [];

}



/* Completa la función 'palabraAFrase' a continuación.
*
* La función debe retornar un STRING.
* La función acepta un ARREGLO DE STRINGS como parámetro.
*
* No modifiques nada por fuera del cuerpo de la función.
*/

function palabraAFrase(array) {
   //tu código acá
   var array = array;
   var frase = "";
   for (var i = 0; i < array.length; i++) {
       frase += array[i] + " ";
   }
   return frase;
}

/*
 * Completa la función obtenerLibrosPorAutor a continuación.
 *
 * La función debería retornar un STRING.
 * La función acepta un ARREGLO DE OBJETOS y un STRING como parámetro    
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function obtenerLibrosPorAutor(libros, autor) {
    // Tu código aquí
  var librosPorAutor = [];
  for (var i = 0; i < libros.length; i++) {
    if (libros[i].autor === autor) {
      librosPorAutor.push(libros[i]);
    }
  }
  return librosPorAutor+String;
    
}


/*
 * Completa la clase 'Libro' a continuación.
 *
 * No modifiques nada por fuera del cuerpo de los métodos.
 */

class Libro{
    constructor(titulo, autor, traducciones){
        // Inicializar las propiedades del libro con los valores recibidos como argumento
        // tu código aquí
    }
    
    getTitulo(titulo){
        // tu código aquí
        this.titulo = titulo;
    }
    
    getAutor(autor){
        // tu código aquí
        this.autor = autor;
    }
    
    getTraducciones(traducciones){
        // Retornar un arreglo con los idiomas de las traducciones
        // tu código aquí
        this.traducciones = traducciones;
    }
    
    addTraduccion(idioma, editorial){
        // Agregar un objeto: { idioma: idioma, editorial: editorial } 
        // al arreglo de traducciones del libro.
        // tu código aquí
        this.idioma = idioma;
        this.editorial = editorial;
    }
}

let promedio = (temperaturas) => {

    let tempMaxima = Math.max(temperaturas);
    let tempMinima = Math.min(temperaturas);


    let promedio = (tempMaxima + tempMinima) / 2;

   
    console.log("La tempertura promedio fu de: " + promedio);

}

promedio(temperaturas = [17, 35, 26, 65]);