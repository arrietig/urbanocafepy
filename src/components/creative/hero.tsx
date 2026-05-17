'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WORD = 'URBANO'.split('');

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.28]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] -mt-[78px] pt-[78px] overflow-hidden"
      aria-label="Urbano Café — café de especialidad tostado en Asunción"
    >
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop"
          alt="Taza de café espresso recién servido sobre madera oscura"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 to-transparent" />
      </motion.div>


      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 min-h-[100svh] mx-auto max-w-[1500px] px-5 md:px-12 flex flex-col justify-center pt-[12vh] pb-[14vh]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[11px] md:text-[13px] tracking-[0.42em] uppercase text-copper mb-5"
        >
          Café de especialidad · Asunción · desde 2019
        </motion.p>

        <h1 className="font-display uppercase leading-[0.82] tracking-[-0.01em] text-cream">
          <span className="sr-only">Urbano Café</span>
          <span aria-hidden className="flex flex-wrap text-[clamp(4rem,19vw,17rem)]">
            {WORD.map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {c}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="block font-serif italic font-normal normal-case text-copper text-[clamp(1.6rem,6vw,5rem)] mt-1 md:-mt-[2vw]"
          >
            café tostado con fuego lento
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
