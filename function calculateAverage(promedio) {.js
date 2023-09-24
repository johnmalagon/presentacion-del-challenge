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
