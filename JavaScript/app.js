function crip() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
    let copiar = document.querySelector(".copiar");
    let ajustar = document.querySelector(".subcorpo-peq");


    let textocriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocriptado;
        titulo.textContent = textocriptado;
        paragrafo.textContent = "";
        imagem.style.display = "none";
        copiar.style.display = "block";
        ajustar.classList.add("imagem");

    }
    else {
        titulo.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        imagem.style.display = "block";
        copiar.style.display = "none";
        ajustar.classList.remove("imagem");
        alert("Escreva um texto, por favor.");
    }
}

function desc() {
    let titulo = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto").value;
    let copiar = document.querySelector(".copiar");
    let ajustar = document.querySelector(".subcorpo-peq");


    let textocriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocriptado;
        titulo.textContent = textocriptado;
        paragrafo.textContent = "";
        imagem.style.display = "none";
        copiar.style.display = "block";
        ajustar.classList.add("imagem");

    }
    else {
        titulo.textContent = "Nenhuma mensagem encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        imagem.style.display = "block";
        copiar.style.display = "none";
        ajustar.classList.remove("imagem");
        alert("Escreva um texto, por favor.");
    }
}

function textoCopiar() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCopiado.value);
}