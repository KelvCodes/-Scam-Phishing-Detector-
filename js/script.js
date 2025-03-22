function goToScanner() {
    window.location.href = "pages/scanner.html";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.getElementById("dark-mode-icon");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
}
