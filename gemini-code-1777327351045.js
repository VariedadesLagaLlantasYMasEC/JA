// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de cambio de color en el Navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#000000';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    };

    // 2. Desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Variedades LAGA - Sitio cargado correctamente.");
});