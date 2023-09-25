function verificarNivelesOxigeno(niveles) {
  for (let i = 0; i < niveles.length; i++) {
    if (niveles[i] <= 0) {
      return `¡Alerta de emergencia! Nivel de oxigeno critico detectado en el área ${i}`;
    } else if (niveles[i] <= 5) {
      return `Nivel de oxigeno bajo detectado en el área ${i}`;
    }
  }
  return "todos los niveles de oxigeno son estables";
}

console.log(verificarNivelesOxigeno([10, 3, 7, 8]));
