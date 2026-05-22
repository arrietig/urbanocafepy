'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SLIDE_COUNT = 5;
const SLIDE_BG = ['#3a4237', '#2e3229', '#3f4a3b', '#3d4336', '#484e40'];
const INTERVAL  = 5000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY  = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const fade    = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % SLIDE_COUNT), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] -mt-[78px] pt-[78px] overflow-hidden"
      aria-label="Hero principal"
    >
      {/* ── Fondos del carrusel ── */}
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 select-none"
            style={{ backgroundColor: SLIDE_BG[active] }}
          >
            <span
              className="font-display text-[clamp(6rem,28vw,24rem)] leading-none tabular-nums"
              style={{ WebkitTextStroke: '2px rgba(224,211,166,0.12)', color: 'transparent' }}
            >
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-cream/20">
              Imagen de portada
            </span>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/30 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 to-transparent" />
      </motion.div>

      {/* ── Contenido central ── */}
      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 min-h-[100svh] mx-auto max-w-[1500px] px-5 md:px-12 flex flex-col items-center justify-center text-center pt-[12vh] pb-[14vh]"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-[min(72vw,560px)] h-[90px] md:h-[120px] border-2 border-dashed border-cream/30 rounded-2xl flex items-center justify-center mx-auto">
            <span className="font-display text-cream text-[clamp(1.4rem,5vw,3.5rem)] tracking-[0.55em] uppercase select-none">
              LOGO
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="mt-8 text-cream-soft max-w-[42ch] text-[15px] md:text-[17px] leading-relaxed"
        >
          Tu mensaje principal va aquí. Contá la historia de tu marca en
          una o dos líneas.
        </motion.p>

        {/* CTA placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-3 border border-cream/30 rounded-full px-8 py-4 text-[12px] tracking-[0.22em] uppercase text-cream/50 cursor-pointer hover:border-cream/60 hover:text-cream/80 transition-colors">
            Botón de acción
          </div>
        </motion.div>
      </motion.div>

      {/* ── Dots + contador ── */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-5 md:left-12 z-10 flex items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.32em] uppercase text-cream-soft tabular-nums">
          {String(active + 1).padStart(2, '0')} / {String(SLIDE_COUNT).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} className="cursor-pointer">
              <span className={`block h-[2px] transition-all duration-500 rounded-full ${
                i === active ? 'w-8 bg-copper' : 'w-3 bg-cream/30 hover:bg-cream/60'
              }`} />
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
