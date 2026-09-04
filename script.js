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

const skillInfo = {
  "HTML / CSS": "Strong foundation in semantic HTML and modern CSS. Experienced in responsive layouts, Flexbox, Grid, animations, and accessibility best practices.",
  
  "JavaScript / React": "Experienced in JavaScript including DOM manipulation, ES6+, APIs, and interactive UI development. Familiar with React component-based architecture.",
  
  "C++ / Java": "Good understanding of data structures, algorithms, and object-oriented programming concepts. Used extensively in academics and problem solving.",
  
  "Git & GitHub": "Comfortable with version control, repositories, branching, commits, and collaborative development using GitHub.",
  
  "Problem Solving": "Strong analytical and logical thinking skills used to break down problems and implement efficient solutions.",
  
  "Communication": "Able to clearly explain technical concepts and collaborate effectively with team members.",
  
  "Team Collaboration": "Experienced in working within teams, contributing ideas, and achieving shared goals.",
  
  "Time Management": "Skilled at prioritizing tasks, meeting deadlines, and balancing multiple responsibilities.",

  "Adaptability": "Ability to quickly learn new technologies, adapt to changing project requirements, and work effectively in dynamic environments. Comfortable adjusting approaches based on feedback, deadlines, and real-world constraints."

};

document.querySelectorAll(".skills-card ul li").forEach(skill => {
  skill.addEventListener("click", () => {
    const skillName = skill.innerText.trim();

    if (skillInfo[skillName]) {
      document.getElementById("skillTitle").innerText = skillName;
      document.getElementById("skillDescription").innerText = skillInfo[skillName];
      document.getElementById("skillModal").style.display = "flex";
    }
  });
});

function closeSkill() {
  document.getElementById("skillModal").style.display = "none";
}


