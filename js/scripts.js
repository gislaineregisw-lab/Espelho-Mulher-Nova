document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span');

            // Check if already open
            const isOpen = content.style.maxHeight;

            // Close all others
            document.querySelectorAll('.faq-content').forEach(c => {
                c.style.maxHeight = null;
                c.classList.remove('open');
            });
            document.querySelectorAll('.faq-header span').forEach(s => s.textContent = '+');

            // Toggle current
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('open');
                icon.textContent = '-';
            }
        });
    });

    // Smooth Scroll for Anchors
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
});
