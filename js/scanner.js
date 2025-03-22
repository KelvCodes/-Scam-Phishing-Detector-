function checkScam() {
    let url = document.getElementById('url-input').value;
    let resultText = document.getElementById('result');

    if (url.includes("scam") || url.includes("phish")) {
        resultText.innerHTML = "⚠️ This website is suspicious!";
        resultText.style.color = "red";
    } else {
        resultText.innerHTML = "✅ This website looks safe.";
        resultText.style.color = "green";
    }
}
