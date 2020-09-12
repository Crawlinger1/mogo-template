const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);
    
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animate__animated');
            item.style.display = 'none'
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const previousButton = document.querySelector(prev),
              nextButton = document.querySelector(next);

        previousButton.addEventListener('click', (e) => {
			e.preventDefault();
            changeSlide(-1);
            items[slideIndex - 1].classList.remove('animate__slideInLeft');
            items[slideIndex - 1].classList.add('animate__slideInRight');
        });

        nextButton.addEventListener('click', (e) => {
			e.preventDefault();
            changeSlide(1);
            items[slideIndex - 1].classList.remove('animate__slideInRight');
            items[slideIndex - 1].classList.add('animate__slideInLeft');
        })
    } catch(e) {
        console.error(e);
    }

    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.add('animate__slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlide(1);
                items[slideIndex - 1].classList.remove('animate__slideInRight');
                items[slideIndex - 1].classList.add('animate__slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default sliders;