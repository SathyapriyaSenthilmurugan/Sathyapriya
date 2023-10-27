const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedPairs = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('flipped') && flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                const [card1, card2] = flippedCards;
                const card1Value = card1.getAttribute('data-card');
                const card2Value = card2.getAttribute('data-card');

                if (card1Value === card2Value) {
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                    matchedPairs++;

                    if (matchedPairs === cards.length / 2) {
                        setTimeout(() => {
                            alert('Congratulations! You won the game!');
                        }, 500);
                    }
                } else {
                    setTimeout(() => {
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                    }, 1000);
                }

                flippedCards = [];
            }
        }
    });
});

(function shuffleCards() {
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
})();