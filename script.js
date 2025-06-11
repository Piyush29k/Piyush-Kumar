const roles = [
  "Software Engineer.",
  "Web Developer.",
  "Full Stack Developer.",
  "UI/UX Designer.",
  "Problem Solver."
];

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseAfterTyping = 3000;
const pauseAfterDeleting = 500;

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function type() {
  const currentText = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseAfterTyping);
      return;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, pauseAfterDeleting);
      return;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
  };
