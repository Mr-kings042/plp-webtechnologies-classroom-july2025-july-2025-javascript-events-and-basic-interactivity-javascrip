// ===========================
// Part 1: Event Listeners
// ===========================
const clickBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "Button clicked! 🎉";
});

clickBtn.addEventListener("mouseover", () => {
  message.textContent = "You're hovering over the button 👀";
});

document.addEventListener("keydown", (event) => {
  message.textContent = `You pressed the key: ${event.key}`;
});

// ===========================
// Part 2: Interactive Features
// ===========================

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// ===========================
// Part 3: Form Validation
// ===========================
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page refresh

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required!";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email!";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 characters)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters!";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset(); // clear form
  } else {
    formSuccess.textContent = "";
  }
});
