function scanWebsite() {
    let url = document.getElementById('urlInput').value;
    let resultDisplay = document.getElementById('result');

    if (!url) {
        resultDisplay.innerHTML = "⚠️ Please enter a valid URL!";
        resultDisplay.style.color = "yellow";
        return;
    }

    // Dummy detection logic (will integrate API later)
    let blacklistedSites = ["phishing.com", "scamwebsite.net"];
    let isBlacklisted = blacklistedSites.some(site => url.includes(site));

    if (isBlacklisted) {
        resultDisplay.innerHTML = "🚨 Warning! This site is flagged as dangerous!";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.innerHTML = "✅ Safe! No threats detected.";
        resultDisplay.style.color = "green";
    }
}
