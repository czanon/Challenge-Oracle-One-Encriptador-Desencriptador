var btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoDesencriptar = document.querySelector("#input-texto").value;
    var textoDesencriptado = desencriptar(textoDesencriptar);
    var textoEncriptado = document.querySelector("#msg");
    textoEncriptado.textContent = textoDesencriptado;
})

function desencriptar(string){
    var stringE = string.replace(/enter/g, "e");
    var stringI = stringE.replace(/imes/g, "i");
    var stringA = stringI.replace(/ai/g, "a");
    var stringO = stringA.replace(/ober/g, "o");
    var stringU = stringO.replace(/ufat/g, "u");
    return stringU;
}