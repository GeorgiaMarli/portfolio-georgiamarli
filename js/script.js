/* ==========================================================================
   SUMÁRIO DO SCRIPT
   ==========================================================================
   1. Lógica para a Troca de Tema (Claro/Escuro)
   2. Inicialização da Biblioteca de Animações (AOS - Animate on Scroll)
   ========================================================================== */

// Espera o documento HTML ser completamente carregado para executar o script.
// Isso é uma boa prática para evitar erros de elementos que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Lógica para a Troca de Tema (Claro/Escuro)
       ========================================================================== */
    
    // Seleciona os elementos do DOM necessários para a funcionalidade
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Define uma chave única para salvar a preferência de tema no localStorage do navegador
    const themeKey = 'theme-preference';

    // Função que aplica um tema específico (claro ou escuro)
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            // Adiciona o atributo 'data-theme="dark"' ao body. O CSS cuida do resto.
            body.setAttribute('data-theme', 'dark');
            // Muda o ícone do botão para o sol, indicando que o próximo clique ativará o tema claro
            if (themeSwitcher) themeSwitcher.textContent = '☀️';
        } else {
            // Remove o atributo, fazendo o site voltar ao tema claro padrão
            body.removeAttribute('data-theme');
            // Muda o ícone do botão para a lua
            if (themeSwitcher) themeSwitcher.textContent = '🌙';
        }
    };

    // Carrega a preferência de tema salva quando a página é aberta
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        applyTheme(savedTheme); // Aplica o tema que o usuário escolheu na última visita
    }

    // Adiciona o evento de clique ao botão de troca de tema
    // Verifica se o botão existe na página antes de adicionar o evento
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            // Verifica qual é o tema atual
            const isDarkMode = body.getAttribute('data-theme') === 'dark';
            
            // Define o novo tema como o oposto do atual
            const newTheme = isDarkMode ? 'light' : 'dark';
    
            // Aplica visualmente o novo tema
            applyTheme(newTheme);
            
            // Salva a nova preferência do usuário no localStorage
            localStorage.setItem(themeKey, newTheme);
        });
    }


    /* ==========================================================================
       2. Inicialização da Biblioteca de Animações (AOS - Animate on Scroll)
       ========================================================================== */
    
    // Inicia a biblioteca AOS com configurações personalizadas
    AOS.init({
        duration: 1000, // Duração da animação em milissegundos (1 segundo)
        once: true,     // Define se a animação deve acontecer apenas uma vez ao rolar
        offset: 50,     // Distância (em pixels) do elemento para o início da tela antes da animação começar
    });

});