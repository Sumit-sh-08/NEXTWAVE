document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta-button");
  if (cta) {
    cta.addEventListener("click", () => {
      alert("Thank you for choosing NextWave! We'll contact you soon.");
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent successfully!");
      form.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".login");

  loginButton.addEventListener("click", function(event) {
    event.preventDefault(); // stop form from submitting
    window.location.href = "homepage/home.html"; // redirect to home page
  });
});

