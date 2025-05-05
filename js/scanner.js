/**
 * Enhanced Scam URL Checker
 * Features: 
 * - Real API integration (placeholder ready)
 * - Better validation with URL object
 * - Dynamic keyword detection (extendable)
 * - Accessibility & UX improvements
 * - Error handling & edge cases
 */

// Config: Extract for easy maintenance
const config = {
    suspiciousKeywords: ["scam", "phish", "fake", "login", "password", "banking", "verify"],
    apiEndpoint: "https://api.example.com/check-url", // Replace with real API
    fakeAPIDelay: 1500, // Simulated delay (remove for real API)
    colors: {
        error: "#ff4444",
        warning: "#ffcc00",
        success: "#00cc00"
    }
};

// DOM Elements (cache for performance)
const elements = {
    urlInput: document.getElementById("url-input"),
    resultText: document.getElementById("result"),
    loading: document.getElementById("loading")
};

// Icons (using Font Awesome classes)
const icons = {
    error: "fa-times-circle",
    warning: "fa-exclamation-circle",
    success: "fa-check-circle",
    info: "fa-exclamation-triangle"
};

// Main function with error handling
async function checkScam() {
    try {
        resetUI();
        const url = getSanitizedUrl();
        
        if (!url) {
            showResult("Please enter a URL!", "warning", icons.info);
            return;
        }

        if (!isValidUrl(url)) {
            showResult("Invalid URL format!", "error", icons.error);
            return;
        }

        setLoading(true);
        const isScam = await checkUrlAgainstThreats(url); // Simulated or real API call
        setLoading(false);

        if (isScam) {
            showResult("Warning: This site appears suspicious!", "error", icons.warning);
        } else {
            showResult("Safe: No threats detected.", "success", icons.success);
        }
    } catch (error) {
        console.error("Error in checkScam:", error);
        showResult("An error occurred. Please try again.", "error", icons.error);
        setLoading(false);
    }
}

// --- Helper Functions --- //

function getSanitizedUrl() {
    return elements.urlInput.value.trim();
}

function isValidUrl(url) {
    try {
        new URL(url.startsWith("http") ? url : `https://${url}`);
        return true;
    } catch {
        return false;
    }
}

async function checkUrlAgainstThreats(url) {
    // Simulate API call (replace with fetch() in production)
    if (config.apiEndpoint) {
        // Real API example (commented out):
        // const response = await fetch(`${config.apiEndpoint}?url=${encodeURIComponent(url)}`);
        // const data = await response.json();
        // return data.isMalicious;
    }

    // Fallback: Local keyword check
    await new Promise(resolve => setTimeout(resolve, config.fakeAPIDelay));
    return config.suspiciousKeywords.some(keyword => 
        url.toLowerCase().includes(keyword)
    );
}

function showResult(message, type, icon) {
    elements.resultText.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    elements.resultText.style.color = config.colors[type];
}

function setLoading(isLoading) {
    isLoading 
        ? elements.loading.classList.remove("hidden") 
        : elements.loading.classList.add("hidden");
}

function resetUI() {
    elements.resultText.innerHTML = "";
    elements.resultText.style.color = "";
}
