const email = document.getElementById('email');
const senha = document.getElementById('senha');

function emailSenha(event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const logar = document.getElementById('button');
logar.addEventListener('click', emailSenha);
