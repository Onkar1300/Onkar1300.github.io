document.addEventListener('DOMContentLoaded', () => {
    if (window.particlesJS) {
        window.particlesJS('particles-js', {
            particles: {
                number: {
                    value: 70,
                    density: { enable: true, value_area: 900 }
                },
                color: { value: '#3cc0ff' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.35,
                    random: true
                },
                size: {
                    value: 2.4,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 140,
                    color: '#1f6dff',
                    opacity: 0.25,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    out_mode: 'out'
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: false },
                    resize: true
                },
                modes: {
                    grab: { distance: 160, line_linked: { opacity: 0.4 } }
                }
            },
            retina_detect: true
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
