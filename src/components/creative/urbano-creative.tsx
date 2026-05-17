'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
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
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="/socios/cafe-quinto.jpg"
              alt="Café Quinto"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden md:order-1 order-2"
          >
            <video
              src="/socios/totem.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:order-2 order-1"
          >
            <h3 className="font-serif text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
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
      </div>
    </section>
  );
}

/* --------------------------------------------------- Carta — paneles slide */

const CATEGORIES = [
  { name: 'Café Calientes',       img: '/galeria/cafe-calientes.jpg' },
  { name: 'Café Fríos',           img: '/galeria/cafe-frios.jpg' },
  { name: 'Tés Gourmet',          img: '/galeria/tes-gourmet.jpg' },
  { name: 'Brunch',               img: '/galeria/brunch.jpg' },
  { name: 'Clásicos Urbanos',     img: '/galeria/clasicos-urbanos.jpg' },
  { name: 'Sándwiches',           img: '/galeria/sandwiches.jpg' },
  { name: 'Croissant Dulces',     img: '/galeria/croissant-dulces.jpg' },
  { name: 'Dulces',               img: '/galeria/dulces.jpg' },
  { name: 'Bebidas',              img: '/galeria/bebidas.jpg' },
  { name: 'Cervezas Artesanales', img: '/galeria/cervezas-artesanales.jpg' },
];

export function Beans() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxXRef = useRef(0);
  const [, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      maxXRef.current = Math.max(0, track.scrollWidth - window.innerWidth);
      setReady((v) => !v);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const x = useTransform(scrollYProgress, (v) => -v * maxXRef.current);

  return (
    <section
      id="cafe"
      ref={ref}
      className="relative bg-espresso"
      style={{ height: `${CATEGORIES.length * 42}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="mx-auto max-w-[1500px] w-full px-5 md:px-12 pt-24 md:pt-28 pb-6 md:pb-10">
          <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-4">
            Café hecho con amor desde el 2021
          </p>
          <h2 className="font-display uppercase text-[clamp(2rem,7vw,5.5rem)] leading-[0.85] text-cream">
            Nuestras <span className="text-stroke">delicias</span>
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex flex-1 gap-3 md:gap-4 px-5 md:px-12 pb-10"
        >
          {CATEGORIES.map((c, i) => (
            <article
              key={c.name}
              className="group relative shrink-0 w-[78vw] sm:w-[42vw] lg:w-[27vw] h-full overflow-hidden rounded-2xl bg-roast cursor-pointer"
            >
              {c.img ? (
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 27vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              ) : (
                <span
                  aria-hidden
                  className="absolute inset-0 grid place-items-center font-display text-stroke text-[clamp(5rem,16vw,12rem)] opacity-[0.08] select-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-center text-center">
                <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.6rem)] leading-tight text-cream">
                  {c.name}
                </h3>
                <span className="mt-5 inline-block border border-cream/40 text-cream text-[11px] tracking-[0.24em] uppercase px-7 py-3 rounded-full group-hover:bg-cream group-hover:text-espresso transition-colors">
                  Ver
                </span>
              </div>
            </article>
          ))}
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
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1800&auto=format&fit=crop',
  },
  {
    word: 'Del Sol',
    title: 'Del Sol',
    body: [
      'Lunes a Viernes 8 a 21 hs.',
      'Sábados y Domingos 9 a 21 hs.',
    ],
    img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1800&auto=format&fit=crop',
  },
  {
    word: 'Distrito',
    title: 'Distrito Perseverancia',
    body: ['Lunes a Domingos 9 a 21 hs.'],
    img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1800&auto=format&fit=crop',
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
  img,
  index,
}: {
  word: string;
  title: string;
  body: string[];
  img: string;
  index: number;
}) {
  return (
    <div className="relative min-h-[90vh] flex items-end overflow-hidden border-b border-line pb-16 md:pb-24">
      <div className="absolute inset-0">
        <Image src={img} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-espresso/70" />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 text-center font-display uppercase text-[clamp(4rem,22vw,20rem)] leading-none text-stroke opacity-20 whitespace-nowrap select-none"
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
            <h2 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-cream">
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
        <p className="text-[11px] tracking-[0.45em] uppercase text-copper mb-10">
          Manifiesto
        </p>
        <p className="font-serif text-[clamp(1.8rem,5.5vw,4.6rem)] leading-[1.18]">
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
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-center">
        <div>
          <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
            Pedidos y consultas
          </p>
          <h2 className="font-display uppercase text-[clamp(2.6rem,9vw,8rem)] leading-[0.84] text-cream">
            Escribinos
            <br />
            <span className="font-serif italic font-normal normal-case text-gold">
              por WhatsApp
            </span>
          </h2>
          <p className="text-cream-soft mt-8 max-w-[40ch] text-[16px] leading-relaxed">
            Pedidos, preguntas sobre los granos, envíos al interior o simplemente
            un saludo. Respondemos todos los días.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-[15px] text-cream-soft">
            {[
              'Asesoramiento de granos y métodos',
              'Pedidos y envíos a todo Paraguay',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-copper shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/595"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 mt-10 rounded-full bg-[#25D366] text-espresso pl-7 pr-2 py-2 text-[13px] tracking-[0.16em] uppercase font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Abrir WhatsApp
            <span className="grid place-items-center w-10 h-10 rounded-full bg-espresso text-[#25D366] transition-transform duration-300 group-hover:rotate-12">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1572119865084-43c285814d63?w=1200&q=80&auto=format&fit=crop"
            alt="Bolsa de café Urbano"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

