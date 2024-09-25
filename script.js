document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Adiciona a classe 'visible' após um pequeno atraso
    setTimeout(() => {
        container.classList.add('visible');
    }, 600); // 600 ms de atraso antes de aparecer

    // Carrossel da section carrossel
    const carrossel = document.querySelector('.carrosel');
    const cards = document.querySelectorAll('.card');

    // Verifique se os cards estão disponíveis
    if (cards.length === 0) {
        console.error('Nenhum cartão encontrado.');
        return; // Saia da função se não houver cartões
    }

    const visibleCards = 3; // Quantidade de cards visíveis por vez
    const cardWidth = cards[0].getBoundingClientRect().width + 20; // Largura do card + gap de 20px
    let currentPosition = 0;

    // Função para mover o carrossel
    const moveCarrossel = () => {
        carrossel.style.transition = 'transform 0.5s ease-in-out';
        carrossel.style.transform = `translateX(${-cardWidth * currentPosition}px)`;
    };

    // Evento para o botão "Anterior"
    document.getElementById('prev').addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
        } else {
            // Volta para o final do carrossel (loop)
            currentPosition = cards.length - visibleCards;
        }
        moveCarrossel();
    });

    // Evento para o botão "Próximo"
    document.getElementById('next').addEventListener('click', () => {
        if (currentPosition < cards.length - visibleCards) {
            currentPosition++;
        } else {
            // Volta para o início do carrossel (loop)
            currentPosition = 0;
        }
        moveCarrossel();
    });
});
