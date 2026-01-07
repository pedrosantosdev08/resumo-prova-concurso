const toggleBtn = document.querySelector(".toggle-theme");
  const root = document.documentElement; // <html>

  // Carrega tema salvo
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });