document.addEventListener('DOMContentLoaded', () => {
    // --- Variables de Formularios ---
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Inputs del Login
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Inputs del Registro (Nuevas variables)
    const regNombreInput = document.getElementById('reg-nombre');
    const regEmailInput = document.getElementById('reg-email');
    const regPasswordInput = document.getElementById('reg-password');

    // Elementos de Contenido
    const loginContent = document.getElementById('login-form-content');
    const registerContent = document.getElementById('register-form-content');
    // Se eliminó la variable registerBtnHeader que causaba el error
    
    // --- FUNCIONES DE ALTERNANCIA (TOGGLE) ---
    
    function showLoginForm() {
        loginContent.style.display = 'block';
        registerContent.style.display = 'none';
        // Se eliminó la línea que manipulaba registerBtnHeader
    }

    function showRegisterForm() {
        loginContent.style.display = 'none';
        registerContent.style.display = 'block';
        // Se eliminó la línea que manipulaba registerBtnHeader
        // Opcional: limpiar los campos de registro al alternar
        registerForm.reset(); 
    }

    // --- FUNCIONES DE VALIDACIÓN (EXISTENTES) ---
    
    // Función para mostrar un mensaje de error específico
    const displayError = (inputElement, message) => {
        let errorElement = document.getElementById(inputElement.id + '-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = inputElement.id + '-error';
            errorElement.className = 'error-message';
            // Aplicar estilo básico para que el mensaje sea visible
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '0.875rem'; // text-sm
            errorElement.style.marginTop = '0.25rem'; // mt-1
            inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
        }
        errorElement.textContent = message;
        inputElement.classList.add('input-error');
        inputElement.style.borderColor = 'red'; // Feedback visual de error
    };

    // Función para borrar el mensaje de error
    const clearError = (inputElement) => {
        const errorElement = document.getElementById(inputElement.id + '-error');
        if (errorElement) {
            errorElement.remove();
        }
        inputElement.classList.remove('input-error');
        inputElement.style.borderColor = ''; // Restablecer el borde
    };

    // 1. Función de validación de Email (Usada para Login y Registro)
    const validateEmail = (inputElement) => {
        const emailValue = inputElement.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            clearError(inputElement);
            return false;
        } else if (!emailRegex.test(emailValue)) {
            displayError(inputElement, 'Formato de correo inválido.');
            return false;
        } else {
            clearError(inputElement);
            return true;
        }
    };

    // 2. Función de validación de Contraseña (Usada para Login y Registro)
    const validatePassword = (inputElement) => {
        const passwordValue = inputElement.value;
        const minLength = 8;

        if (passwordValue === '') {
            clearError(inputElement);
            return false;
        } else if (passwordValue.length < minLength) {
            displayError(inputElement, `La contraseña debe tener al menos ${minLength} caracteres.`);
            return false;
        } else {
            clearError(inputElement);
            return true;
        }
    };
    
    // 3. Función de validación de Nombre (Nueva)
    const validateName = (inputElement) => {
        const nameValue = inputElement.value.trim();
        if (nameValue === '') {
            clearError(inputElement);
            return false;
        } else if (nameValue.length < 3) {
            displayError(inputElement, 'El nombre debe tener al menos 3 caracteres.');
            return false;
        } else {
            clearError(inputElement);
            return true;
        }
    };

    // --- EVENT LISTENERS PARA TOGGLE ---

    // Listener para el enlace "¿Registrarse?" dentro del formulario de Login
    document.getElementById('show-register-link').addEventListener('click', (e) => {
        e.preventDefault();
        showRegisterForm();
    });

    // Listener para el enlace "Volver a Iniciar Sesión" en el formulario de Registro
    document.getElementById('show-login-link').addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });
    
    // El listener del encabezado fue eliminado
    
    // --- MANEJO DEL ENVÍO DE FORMULARIOS ---

    // 1. Manejo del Login (Existente, con redirección)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        // Asignar los inputs a las funciones de validación
        const isEmailValid = validateEmail(emailInput);
        const isPasswordValid = validatePassword(passwordInput);

        if (isEmailValid && isPasswordValid) {
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            // 🔑 SIMULACIÓN DE AUTENTICACIÓN
            const VALID_EMAIL = 'test@saul.com'; 
            const VALID_PASSWORD = '123456789'; 
            
            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                // ✅ CONEXIÓN EXITOSA: REDIRECCIÓN 
                window.location.href = 'agenda/agenda.html'; 
                
            } else {
                // 🚫 FALLO DE CREDENCIALES
                alert('Credenciales inválidas. Por favor, inténtalo de nuevo.');
                passwordInput.value = ''; 
            }
        } else {
            alert('Por favor, corrige los errores de formato en el formulario de Login.');
        }
    });

    // 2. Manejo del Registro (NUEVA FUNCIONALIDAD)
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validar los campos específicos del registro
        const isNameValid = validateName(regNombreInput);
        const isEmailValid = validateEmail(regEmailInput);
        const isPasswordValid = validatePassword(regPasswordInput);

        // Si la validación en el lado del cliente pasa...
        if (isNameValid && isEmailValid && isPasswordValid) {
            
            const nombre = regNombreInput.value.trim();
            const email = regEmailInput.value.trim();
            const password = regPasswordInput.value;
            
            console.log(`Intentando registrar a: ${nombre}, ${email}, ${password}`);
            
            // 💡 SIMULACIÓN DE REGISTRO
            alert(`¡Registro exitoso para ${nombre}! Ahora, inicia sesión con tu nueva cuenta.`);
            
            // Volver automáticamente al formulario de login
            showLoginForm(); 
            registerForm.reset();
        } else {
            alert('Por favor, completa y corrige todos los campos de registro.');
        }
    });
    
    // --- LISTENERS DE VALIDACIÓN EN TIEMPO REAL (Blur) ---
    emailInput.addEventListener('blur', () => validateEmail(emailInput));
    passwordInput.addEventListener('blur', () => validatePassword(passwordInput));

    regNombreInput.addEventListener('blur', () => validateName(regNombreInput));
    regEmailInput.addEventListener('blur', () => validateEmail(regEmailInput));
    regPasswordInput.addEventListener('blur', () => validatePassword(regPasswordInput));
});