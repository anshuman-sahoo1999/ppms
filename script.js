document.addEventListener('DOMContentLoaded', () => {
    // Set dynamic year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Modal elements
    const modal = document.getElementById('redirectModal');
    const btnYes = document.getElementById('confirmYes');
    const btnNo = document.getElementById('confirmNo');
    let pendingUrl = '';

    // Handle card clicks
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            pendingUrl = card.getAttribute('data-url');
            if (pendingUrl && pendingUrl !== '#') {
                modal.style.display = 'block';
            } else if (pendingUrl === '#') {
                alert('This portal is under development and will be available soon.');
            }
        });
    });

    // Modal YES redirect
    btnYes.addEventListener('click', () => {
        if (pendingUrl && pendingUrl !== '#') {
            window.location.href = pendingUrl;
        }
        modal.style.display = 'none';
    });

    // Modal NO cancel
    btnNo.addEventListener('click', () => {
        modal.style.display = 'none';
        pendingUrl = '';
    });

    // Close modal if clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            pendingUrl = '';
        }
    });
});
