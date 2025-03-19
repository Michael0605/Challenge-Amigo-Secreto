// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js

class AmigoSecreto {
    constructor() {
        this.nombres = [];
        this.listaAmigos = document.getElementById("listaAmigos");
        this.resultado = document.getElementById("resultado");
        this.input = document.getElementById("amigo");
    }

    agregarAmigo() {
        const nombre = this.input.value.trim();
        if (!this.validarNombre(nombre)) return;
        this.nombres.push(nombre);
        this.actualizarLista();
        this.input.value = "";
    }

    validarNombre(nombre) {
        /*if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return false;
        }
        return true;
    }*/
        if (!nombre.trim()) {
            alert("Por favor, ingrese un nombre válido.");
            return false;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            alert("No se permiten caracteres especiales ni números.");
            return false;
        }
        return true;
    }

    actualizarLista() {
        this.listaAmigos.innerHTML = "";
        this.nombres.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            this.listaAmigos.appendChild(li);
        });
    }

    sortearAmigo() {
        if (this.nombres.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * this.nombres.length);
        const amigoSecreto = this.nombres[indiceAleatorio];
        this.resultado.innerHTML = `<li>${amigoSecreto}</li>`;
    }
}

const juego = new AmigoSecreto();
document.querySelector(".button-add").addEventListener("click", () => juego.agregarAmigo());
document.querySelector(".button-draw").addEventListener("click", () => juego.sortearAmigo());

