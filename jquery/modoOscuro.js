//comprobar si el usuario esta navegando con el movil para poder quitar el  modo oscuro

window.matchMedia('(prefers-color-scheme: dark)').matches
if (navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i) && window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
        alert("Puede ser necesario desactivar el MODO OSCURO  en algunos navegadores para una mejor experiencia");
}