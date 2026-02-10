document.getElementById("hostingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const botname = document.getElementById("botname").value;
  const details = document.getElementById("details").value;

  const mail = "urkeea69@gmail.com"; // 👈 OVDE

  const subject = encodeURIComponent("Dash Hosting Request - " + botname);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nBot Name: ${botname}\n\nBot Details:\n${details}`
  );

  window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
});
