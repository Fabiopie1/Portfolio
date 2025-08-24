function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Danke für deine Nachricht!");
  this.reset();
});
