<script>
document.addEventListener("DOMContentLoaded", function() {
    const scrollTo = (target, duration) => {
        const start = window.scrollY || document.documentElement.scrollTop;
        const startTime = performance.now();
        const targetPosition = target.offsetTop;
        const distance = targetPosition - start;
        
        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easing = easeInOutQuad(progress);
            window.scrollTo(0, start + distance * easing);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                scrollTo(targetElement, 1000); // Duration in milliseconds
            }
        });
    });
});
</script>
