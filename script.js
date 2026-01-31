 document.getElementById("quoteForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = 
      `Hola, quiero solicitar una cotización:%0A%0A` +
      `👤 Nombre: ${name}%0A` +
      `📞 Teléfono: ${phone}%0A` +
      `📧 Email: ${email}%0A` +
      `🛠 Servicio: ${service}%0A` +
      `💬 Mensaje: ${message}`;

    const phoneNumber = "59895551686"; // TU NÚMERO

    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank");
});

const video = document.querySelector('#proceso video');
const steps = document.querySelectorAll('.process-step');
const title = document.getElementById('processTitle');
const text = document.getElementById('processText');

let videoReady = false;

video.addEventListener('loadedmetadata', () => {
  videoReady = true;
});

steps.forEach(step => {
  step.addEventListener('mouseenter', () => {
    const time = Number(step.dataset.time);

    title.textContent = step.dataset.title;
    text.textContent = step.dataset.text;

    if (videoReady && Number.isFinite(time)) {
      video.pause();
      video.currentTime = Math.min(time, video.duration - 0.1);
      video.play();
    }

    steps.forEach(s => s.classList.remove('ring-2', 'ring-primary'));
    step.classList.add('ring-2', 'ring-primary');
  });
});
