// Carrusel 
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
    const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAswzTDiHOpXx7hSeIxRAn
DnzyReZKrVTOX346AlS2wOVwgEOSGS7Q43eXZpIKbidqvzBGM0guomGdRPDwKyaE
IZ2NncJnJYTrF9sw1HV/lsbWO+rgTXmy58sqXNzFGYsB7Roz1jODhOyEsjf8Fs5n
xM5pFaj/CaASOSK6WJxyemZgjYs6x9ONjSs0ZxnpZ7cncxB3NILOyMPH/Z7t3opg
ehdLKD4lUUoDo7uZymLpkTdm3bDHVCFyab2m/9FQyS2SOzWhSzZ3ImQDPf/AjIag
sjG3p+tAMrZawezCc7Dblij0W0vrfUYguD+P9jLgyCE/CvMNBdWFbA0d0gWWnfw+
kwIDAQAB
-----END PUBLIC KEY-----`;

    // Crear un Blob con la llave pública
    const blob = new Blob([publicKey], { type: 'text/plain' });

    // Crear un enlace temporal para la descarga
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Key_Angie.pem'; // Nombre del archivo a descargar
    a.click();

    // Liberar el objeto URL
    URL.revokeObjectURL(url);
  }
