const btnCripto = document.getElementById("btn_1");
const btnDescripto = document.getElementById("btn_2");


btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);


function criptografar() {
    const text_area = document.getElementById("text_area").value;

    if (!text_area) {
        alert("Por favor, insira um texto válido!");
        return;
    }

    const regex = /[A-Z!@#$%^&*()_+\=\[\]{};':"\\|<>\/?]/;
    if (regex.test(text_area)) {
        alert ("O texto não pode ter letras maiúsculas ou caracteres especiais");
        return;
    }

    const textOrigin = text_area.toLowerCase();
    let textCript = textOrigin.replace(/[aeiouãç,.]/g, function(letras) {
        if (letras === "a") {
            return "ai";
        }
        if (letras === "e") {
            return "enter";
        }
        if (letras === "i") {
            return "imes";
        }
        if (letras === "o") {
            return "ober";
        }
        if (letras === "u") {
            return "ufat";
        }
        if (letras === "ã") {
            return "vue";
        }
        if (letras === "ç") {
            return "cece";
        }
        if (letras === ",") {
            return "x-";
        }
        if (letras === ".") {
            return "z-";
        }
        return letras;
    });
    
    revel_area.textContent = textCript;
    document.getElementById("mensage_none").style.display = "none";
    document.getElementById("camping").style.display = "none";
    document.getElementById("btn_3").style.display = "inline";
    document.getElementById("revel_area").style.display = "block";
}


function descriptografar() {
    const text_area = document.getElementById("text_area").value;

    if (!text_area) {
        alert("Por favor, insira um texto válido!");
        return;
    }

    const regex = /[A-Z!@#$%^&*()_+\=\[\]{};':"\\|<>\/?]/;
    if (regex.test(text_area)) {
        alert ("O texto não pode ter letras maiúsculas ou caracteres especiais");
        return;
    }

    const textOrigin = text_area.toLowerCase();
    let textCript = textOrigin.replace(/ai|enter|imes|ober|ufat|vue|cece|x-|z-/g, function(palavras) {
        if (palavras === "ai") {
            return "a";
        }
        if (palavras === "enter") {
            return "e";
        }
        if (palavras === "imes") {
            return "i";
        }
        if (palavras === "ober") {
            return "o";
        }
        if (palavras === "ufat") {
            return "u";
        }
        if (palavras === "vue") {
            return "ã";
        }
        if (palavras === "cece") {
            return "ç";
        }
        if (palavras === "x-") {
            return ",";
        }
        if (palavras === "z-") {
            return ".";
        }
        return palavras;
    });
    
    revel_area.textContent = textCript;
    document.getElementById("mensage_none").style.display = "none";
    document.getElementById("camping").style.display = "none";
    document.getElementById("btn_3").style.display = "inline";
    document.getElementById("revel_area").style.display = "block";


}


function copiarTexto() {
    const text_area = document.getElementById("revel_area").textContent;
  navigator.clipboard.writeText(text_area)
    .then(() => document.getElementById("transfer").style.display = "inline")  
}
