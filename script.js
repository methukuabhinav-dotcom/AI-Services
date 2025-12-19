      function carouselScrollLeft(btn) {
        // find the carousel closest to the clicked button
        const container = btn.closest('.position-relative');
        if (!container) return;
        const carousel = container.querySelector('.movie-carousel');
        if (!carousel) return;
        const amount = Math.round(carousel.clientWidth * 0.8) || 300;
        carousel.scrollBy({ left: -amount, behavior: 'smooth' });
      }

      function carouselScrollRight(btn) {
        const container = btn.closest('.position-relative');
        if (!container) return;
        const carousel = container.querySelector('.movie-carousel');
        if (!carousel) return;
        const amount = Math.round(carousel.clientWidth * 0.8) || 300;
        carousel.scrollBy({ left: amount, behavior: 'smooth' });
      }
      // Optional: allow keyboard arrow control when carousel is focused
      document.addEventListener('keydown', (e) => {
        const active = document.activeElement;
        if (active && active.classList && active.classList.contains('movie-carousel')) {
          if (e.key === 'ArrowLeft') active.scrollBy({ left: -200, behavior: 'smooth' });
          if (e.key === 'ArrowRight') active.scrollBy({ left: 200, behavior: 'smooth' });
        }
      });