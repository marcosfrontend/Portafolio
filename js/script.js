let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//esta parte es la que realixa las animaciones
const types = new Typed('.typed',{
    strings: [
        "Front-End Developer",
        "Diseñador Web",
         "UX/UI Designer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
