// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para realizar el sorteo.");
        return;
    }
    
    let mezclados = [...amigos];
    let resultado = [];
    let intentos = 0;
    let maxIntentos = 100;
    
    do {
        mezclados.sort(() => Math.random() - 0.5);
        resultado = amigos.map((nombre, i) => ({
            amigo: nombre,
            secreto: mezclados[i]
        }));
        intentos++;
    } while (resultado.some(pair => pair.amigo === pair.secreto) && intentos < maxIntentos);
    
    if (intentos === maxIntentos) {
        alert("No se pudo generar un sorteo válido, intenta nuevamente.");
        return;
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = `${pair.amigo} → ${pair.secreto}`;
        listaResultado.appendChild(li);
    });
}
