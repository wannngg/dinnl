document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    // 创建轮播点
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // 自动轮播
    setInterval(nextSlide, 5000);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}); 