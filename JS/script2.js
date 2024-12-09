// Obtén las referencias a los elementos HTML donde se mostrarán los valores
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  // Fecha de la Navidad
  const christmasDate = new Date('December 25, 2024 23:59:59').getTime();

  // Obtén la fecha actual en milisegundos
  const now = new Date().getTime();

  // Calcula la diferencia en milisegundos
  const difference = christmasDate - now;

  // Convierte la diferencia en días, horas, minutos y segundos
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Actualiza los elementos HTML con los valores calculados
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);


// Obtener la sección de la escena navideña
const christmasScene = document.querySelector('.christmas-scene');

// Agregar un evento para iniciar las animaciones cuando la página se cargue
window.addEventListener('load', () => {
  christmasScene.classList.add('animated');
});