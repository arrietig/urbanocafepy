'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const PROMO_ITEMS = [
  'Envío gratis sobre Gs. 250.000',
  'Tostado cada semana en Asunción',
  'Cosecha 2026 · Brasil Cerrado',
  'Suscribite y ahorrá 15%',
];

export function PromoBar() {
  return (
    <div className="bg-copper text-espresso py-[9px] px-5 md:px-12 border-b border-copper-deep text-center text-[11px] tracking-[0.22em] uppercase font-semibold">
      {PROMO_ITEMS[2]} <span aria-hidden className="mx-3 opacity-50">✦</span> {PROMO_ITEMS[3]}
    </div>
  );
}

const NAV = [
  ['Café', '#cafe'],
  ['El ritual', '#ritual'],
  ['Orígenes', '#origenes'],
  ['Locales', '#locales'],
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-espresso/85 backdrop-blur-xl border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1500px] grid grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-12 py-4">
          <nav className="justify-self-start hidden md:block">
            <ul className="flex gap-8">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[12px] tracking-[0.18em] uppercase text-cream-soft hover:text-cream relative inline-block py-1 transition-colors cursor-pointer after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-copper after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden justify-self-start flex flex-col gap-[6px] w-10 h-10 items-center justify-center cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`block h-[2px] w-6 bg-cream transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-[2px] w-6 bg-cream transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-cream transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>

          <a
            href="#top"
            className="justify-self-center flex items-center cursor-pointer"
            aria-label="Urbano Café — inicio"
          >
            <Image
              src="/logo/urbano-bici.png"
              alt="Urbano Café"
              width={1064}
              height={583}
              priority
              className="h-9 md:h-11 w-auto"
            />
          </a>

          <div className="justify-self-end flex items-center gap-3">
            <button
              aria-label="Buscar"
              className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full text-cream-soft hover:text-cream hover:bg-cream/5 transition-colors cursor-pointer"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-espresso md:hidden flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-2">
              {[...NAV, ['Historia', '#manifiesto'] as const].map(([label, href], i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[12vw] leading-[1.05] text-cream hover:text-copper transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-espresso-soft text-cream border-t border-line pt-20 pb-10 px-5 md:px-12 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-[6vw] left-0 right-0 text-center font-display text-[26vw] leading-none tracking-[0.02em] text-stroke opacity-[0.06]"
      >
        URBANO
      </div>

      <div className="mx-auto max-w-[1500px] relative">
        <div className="grid gap-12 md:gap-14 grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.15] max-w-[18ch]">
              Café de especialidad, tostado con paciencia en Asunción.
            </p>
            <div className="flex gap-4 text-[13px] mt-7 uppercase tracking-[0.12em]">
              {[
                ['Instagram', 'https://www.instagram.com/urbanocafepy'],
                ['TikTok', '#'],
                ['WhatsApp', '#'],
              ].map(([l, h]) => (
                <a
                  key={l}
                  href={h}
                  className="border-b border-cream/30 hover:border-copper hover:text-copper pb-1 transition-colors cursor-pointer"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Tienda" links={['Granos', 'Suscripción', 'Equipos', 'Tarjetas regalo']} />
          <FooterCol title="Nosotros" links={['Historia', 'Locales', 'Academia', 'Trabajá acá']} />
          <FooterCol title="Ayuda" links={['Envíos', 'Mayorista', 'Contacto', 'FAQ']} />
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-2 text-[12px] text-muted uppercase tracking-[0.12em]">
          <span>© 2026 Urbano Café · Asunción, Paraguay</span>
          <span>Hecho con cuidado, tostado con fuego lento.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold tracking-[0.24em] uppercase text-copper mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-[14px] text-cream-soft hover:text-cream transition-colors cursor-pointer">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
