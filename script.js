// =========================
// SABZINEH | JavaScript
// =========================

const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let currentLanguage = "fa";

// Change Persian / English
function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "fa" ? "rtl" : "ltr";

  // Update all translated elements
  document.querySelectorAll("[data-fa][data-en]").forEach((element) => {
    const translation = element.dataset[language];

    if (translation !== undefined) {
      element.innerHTML = translation;
    }
  });

  // Update email placeholder
  document.querySelectorAll("[data-placeholder-fa]").forEach((element) => {
    element.placeholder =
      language === "fa"
        ? element.dataset.placeholderFa
        : element.dataset.placeholderEn;
  });

  // Update language button
  languageToggle.textContent =
    language === "fa" ? "EN" : "FA";

  // Update menu accessibility
  menuToggle.setAttribute(
    "aria-label",
    language === "fa" ? "باز کردن منو" : "Open menu"
  );

  // Close mobile menu after switching
  navLinks.classList.remove("open");

  menuToggle.textContent = "☰";

  // Update document title
  document.title =
    language === "fa"
      ? "سبزینه | سلامت و تغذیه سالم"
      : "SABZINEH | Health & Healthy Nutrition";
}

// Toggle language
languageToggle.addEventListener("click", () => {
  const nextLanguage =
    currentLanguage === "fa" ? "en" : "fa";

  changeLanguage(nextLanguage);
});

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Demo newsletter form
const newsletterForm = document.getElementById("newsletterForm");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    currentLanguage === "fa"
      ? "فرم با موفقیت آزمایش شد؛ برای ثبت واقعی به سرور نیاز دارید."
      : "Demo submitted! A backend is needed for real subscriptions.";

  formMessage.style.color = "#246b45";

  newsletterForm.reset();
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Initial language
changeLanguage("fa");
