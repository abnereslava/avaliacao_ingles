// Final visual asset overrides for image-based quiz questions.
(function () {
  function applyVisualAssets() {
    const visualMap = {
      'cat-under-table': {
        src: 'https://images.pexels.com/photos/39258706/pexels-photo-39258706.jpeg?auto=compress&cs=tinysrgb&w=1200',
        alt: 'A black and white cat relaxing underneath a cafe table',
      },
      'hotel-trip': {
        src: 'booking_hotel.png',
        alt: 'A traveller checking in at a hotel reception desk',
      },
      'missed-bus': {
        src: 'chasing_bus.png',
        alt: 'A person running after a bus that is leaving',
      },
    };

    const style = document.createElement('style');
    style.textContent = `
      .stock-visual .scene-caption,
      .visual-scene .scene-caption {
        display: none !important;
      }

      .stock-visual .stock-photo {
        object-fit: contain !important;
        object-position: center !important;
      }
    `;
    document.head.appendChild(style);

    if (typeof renderVisual === 'function') {
      renderVisual = function (name) {
        const visual = visualMap[name];
        if (!visual) {
          questionVisual.innerHTML = '';
          return;
        }

        questionVisual.innerHTML = `
          <figure class="visual-scene stock-visual" aria-label="${escapeHtml(visual.alt)}">
            <img
              class="stock-photo"
              src="${visual.src}"
              alt="${escapeHtml(visual.alt)}"
              loading="eager"
              decoding="async"
            />
          </figure>`;
      };
    }

    if (typeof currentStage !== 'undefined' && currentStage === 'quiz' && questions?.[currentQuestion]?.visual) {
      renderQuestion();
    }
  }

  if (document.readyState === 'complete') applyVisualAssets();
  else window.addEventListener('load', applyVisualAssets, { once: true });
})();
