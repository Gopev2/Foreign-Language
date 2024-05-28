document.addEventListener('DOMContentLoaded'), () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const testForm = document.getElementById('testForm');
    const testResult = document.getElementById('testResult');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!validateEmail(email)) {
                alert('Невалиден имейл.');
                return;
            }

            // Добавяне на потребител в базата данни (симулация)
            alert('Регистрацията е успешна.');
        });
    }

    if (loginForm) {
        loginForm.addEventListener
    }
}

