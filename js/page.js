const botao = document.getElementById('botao');
  const mensagem = document.querySelector('.mensagem');

  botao.addEventListener('click', () => {
    if (mensagem.style.display === 'none' || mensagem.style.display === '') {
      mensagem.style.display = 'block';
    } else {
      mensagem.style.display = 'none';
    }
  });

  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;
  const intervalTime = 2000; // Intervalo de 3 segundos
  
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselPosition();
  }
  
  function updateCarouselPosition() {
    const imageWidth = images[0].width;
    const translateX = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
  }
  
  setInterval(showNextImage, intervalTime);