document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío por defecto del formulario

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación simple
        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return;
        }

        if (!correo.includes("@")) {
            alert("Por favor ingresa un correo válido.");
            return;
        }

        // Si pasa la validación, enviamos los datos con fetch
        const datos = new FormData(form);

        fetch("https://formspree.io/f/mvgaakaw", {
            method: "POST",
            body: datos,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Formulario enviado con éxito.");
                form.reset();
            } else {
                alert("Hubo un problema al enviar el formulario.");
            }
        })
        .catch(error => {
            console.error("Ocurrió un error:", error);
            alert("Error al enviar el formulario.");
        });
    });
});


