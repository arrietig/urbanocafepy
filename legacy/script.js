// Urbano Café — interactions

(() => {
  const header  = document.getElementById('siteHeader');
  const toggle  = document.getElementById('menuToggle');
  const drawer  = document.getElementById('drawer');

  // Header scroll state
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const open = drawer.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        toggle.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      })
    );
  }

  // Reveal on scroll
  const targets = document.querySelectorAll(
    '.product, .method, .location, .origin-block, .subscribe-inner, .spotlight, .section-head, .newsletter-inner'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => io.observe(el));

  // Fake cart counter on product click
  let cart = 0;
  const cartCount = document.querySelector('.cart-count');
  document.querySelectorAll('.product .product-media').forEach(media => {
    media.addEventListener('click', (e) => {
      e.preventDefault();
      cart += 1;
      if (cartCount) {
        cartCount.textContent = cart;
        cartCount.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }],
          { duration: 380, easing: 'cubic-bezier(.22,.61,.36,1)' }
        );
      }
    });
  });
})();
