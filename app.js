const form = document.querySelector("#contacto form");
const message = document.querySelector("#mensaje");
const counter = document.querySelector("#contador");
const status = document.querySelector("#estado-formulario");

message.addEventListener("input", () => {
    counter.textContent = message.value.length;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    status.textContent = "Formulario validado. Para recibir mensajes, conecta este formulario a un servicio de envío.";
});

form.addEventListener("input", () => {
    status.textContent = "";
});
