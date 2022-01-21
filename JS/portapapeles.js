//creo variable referiendome al boton HTML copiar
var btnCopiar = document.querySelector("#btn-copy")

//agrego gestión de evento a boton copiar con fun. anonima
btnCopiar.addEventListener("click",function(event){
    event.preventDefault();
    copiaAPortapapeles(); //llamo funcion de copia PortaPapeles

});


//https://www.delftstack.com/es/howto/javascript/javascript-copy-to-clipboard/

function copiaAPortapapeles() {

    // var msgEnClaro = document.getElementById("msg");
    // var leePortapapeles = navigator.clipboard.readText();
    // var escribePortapapeles = navigator.clipboard.writeText();

    //document.getElementById('textArea');
    var contenidoMsg = document.getElementById("msg");
    
    contenidoMsg.select();
    document.execCommand("copy");
    //alert("copiado!")

}




//https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API