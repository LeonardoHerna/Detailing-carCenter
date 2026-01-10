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

    const phoneNumber = "59897431589"; // TU NÚMERO

    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank");
});