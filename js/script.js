function scanWebsite() {
  iss = ["phishing.com", "scamwebsite.net"];
    let isBlacklisted = blacklistedSites.some(site => url.includes(site));

    if (isBlacklisted) {
        resultDisplay.innerHTML = "🚨 Warning! This site is flagged as dangerous!";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.innerHTML = "✅ Safe! No threats detected.";
        resultDisplay.style.color = "green";
    }
}
