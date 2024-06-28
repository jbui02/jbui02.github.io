document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = 'Jeremy Bui';
        const password = document.getElementById('password').value.toLowerCase();
        const errorMessage = document.getElementById('error-message');

        if (username === 'Jeremy Bui' && password === 'password') {
            window.location.href = 'home.html'; // Navigate to home.html on successful login
        } else {
            errorMessage.textContent = 'Incorrect username or password.';
        }
    });

    document.getElementById('hint').addEventListener('click', function() {
        const hintPopup = document.getElementById('popup');
        hintPopup.style.display = 'block';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
