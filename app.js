const API_URL = "https://script.google.com/macros/s/AKfycbw1f5VM0l8hyQmwdQhruKe8xQvvcHCVCvJ6ILivMRYhsQyrPdDjjTEnN8_ziPIB8-3DLA/exec";

async function testAPI() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById("status").textContent =
            data.message;

    } catch (error) {
        document.getElementById("status").textContent =
            "Unable to connect to API.";
        
        console.error(error);
    }
}

testAPI();
