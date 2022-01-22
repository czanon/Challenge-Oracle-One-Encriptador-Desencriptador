var btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(event){
    //defino la varias  variables del text-input y botones
    //y aplico desscriptación
    var textoDesencriptado = desencriptar(document.querySelector("#input-texto").value);
    var textoDesencriptadoOut = document.querySelector("#msg");
    var textoEncriptadoIn = document.querySelector("#input-texto");
    //asigno al text-input el valor de lo desencriptado
    textoDesencriptadoOut.value = textoDesencriptado;
    textoEncriptadoIn.value = "";//vacio el text-input de entrada
    event.preventDefault();
})
//función para desencriptar
function desencriptar(texto){
    var textoEncriptado = "";

    var textoEncriptado = texto.replace(/enter/g, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    return textoEncriptado;
}