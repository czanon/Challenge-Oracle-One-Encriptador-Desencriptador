//defino variable boton asociada al boton HTML
var btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function(event){
    //event.preventDefault();
    //defino variable que va a contener el contenido del input-texto
    console.log("Hice clic en ENCRIPTAR");
    var textoaEncriptar = document.querySelector("#input-texto").value;
    var arregloTexto = transformaEnArreglo(textoaEncriptar);
    var arregloEncriptado = encriptar(arregloTexto);
    var textoEncriptado = document.querySelector("#msg");
    textoEncriptado.textContent = arregloEncriptado.join("");

})

function transformaEnArreglo(inputtexto){
    var arregloTexto = Array.from(inputtexto);
    return arregloTexto;
}


function encriptar(texto){

    var textoEncriptado ="";

    var textoEncriptado = texto.replace(/e/g, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/g, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/g, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/g, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
    return textoEncriptado; 
}


        // var stringENTER = texto.replace(/e/g, "enter");
        // var stringIMES = stringENTER.replace(/i/g, "imes");
        // var stringAI = stringIMES.replace(/a/g, "ai");
        // var stringOBER = stringAI.replace(/o/g, "ober");
        // var stringUFAT = stringOBER.replace(/u/g, "ufat");
        // return stringUFAT;