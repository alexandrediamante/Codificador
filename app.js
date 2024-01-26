function processar(tipo) {
  var txt = document.querySelector(".imput_dados");
  var resultado = document.getElementById("resultado");
  var imagemResultado = document.getElementById("imagemResultado");
  var copyBtn = document.getElementById("copyBtn");

  var texto = txt.value;

  if (tipo === "criptografar") {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
  } else if (tipo === "descriptografar") {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
  }
  resultado.innerHTML = '<span class="estilo_resultado">' + texto + "</span>";
  imagemResultado.style.display = "none";
  resultado.style.display = "block";
  copyBtn.style.display = "block";
}

function copiarTexto() {
  var resultado = document.getElementById("resultado");
  var copyBtn = document.getElementById("copyBtn");
  var range = document.createRange();
  range.selectNode(resultado);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copyBtn.style.display = "none";
}
