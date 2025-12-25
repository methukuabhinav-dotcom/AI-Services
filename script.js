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


function showDetails(card1) {
  card1.style.transform = "scale(1.05)";
  card1.querySelector('[data-black]').classList.remove('d-none');
  card1.querySelector('[data-content]').classList.remove('d-none');
}

function hideDetails(card1) {
  if (card1.querySelector('[data-panel]').style.bottom === "0px") return;
  card1.style.transform = "scale(1)";
  card1.querySelector('[data-black]').classList.add('d-none');
  card1.querySelector('[data-content]').classList.add('d-none');
}

function openInfo(e, btn) {
  e.stopPropagation();
  btn.closest('.card1').querySelector('[data-panel]').style.bottom = "0px";
}

function closeInfo(btn) {
  btn.closest('.card1').querySelector('[data-panel]').style.bottom = "-100%";
}