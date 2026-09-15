const cajita = document.getElementById("cajita");

// Evento cuando el mouse ENTRA a la caja
cajita.addEventListener("mouseenter", function () {
  cajita.style.backgroundColor = "#dbeafe"; // Cambia a un color azul claro
});

// Evento cuando el mouse SALE de la caja
cajita.addEventListener("mouseleave", function () {
  cajita.style.backgroundColor = "#f3f6fa"; // Vuelve al color original
});