/*2. Control  de Oxigeno en la nave

Descripcion de la Funcion:
La funcion verificarNivelesOxigeno recibe como parametros 
un arreglo de numeros llamado niveles, que representan
los niveles de oxigeno en diferentes areas de una nave espacial.

Instrucciones:
La funcion debe relizar las siguientes operaciones:
    1. Verificar si algún nivel de oxigeno en el arreglo es igual
    o menor a 0. Si se encuentra un nivel critico, la funcion debe
    activar la alarma de emergencia y devolver el mensaje:"¡Alerta de emergencia! Nivel
    de oxigeno critico detectado en el ärea X",
    donde X es el indice del área con el nivel de oxigeno critico.

    2. Si algún novel de oxigeno en el array es  menor o igual a 5, la funcion debe devolver
    el mensaje:"Nivel de oxigeno bajo detectado en el área X", donde X es el indice del area
     con el nivel de oxigeno bajo.

    3. Si todos los niveles de oxigeno son superiores a 5,
    la funcion debe devolver el mensaje:"todos los niveles de oxigeno son estables".

*/
/* completa la funcion "verificarNivelesOxigeno" a continuación.

* Debe retormar un STRING.
* Recibe un ARREGLO DE NÚMEROS como parámetro.
*
* No modifiques nada por fuera del cuerpo de la función.   
*/
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nivelesOxigenoCount = parseInt(readLine().trim(), 10);



def verificarNivelesOxigeno(niveles):

    for i, nivel in enumerate(niveles):
        if nivel <= 0:
            return "¡Alerta de emergencia! Nivel de oxigeno critico detectado en el área " + str(i)
        elif nivel <= 5:
            return "Nivel de oxigeno bajo detectado en el área " + str(i)
    
    return "Todos los niveles de oxigeno son estables"
