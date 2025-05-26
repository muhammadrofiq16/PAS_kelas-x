document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // For registration page
    if (signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    
    // Automatically show the appropriate panel based on the page
    if (window.location.pathname.includes('login.html') || 
        window.location.pathname.includes('registrasi.html')) {


        container.classList.add("right-panel-active");
    } else if (window.location.pathname.includes('home.html')) {
        container.classList.remove("right-panel-active");
    }
    
});