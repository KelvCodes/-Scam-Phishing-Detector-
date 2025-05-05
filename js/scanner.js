

 nst isSuspicious = suspiciousKeywords.some(keyword => urlInput.toLowerCase().includes(keyword));
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/;

    if (!urlPattern.test(urlInput)) {
        resultText.innerHTML = '<i class="fas fa-times-circle"></i> Invalid URL format!';
        resultText.style.color = "#ff4444";
    } else if (isSuspicious) {
        resultText.innerHTML = '<i class="fas fa-exclamation-circle"></i> Warning: This site appears suspicious!';
        resultText.style.color = "#ff4444";
    } else {
        resultText.innerHTML = '<i class="fas fa-check-circle"></i> Safe: No threats detected.';
        resultText.style.color = "#00cc00";
    }

    loading.classList.add("hidden");
}
