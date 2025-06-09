document.addEventListener('DOMContentLoaded', () => {
    // Only execute login script on the index.html page
    if (document.getElementById('loginButton')) {
        const passwordInput = document.getElementById('passwordInput');
        const loginButton = document.getElementById('loginButton');
        const statusMessage = document.getElementById('statusMessage');
        const loadingScreen = document.getElementById('loadingScreen');

        // Set a default "password" for demonstration
        const correctPassword = 'accessgranted';

        loginButton.addEventListener('click', attemptLogin);
        passwordInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                attemptLogin();
            }
        });

        function attemptLogin() {
            const enteredPassword = passwordInput.value.trim().toLowerCase();

            if (enteredPassword === correctPassword) {
                statusMessage.style.color = '#00ff00';
                statusMessage.textContent = '> AUTHENTICATION_SUCCESSFUL. REDIRECTING...';
                loadingScreen.style.display = 'flex'; // Show loading screen

                setTimeout(() => {
                    window.location.href = 'portfolio.html'; // Redirect to portfolio page
                }, 3000); // Simulate loading for 3 seconds
            } else {
                statusMessage.style.color = '#ff5f56';
                statusMessage.textContent = '> ACCESS_DENIED. INVALID_KEY.';
                passwordInput.value = ''; // Clear input
            }
        }
    }
});