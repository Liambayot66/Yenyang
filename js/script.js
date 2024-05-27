document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        if (email === "yenyang" && password === "12345") {
            // Simulate successful login (in real application, redirect or set session)
            window.location.href = "dashboard.html";
        } else {
            // Display error message
            errorMessage.textContent = "Invalid email or password.";
            errorMessage.style.display = "block";
        }
    });
});
