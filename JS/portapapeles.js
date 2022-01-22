//creo variable referiendome al boton HTML copiar
var btnCopiar = document.querySelector("#btn-copy")

//agrego gestión de evento a boton copiar con fun. anonima
btnCopiar.addEventListener("click",function(event){
    
    event.preventDefault();
    copiaAPortapapeles(); //llamo funcion de copia PortaPapeles
    // como retardar ejecución de una función 
    //https://www.sitepoint.com/delay-sleep-pause-wait/
    setTimeout(()=>{limpiezaMsgOut();},1500);
});


//https://www.delftstack.com/es/howto/javascript/javascript-copy-to-clipboard/

function copiaAPortapapeles() {

    var contenidoMsg = document.getElementById("msg");
    contenidoMsg.select();
    document.execCommand("copy");
}

function limpiezaMsgOut(){
    var mensajeENCDESOut = document.querySelector("#msg");
    mensajeENCDESOut.value = "";//pongo valor de la input-text en cadena vacia (eso limpia la pantalla..)
}




