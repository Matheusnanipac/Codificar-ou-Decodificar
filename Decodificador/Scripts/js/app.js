document.querySelector(".btn__copiar").disabled = true;
let criptografar = "";

function btnCriptografia(){
    let criptografar = document.querySelector("#meuTexto").value;

    let substituicao = {
        'e' : "enter",
        "i" : "imes",
        "a" : "ai",
        "o" : "ober",
        "u" : "ufat",
    }

    criptografar = criptografar.replaceAll(/[eiaou]/gi, match => substituicao[match]);

    const img = document.querySelector(".figure__disabled");

       img.style.display = "none";


       document.querySelector(".resultado").innerHTML = criptografar;

       document.querySelector(".btn__copiar").disabled = false;

}



let desCriptografar = "";

function btnDescriptografia(){

    let desCriptografar = document.querySelector("#meuTexto").value;

    let decodificar = {
        "enter" : "e",
        "imes" : "i",
        "ai" : "a",
        "ober" : "o",
        "ufat" : "u",
    }

    desCriptografar = desCriptografar.replaceAll(/enter|imes|ai|ober|ufat/gi, matched => decodificar[matched]);

    document.querySelector(".resultado").innerHTML = desCriptografar;;
}

document.querySelector('.btn__copiar').addEventListener('click', copyText);

function copyText() {

    const textoCopiado = document.querySelector(".resultado").textContent;

    navigator.clipboard.writeText(textoCopiado);
}
