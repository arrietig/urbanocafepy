'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Placeholder de imagen reutilizable ───────────────────────── */

const DEMO_BG = [
  '#3a4237', '#363d33', '#404738', '#3d4336', '#484e40',
  '#393f35', '#3f4a3b', '#3b4537', '#404639', '#3e4538',
];

function ImgPlaceholder({ label, index = 0 }: { label: string; index?: number }) {
  const bg = DEMO_BG[index % DEMO_BG.length];
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none"
      style={{ backgroundColor: bg }}
    >
      <span
        className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-none tabular-nums"
        style={{ WebkitTextStroke: '1.5px rgba(224,211,166,0.2)', color: 'transparent' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="text-[10px] tracking-[0.35em] uppercase text-cream/25 text-center px-4 max-w-[16ch]">
        {label}
      </span>
    </div>
  );
}

function VidePlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 select-none bg-[#2e3229]">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(224,211,166,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
      <span className="text-[10px] tracking-[0.35em] uppercase text-cream/25 text-center px-4 max-w-[20ch]">
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------- Socios Comerciales */

export function Ritual() {
  return (
    <section id="ritual" className="bg-espresso py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase text-copper mb-12 md:mb-20"
        >
          Socios Comerciales
        </motion.p>

        {/* Café Quinto */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Café Quinto
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>
                Un café creado junto a Café Quinto, desde la finca hasta la
                taza. En Chemex se expresa con elegancia y suavidad: frutas
                amarillas, almendras suaves y un final floral, limpio.
              </p>
              <p>
                El método realza cada ingrediente y transforma el café en un
                ritual de pausa y satisfacción.
              </p>
              <p className="text-cream">Viví Origen, disfrútalo en Urbano.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-inset ring-cream/10"
          >
            <ImgPlaceholder label="Foto Café Quinto" index={0} />
          </motion.div>
        </div>

        {/* Totem Tostadores */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden md:order-1 order-2 ring-1 ring-inset ring-cream/10"
          >
            <VidePlaceholder label="Video · Totem Tostadores" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:order-2 order-1"
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Totem Tostadores
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>
                Nuestro House Blend es tostado todos los días por nuestros
                amigos de Totem Tostadores para ofrecerte café fresco en
                nuestros locales y también para que nos lleves adonde quieras.
              </p>
              <p className="text-cream">Disfrutá, en Urbano Café.</p>
            </div>
          </motion.div>
        </div>

        {/* Antillas Café */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Antillas Café
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>
                Antillas es la tostaduría que representa el sabor del café
                boliviano con sus packs de Mañana tropical, Tarde dulce y
                Noche intensa para Espresso, y el delicioso pacamara: Siesta
                sagrada.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-inset ring-cream/10"
          >
            <ImgPlaceholder label="Foto Antillas Café" index={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- Carta — paneles slide */

const CATEGORIES = [
  { name: 'Café Calientes' },
  { name: 'Café Fríos' },
  { name: 'Tés Gourmet' },
  { name: 'Brunch' },
  { name: 'Clásicos Urbanos' },
  { name: 'Sándwiches' },
  { name: 'Croissant Dulces' },
  { name: 'Dulces' },
  { name: 'Bebidas' },
  { name: 'Cervezas Artesanales' },
];

export function Beans() {
  return (
    <section id="cafe" className="bg-espresso py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] w-full px-5 md:px-12 mb-10 md:mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-4">
          Café hecho con amor desde el 2021
        </p>
        <h2 className="font-display uppercase text-[clamp(2rem,7vw,5.5rem)] leading-[0.85] text-cream">
          Nuestras <span className="text-stroke">delicias</span>
        </h2>
      </div>

      <div
        className="flex gap-3 md:gap-4 px-5 md:px-12 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {CATEGORIES.map((c, i) => (
          <article
            key={c.name}
            className="group relative snap-start shrink-0 w-[78vw] sm:w-[44vw] lg:w-[30vw] h-[70vh] max-h-[680px] overflow-hidden rounded-2xl cursor-pointer"
          >
            <ImgPlaceholder label={c.name} index={i} />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="font-alexandria font-semibold text-[clamp(1.6rem,2.6vw,2.6rem)] leading-tight text-cream">
                {c.name}
              </h3>
              <span className="mt-5 inline-block border border-cream/40 text-cream text-[11px] tracking-[0.24em] uppercase px-7 py-3 rounded-full group-hover:bg-cream group-hover:text-espresso transition-colors">
                Ver
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------ Servicios de Catering */

const CATERING_COUNT = 3;

export function Catering() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % CATERING_COUNT),
      4500,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="catering" className="bg-espresso py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
            Servicios de Catering
          </p>
          <h2 className="font-display uppercase text-[clamp(2.4rem,8vw,7rem)] leading-[0.85] text-cream">
            <span className="line-through decoration-copper decoration-[0.08em] text-cream/60">
              Catering
            </span>
            <br />
            <span className="font-alexandria font-normal normal-case text-gold text-[clamp(1.8rem,5vw,4rem)]">
              Experiencia en cada evento
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-inset ring-cream/10"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <ImgPlaceholder label={`Catering · foto ${active + 1}`} index={active + 4} />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {Array.from({ length: CATERING_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Foto ${i + 1}`}
                className="cursor-pointer"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-copper' : 'w-3 bg-cream/40 hover:bg-cream/70'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Origins */

const ORIGINS = [
  {
    word: 'Mariscal',
    title: 'Mercado Mariscal',
    body: [
      'Lunes a Viernes 8 a 21 hs.',
      'Sábados 9 a 21 hs.',
      'Domingos 10 a 21 hs.',
    ],
  },
  {
    word: 'Del Sol',
    title: 'Del Sol',
    body: [
      'Lunes a Viernes 8 a 21 hs.',
      'Sábados y Domingos 9 a 21 hs.',
    ],
  },
  {
    word: 'Distrito',
    title: 'Distrito Perseverancia',
    body: ['Lunes a Domingos 9 a 21 hs.'],
  },
];

export function Origins() {
  return (
    <section id="origenes" className="bg-espresso-soft">
      {ORIGINS.map((o, i) => (
        <OriginPanel key={o.word} {...o} index={i} />
      ))}
    </section>
  );
}

function OriginPanel({
  word,
  title,
  body,
  index,
}: {
  word: string;
  title: string;
  body: string[];
  index: number;
}) {
  const bg = DEMO_BG[(index + 7) % DEMO_BG.length];
  return (
    <div className="relative min-h-[90vh] flex items-end overflow-hidden border-b border-line pb-16 md:pb-24">
      {/* Fondo de color */}
      <div className="absolute inset-0" style={{ backgroundColor: bg }} />
      <div className="absolute inset-0 bg-espresso/55" />

      <span
        aria-hidden
        style={{
          WebkitTextStroke: '1.5px #E0D3A6',
          color: 'transparent',
        }}
        className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 px-4 text-center font-display uppercase text-[clamp(2.25rem,13vw,15rem)] leading-none opacity-[0.45] whitespace-nowrap select-none"
      >
        {word}
      </span>

      <div className="relative mx-auto max-w-[1500px] w-full px-5 md:px-12">
        <div className={`max-w-[34rem] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="font-anton text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-cream">
              {title}
            </h2>
            <div className="text-cream-soft mt-6 leading-relaxed text-[17px] space-y-1">
              {body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Manifesto */

const MANIFESTO_LINES = [
  'Creemos que el café no es un trámite.',
  'Es un instante, una decisión diaria',
  'de hacer las cosas con cuidado.',
  'Por eso tostamos lento,',
  'compramos directo',
  'y servimos fresco.',
];

export function Manifesto() {
  return (
    <section id="manifiesto" className="bg-espresso py-28 md:py-44 px-5 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <p className="font-anton text-[13px] tracking-[0.45em] uppercase text-copper mb-10">
          Manifiesto
        </p>
        <p className="font-alexandria font-medium text-[clamp(1.8rem,5.5vw,4.6rem)] leading-[1.18]">
          {MANIFESTO_LINES.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.15, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="block text-cream"
            >
              {line}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- WhatsApp contact */

export function Subscribe() {
  return (
    <section id="suscripcion" className="bg-espresso-soft px-5 md:px-12 py-20 md:py-32 border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[760px] text-center"
      >
        <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
          Pedidos y consultas
        </p>
        <h2 className="font-anton uppercase text-[clamp(2.6rem,9vw,7rem)] leading-[0.84] text-cream">
          Contáctanos
        </h2>
        <p className="text-cream-soft mt-8 max-w-[44ch] mx-auto text-[16px] leading-relaxed">
          Para lo que sea, consultas de reservas, dejar una recomendación o
          saludarnos.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { local: 'Mariscal', tel: '595971366399' },
            { local: 'Del Sol', tel: '595972811800' },
          ].map(({ local, tel }) => (
            <a
              key={tel}
              href={`https://wa.me/${tel}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3D4336] text-[#E0D3A6] border border-line pl-7 pr-3 py-4 text-[13px] tracking-[0.16em] uppercase font-bold hover:bg-[#454c3c] transition-colors cursor-pointer"
            >
              WhatsApp · {local}
              <span className="grid place-items-center w-9 h-9 rounded-full bg-[#E0D3A6] text-[#3D4336] transition-transform duration-300 group-hover:rotate-12">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
