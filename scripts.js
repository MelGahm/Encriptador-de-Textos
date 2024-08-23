function encriptar() {
    const texto = document.getElementById("inputText").value;
    
    if (!texto) {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById("inputText").value;
    
    if (!texto) {
        alert("Por favor, ingresa un texto para desencriptar.");
        return;
    }
    
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    document.getElementById("placeholderImage").style.display = "none";
    const outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";
    outputDiv.textContent = texto;
    
    document.getElementById("copyButton").style.display = "block";
    document.getElementById("copyFeedback").style.display = "none";
}

function copiarTexto() {
    const outputDiv = document.getElementById("output");
    const texto = outputDiv.textContent;

    navigator.clipboard.writeText(texto)
        .then(() => {
            const feedback = document.getElementById("copyFeedback");
            feedback.style.display = "block";
            setTimeout(() => {
                feedback.style.display = "none";
            }, 3000);  // Oculta el mensaje después de 3 segundos
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
