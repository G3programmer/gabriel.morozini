document.querySelectorAll('.ver-mais').forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.card');
        
        // Fecha outros cards expandidos
        document.querySelectorAll('.card.expandido').forEach(cardAberto => {
            if (cardAberto !== card) {
                cardAberto.classList.remove('expandido');
                cardAberto.querySelector('.ver-mais').textContent = 'Ver mais';
            }
        });
        
        // Toggle do card atual
        card.classList.toggle('expandido');
        
        // Altera o texto do botão
        if (card.classList.contains('expandido')) {
            e.target.textContent = 'Ver menos';
        } else {
            e.target.textContent = 'Ver mais';
        }
    });
});