document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lottie
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'), // the dom element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/skeleton-playing-guitar.json' // the path to the animation json
    });

    // Initialize ScrollReveal
    ScrollReveal().reveal('.home__title', {
        duration: 2000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        opacity: 0,
        scale: 1,
        reset: false
    });
});
