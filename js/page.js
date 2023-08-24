const botao = document.getElementById('botao');
  const mensagem = document.querySelector('.mensagem');

  botao.addEventListener('click', () => {
    if (mensagem.style.display === 'none' || mensagem.style.display === '') {
      mensagem.style.display = 'block';
    } else {
      mensagem.style.display = 'none';
    }
  });

 