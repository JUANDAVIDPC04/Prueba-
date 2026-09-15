let contador = 0;

const boton = document.getElementById('btnContador');
const textoContador = document.getElementById('textoContador');

boton.addEventListener('click', () => {
  contador++;
  textoContador.textContent = contador;
});