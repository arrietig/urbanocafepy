'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SLIDES = [
  { src: '/portada/Poratada-01.jpg', alt: 'Portada Urbano Café 01' },
  { src: '/portada/Portada-02.jpg',  alt: 'Portada Urbano Café 02' },
  { src: '/portada/Portada-03.jpg',  alt: 'Portada Urbano Café 03' },
  { src: '/portada/Portada-04.jpg',  alt: 'Portada Urbano Café 04' },
  { src: '/portada/Portada-05.jpg',  alt: 'Portada Urbano Café 05' },
];

const INTERVAL = 5000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY  = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const fade    = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] -mt-[78px] pt-[78px] overflow-hidden"
      aria-label="Urbano Café — café de especialidad tostado en Asunción"
    >
      {/* ── Carrusel de fondo ── */}
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[active].src}
              alt={SLIDES[active].alt}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 to-transparent" />
      </motion.div>

      {/* ── Contenido ── */}
      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 min-h-[100svh] mx-auto max-w-[1500px] px-5 md:px-12 flex flex-col justify-center pt-[12vh] pb-[14vh]"
      >
        <h1>
          <span className="sr-only">Urbano Café</span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            <Image
              src="/logo/urbano-wordmark.png"
              alt="Urbano Café"
              width={1536}
              height={1024}
              priority
              className="w-[min(72vw,640px)] h-auto"
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-8 text-cream-soft max-w-[42ch] text-[15px] md:text-[17px] leading-relaxed"
        >
          Microlotes trazables de Brasil, Colombia y Etiopía. Tostados cada
          semana en nuestro laboratorio de Villa Morra.
        </motion.p>
      </motion.div>

      {/* ── Dots + contador ── */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-5 md:left-12 z-10 flex items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.32em] uppercase text-cream-soft tabular-nums">
          {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Foto ${i + 1}`}
              className="cursor-pointer"
            >
              <span className={`block h-[2px] transition-all duration-500 rounded-full ${
                i === active ? 'w-8 bg-copper' : 'w-3 bg-cream/30 hover:bg-cream/60'
              }`} />
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 right-5 md:right-12 z-10 flex items-center gap-3 text-[10px] tracking-[0.32em] uppercase text-cream-soft"
      >
        <span>Scroll</span>
        <span className="relative block w-px h-12 bg-cream/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-copper"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
