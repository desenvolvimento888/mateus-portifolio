// Menu Mobile Dinâmico
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Alternar Tema (Claro/Escuro)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Altera o emoji conforme o tema
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Validação de Formulário
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    // Captura os valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Resetar mensagens de erro
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    let isValid = true;

    // Validação de Nome
    if (nome === "") {
        document.getElementById('errorNome').style.display = 'block';
        isValid = false;
    }

    // Validação de E-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('errorEmail').style.display = 'block';
        isValid = false;
    }

    // Validação de Mensagem
    if (mensagem === "") {
        document.getElementById('errorMsg').style.display = 'block';
        isValid = false;
    }

    // Simulação de Envio
    if (isValid) {
        console.log("Dados enviados:", { nome, email, mensagem });
        
        // Limpar campos
        contactForm.reset();
        
        // Exibir Modal de Sucesso
        successModal.style.display = 'flex';
    }
});

// Fechar Modal
closeModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

// Fechar modal clicando fora dele
window.onclick = function(event) {
    if (event.target == successModal) {
        successModal.style.display = 'none';
    }
}