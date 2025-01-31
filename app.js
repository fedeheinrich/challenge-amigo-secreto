/* 
                                                                            Amigo secreto

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién 
es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, 
un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

*/

let amigos = [];

function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value;
    // Validar la entrada
    if(nombre === ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        // Actualizar el array de amigos
        amigos.push(nombre);
        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
    }
}

function actualizarListaAmigos(){
    // Obtener la lista
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo de amigos
    for(let i = 0; i < amigos.length; i++){
        // Crear un nuevo elemento de lista
        let item = document.createElement("li");
        item.textContent = amigos[i];
        // Agregar el elemento a la lista
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    // Validar que haya amigos disponibles
    if(amigos.length == 0){
        alert("No hay amigos para sortear.");
    }
    else{
        // Generar un índice aleatorio
        let indice = Math.floor(Math.random() * amigos.length);
        // Obtener el nombre sorteado
        let amigoSorteado = amigos[indice];
        // Mostrar el resultado
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }
}