for (var i=1; i<arreglo.length; i++){
    console.log(arreglo[i]); ["hola", "mundo", "como", "estas", "chao" , "como te vas"]
}

// forEach -->  no modiifica el arreglo
arreglo.array.forEach(element => {
    
});

//mao ->  modifica el arreglo
var otro = arreglo.map(elem, indice => {
    elem = elem+ " "+ indice;
    return elem;
    
})
//

console.log(otro);  ["hola", "mundo", "como", "estas"]


//reduce -->  devuelve un numero, luego de haber  operado todos los elementos del array 

var toal = numeros.reduce((acumulador, elemento)=>{
    acumulador=acumulador+elemento;
    return acumulador;
})


// metodos de arreglos

var arr =[1,2,3,4,5];
console.log(arr.pop());
console.log(arr);

var pru


//objetos Argumments 
s

