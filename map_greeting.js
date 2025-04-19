document.getElementById("greetingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("username").value.trim();
  const greeting = document.getElementById("greetingMessage");

  if (nameInput) {
    greeting.innerHTML = `Hello, <span style="color: #3949ab">${nameInput}</span>! Welcome to Dora’s Adventures! 🎉🌈`;
    greeting.style.animation = "fadeIn 1s ease-in-out";
  } else {
    greeting.innerHTML = "Please enter your name!";
    greeting.style.color = "#e53935";
  }
});
