//defino variable boton asociada al boton HTML
var btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function (event) {
    
    //defino variable que va a contener el contenido del input-texto
    var textoEncriptado = encriptar(document.querySelector("#input-texto").value);
    var textoEncriptadoOut = document.querySelector("#msg");
    var textoEncriptadoIn = document.querySelector("#input-texto");
    textoEncriptadoOut.value = textoEncriptado;
    textoEncriptadoIn.value = "";
    event.preventDefault();

});

function encriptar(texto) {

    var textoEncriptado = "";
    var textoEncriptado = texto.replace(/e/g, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado;
}

