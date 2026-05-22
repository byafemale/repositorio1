// =====================================================
// SCRIPT DE PÁGINA WEB PROFESIONAL
// Funcionalidades: Menú hamburguesa, validación de formulario
// =====================================================

// =====================================================
// 1. MENÚ HAMBURGUESA
// =====================================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Abre/cierra el menú al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cierra el menú cuando se hace clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Cierra el menú si hace clic fuera del menú
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// =====================================================
// 2. FORMULARIO DE CONTACTO
// =====================================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Evento al enviar el formulario
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación de campos vacíos
    if (!name || !email || !phone || !message) {
        showMessage('Por favor completa todos los campos', 'error');
        return;
    }

    // Validación de email
    if (!isValidEmail(email)) {
        showMessage('Por favor ingresa un email válido', 'error');
        return;
    }

    // Validación de teléfono (mínimo 10 dígitos)
    if (!isValidPhone(phone)) {
        showMessage('Por favor ingresa un teléfono válido (mínimo 10 dígitos)', 'error');
        return;
    }

    // Si todo es válido, mostrar mensaje de éxito
    showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.', 'success');

    // Limpiar el formulario
    contactForm.reset();

    // Limpiar el mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = '';
    }, 5000);

    // NOTA: Para enviar el correo realmente, necesitarías un backend
    // Por ejemplo, con Node.js, PHP o un servicio como EmailJS
    console.log('Datos del formulario:', { name, email, phone, message });
});

// =====================================================
// 3. FUNCIONES DE VALIDACIÓN
// =====================================================

/**
 * Valida si un email tiene formato correcto
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido, False si no
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida si un teléfono tiene al menos 10 dígitos
 * @param {string} phone - Teléfono a validar
 * @returns {boolean} - True si es válido, False si no
 */
function isValidPhone(phone) {
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * Muestra un mensaje de éxito o error
 * @param {string} text - Texto del mensaje
 * @param {string} type - Tipo: 'success' o 'error'
 */
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = type;
}

// =====================================================
// 4. VALIDACIÓN EN TIEMPO REAL DEL EMAIL
// =====================================================

const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    if (email && !isValidEmail(email)) {
        emailInput.style.borderColor = '#dc2626';
        emailInput.style.backgroundColor = '#fee2e2';
    } else {
        emailInput.style.borderColor = '#e5e7eb';
        emailInput.style.backgroundColor = '#ffffff';
    }
});

emailInput.addEventListener('focus', () => {
    emailInput.style.borderColor = '#2563eb';
    emailInput.style.backgroundColor = '#ffffff';
});

// =====================================================
// 5. ANIMACIONES AL DESPLAZAR
// =====================================================

/**
 * Anima los elementos cuando entran al viewport
 */
function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    // Observar todos los elementos de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// Ejecutar observaciones cuando el documento esté listo
document.addEventListener('DOMContentLoaded', observeElements);

// =====================================================
// 6. SCROLL SUAVE
// =====================================================

/**
 * Scroll suave a las secciones
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================================================
// 7. EFECTO PARALLAX EN EL HERO
// =====================================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (hero) {
        hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
    }
});

// =====================================================
// 8. CONTADOR DE SCROLL PARA NAVBAR
// =====================================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    // Agregar sombra al navbar cuando se desplaza
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// =====================================================
// 9. INICIALIZACIÓN
// =====================================================

console.log('✅ Script de página web profesional cargado correctamente');
console.log('📝 Características activas:');
console.log('  - Menú hamburguesa responsivo');
console.log('  - Validación de formulario en tiempo real');
console.log('  - Animaciones al desplazar');
console.log('  - Scroll suave entre secciones');
console.log('  - Efectos parallax en hero');
console.log('  - Navbar dinámico');
