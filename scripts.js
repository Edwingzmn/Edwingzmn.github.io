document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Enviar el formulario usando una solicitud AJAX o realizar alguna acción
    // Aquí puedes agregar el código para enviar los datos a un servidor
    alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
    
    // Restablecer el formulario
    document.getElementById('contactForm').reset();
});

function escribirEnPantalla(texto) {
    let arr = texto.split("");
    let i = 0;

    let intervalo = setInterval(function() {
        if (i == arr.length) {
            clearInterval(intervalo);
            document.getElementById("cursor").style.display = "none"; // Ocultar el cursor cuando el texto esté completo
        } else {
            document.getElementById("titulo").innerHTML += arr[i];
            i++;
        }
    }, 200);
}

function iniciarCursor() {
    let cursor = document.getElementById("cursor");
    setInterval(function() {
        cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 200); // Cambia la visibilidad del cursor cada 500ms
}

escribirEnPantalla("Edwin Guzmán / Ingeniero en sistemas computacionales");
iniciarCursor();

function enviarPorWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    // Construir el mensaje de WhatsApp
    const mensajeWhatsApp = `Hola, soy ${nombre}. Mi correo es ${email}. Te envío el siguiente mensaje: ${mensaje}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // Número de teléfono al que se enviará el mensaje (reemplaza con el tuyo)
    const numeroTelefono = "525513117958"; // Formato internacional: 52 para México, seguido del número de teléfono

    // Crear el enlace de WhatsApp
    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp, '_blank');
}

