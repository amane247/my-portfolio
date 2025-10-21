
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.Cer .card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });
});

// ============ เข้าเว็บหลัง Splash ============ 
(function () {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  let done = false;

  // เช็คว่าเคยเข้ามาแล้วไหม
  const hasVisited = localStorage.getItem('hasVisited');

  if (hasVisited) {
    // ถ้าเคยเข้าแล้ว → ซ่อน splash ทันที
    splash.classList.add('hidden');
    app.removeAttribute('aria-hidden');
    return;
  }

  // ถ้ายังไม่เคยเข้า → รอให้ผู้ใช้กดเข้า
  function enterSite(e) {
    if (done) return;
    done = true;
    splash.classList.add('hidden');
    app.removeAttribute('aria-hidden');
    // จำว่าเคยเข้าแล้ว
    localStorage.setItem('hasVisited', 'true');
  }

  splash.addEventListener('click', enterSite);
  splash.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      enterSite(e);
    }
  });
})();

// ============ ลิงก์จาก card ไปหน้า detail ============
document.querySelectorAll('.card[data-link]').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    window.location.href = link;
  });
});

// ============ ภาพเลื่อน ============
const slides = document.querySelectorAll(".gallery-slider .slide");
const slidesContainer = document.querySelector(".gallery-slider .slides");
let index = 0;

function showSlide(i) {
  if (!slidesContainer) return;
  index = (i + slides.length) % slides.length;
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".gallery-slider .next").addEventListener("click", () => showSlide(index + 1));
document.querySelector(".gallery-slider .prev").addEventListener("click", () => showSlide(index - 1));

// สไลด์อัตโนมัติทุก 5 วินาที
setInterval(() => showSlide(index + 1), 5000);