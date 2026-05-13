'use client';

import { useEffect, useState } from 'react';

const PROMO_ITEMS = [
  'Envío gratis en pedidos sobre Gs. 250.000',
  'Tostado cada semana en Asunción',
  'Nueva cosecha: Brasil Cerrado 2026',
  'Suscribite y ahorrá un 15%',
];

export function PromoBar() {
  const loop = [...PROMO_ITEMS, ...PROMO_ITEMS, ...PROMO_ITEMS];
  return (
    <div className="bg-ink text-bg overflow-hidden py-[10px]">
      <div className="marquee text-[12px] tracking-[0.14em] uppercase">
        {loop.map((t, i) => (
          <span key={i} className="pr-[1ch]">
            {t} &nbsp;·&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-bg transition-all duration-300 ${
          scrolled ? 'border-b border-line bg-bg/90 backdrop-blur-md' : ''
        }`}
      >
        <div className="mx-auto max-w-[1400px] grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 md:px-14 py-[18px]">
          <nav className="justify-self-start hidden md:block">
            <ul className="flex gap-7">
              {[
                ['Café', '#cafe'],
                ['Métodos', '#metodos'],
                ['Suscripción', '#suscripcion'],
                ['Locales', '#locales'],
                ['Historia', '#historia'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[13px] tracking-[0.12em] uppercase font-medium relative inline-block py-[6px] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden justify-self-start flex flex-col gap-[5px] w-[38px] h-[38px] items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>

          <a href="#top" className="justify-self-center flex flex-col items-center leading-none">
            <span className="font-logo text-[22px] md:text-[26px] tracking-[0.08em] uppercase">
              URBANO
            </span>
            <span className="hidden md:block text-[9px] tracking-[0.35em] uppercase text-muted mt-[6px]">
              café · paraguay
            </span>
          </a>

          <div className="justify-self-end flex items-center gap-[6px]">
            <IconButton label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </IconButton>
            <IconButton label="Cuenta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </IconButton>
            <IconButton label="Carrito">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 7h12l-1.2 12.1a2 2 0 0 1-2 1.9H9.2a2 2 0 0 1-2-1.9L6 7z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
            </IconButton>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-5 pt-[120px] px-8">
          {['Café', 'Métodos', 'Suscripción', 'Locales', 'Historia', 'Academia', 'Mayorista'].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-serif text-[36px]"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      className="w-[38px] h-[38px] inline-flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
    >
      {children}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bg pt-16 md:pt-24 pb-8 px-6 md:px-14">
      <div className="mx-auto max-w-[1400px] grid gap-8 md:gap-14 grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="font-logo text-[clamp(48px,7vw,96px)] tracking-[0.04em] leading-none uppercase">
            URBANO
          </div>
          <p className="text-bg/70 mt-5 mb-6">
            Café de especialidad,
            <br />
            tostado en Asunción.
          </p>
          <div className="flex gap-3 text-[13px]">
            <a
              href="https://www.instagram.com/urbanocafepy"
              className="border-b border-bg/30 hover:border-bg pb-[2px] transition-colors"
            >
              Instagram
            </a>
            <a href="#" className="border-b border-bg/30 hover:border-bg pb-[2px] transition-colors">
              TikTok
            </a>
            <a href="#" className="border-b border-bg/30 hover:border-bg pb-[2px] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        <FooterCol
          title="Tienda"
          links={['Granos', 'Suscripción', 'Equipos', 'Tarjetas regalo']}
        />
        <FooterCol
          title="Sobre nosotros"
          links={['Historia', 'Locales', 'Academia', 'Trabajá con nosotros']}
        />
        <FooterCol
          title="Ayuda"
          links={['Envíos', 'Mayorista', 'Contacto', 'Preguntas frecuentes']}
        />
      </div>

      <div className="mx-auto max-w-[1400px] mt-14 pt-6 border-t border-bg/15 flex flex-col md:flex-row justify-between text-[12px] text-bg/50">
        <span>© 2026 Urbano Café · Asunción, Paraguay</span>
        <span>Hecho con cuidado, tostado con paciencia.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-bg/60 mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-[10px]">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[14px] text-bg hover:text-[#ffd9b3] transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
