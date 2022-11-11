console.log('peticiones.......')
//revisar si el navegador soporta el serveceworker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js') //referenciamos y registramos nuestro serviceWorker
}else{
    console.log('tu navegador no soporta serviceWorker 😥');
}