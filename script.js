document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');

  form.addEventListener("submit", function (e) {
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
});
