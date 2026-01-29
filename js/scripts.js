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
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
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

    // DRAG TO SCROLL (Desktop) for Testimonials
    const slider = document.querySelector('.marquee-wrapper');
    const prevBtn = document.querySelector('.marquee-nav-btn.prev');
    const nextBtn = document.querySelector('.marquee-nav-btn.next');

    if (prevBtn && nextBtn && slider) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -320, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }

    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });

        // Add Grab Cursor by default
        slider.style.cursor = 'grab';
    }
});
