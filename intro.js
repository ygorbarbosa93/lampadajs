var quebrada = false;
function mudaLampada(tipo) {
  if (!quebrada) {
    document.getElementById("luz").src = "_imagens/" + tipo + ".jpg";
    if (tipo == "lampada-quebrada") {
      quebrada = true;
    }
  }
}
