function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#contact-form');
const buttonSubmit = document.querySelector('#wa');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '525585441206';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    // buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let motivo = document.querySelector('#motivo').value
        let email = document.querySelector('#email').value
        let commts = document.querySelector('#comments').value
        let mensaje = 'send?phone=' + telefono + '&text=*Formulario enviado desde www.inextubasy.com.mx*%0A*¿Cuál es tu nombre?*%0A' + nombre + '%0A*Motivo del mensaje:*%0A' + motivo + '%0A*¿Cuál es tu correo electrónico?*%0A' + email + '%0A*Comentarios adicionales:*%0A' + commts + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        // buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});