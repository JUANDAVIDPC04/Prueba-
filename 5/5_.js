const formulario = document.getElementById("formulario");
const caja = document.getElementById("caja");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = caja.value.trim();

  if (texto !== "") {
    const item = document.createElement("li");
    item.textContent = texto;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "✕";
    btnBorrar.classList.add("btnBorrar");

    btnBorrar.addEventListener("click", function () {
      item.remove();
    });

    item.appendChild(btnBorrar);
    lista.appendChild(item);

    caja.value = "";
  }
});