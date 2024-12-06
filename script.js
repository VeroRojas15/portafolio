// JavaScript para el carrusel de criptografía
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
});

function downloadKey() {
    // Contenido de la llave pública
    const publicKey = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkaRrzm2olpT6ad/XhM+4
    g10nIC901d6gdxefODJxGv509adWwoyLhVR3T1IoXUNx8xVf7a+6RE9b70gupp3b
    C5VWN71/HAZGygpmquBdwUhX7YBQVFqqOaGMts6yLuqkWe639tIbBzAoLVie7uCy
    zskLSOZyF09Y1+CODjCLdpIWlOuV7K8JjjM0UC0W4u34Vd/Fwry/BxhLYkjEWKTm
    4389BmQeYzecR8nTZDJmZcSGuLOjIDYUN5+FZ5dEqZxoI4iir9FtMlaXyvjf1S4j
    ioAQMct5i64Bqpt0D0XVBCk2eMNjc/J56wpRItnGMmcMIStwCduEYR6Nocu2kXJG
    rwIDAQAB`;

    // Crear un Blob con la llave pública
    const blob = new Blob([publicKey], { type: 'text/plain' });

    // Crear un enlace temporal para la descarga
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Apublic_key.txt'; // Nombre del archivo a descargar
    a.click();

    // Liberar el objeto URL
    URL.revokeObjectURL(url);
  }
