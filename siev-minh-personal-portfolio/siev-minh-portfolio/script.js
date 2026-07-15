const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");
const navigationLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeButton.textContent = "☾";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  themeButton.textContent = isLight ? "☾" : "☀";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  formMessage.textContent = `Thank you, ${name}. Your message form is ready to connect to EmailJS or Formspree.`;

  contactForm.reset();
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
