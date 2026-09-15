const boton = document.getElementById("boton");
const texto = document.getElementById("texto");

boton.addEventListener("click", function () {
  texto.classList.toggle("oculto");
});