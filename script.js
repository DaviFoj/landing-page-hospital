// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.querySelector('.nav');

    // Evento para abrir/fechar o menu mobile
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Evento para fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});

const direitoReservado = document.getElementById('copyright');

const currentYear = new Date().getFullYear();
direitoReservado.textContent = `© ${currentYear} Hospital e Maternidade Nossa Senhora Aparecida. Todos os direitos reservados.`;