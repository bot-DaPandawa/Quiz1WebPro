const foodCards = document.querySelectorAll('.food-card');

foodCards.forEach(card => {
    card.addEventListener('click', function(e) {
                if (e.target.classList.contains('close-btn')) {
            this.classList.remove('locked');
            return;
        }
        
        this.classList.add('locked');
    });
});