function envio(event) {
  event.preventDefault();
}
window.onload = function() {
const enviar = document.querySelector('#envia');
enviar.addEventListener('click', envio);
};

function apaga() {
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for(let i = 0; i < inputs.length; i += 1) {
    const dados = inputs[i];
    dados.value = '';
    dados.checked = false;
  }
  textArea.value = '';
}
window.onload = function() {
  const apagar = document.querySelector('#apaga');
  apagar.addEventListener('click', apaga);
  const enviar = document.querySelector('#envia');
  enviar.addEventListener('click', envio);
};
