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
