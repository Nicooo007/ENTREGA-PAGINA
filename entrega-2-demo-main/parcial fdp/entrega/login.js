const loginForm = document.getElementById('loginForm');
    const userBtn = document.getElementById('userBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            localStorage.setItem('userEmail', email);
            window.location.href = 'user-profile.html'; // Redirigir a la página de perfil
        });
    }

    if (userBtn) {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            userBtn.textContent = 'Perfil';
            userBtn.href = 'user-profile.html'; // Redirigir a la página de perfil
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userEmail');
            window.location.href = 'index.html'; // Redirigir a la página de inicio
        });
    }
