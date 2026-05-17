'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

/* ----------------------------------------------------------- El ritual */

const STAGES = [
  {
    n: '01',
    label: 'Origen',
    title: 'Cereza recogida a mano',
    body: 'Trabajamos directo con familias productoras a más de 1.100 m. Cada microlote llega trazado, sin intermediarios.',
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1400&auto=format&fit=crop',
  },
  {
    n: '02',
    label: 'Tueste',
    title: 'Fuego lento, perfil propio',
    body: 'Tostamos cada semana en Villa Morra. Un perfil distinto por origen, calibrado en mesa de cata antes de salir.',
    img: 'https://images.unsplash.com/photo-1515442261605-65987783cb6a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    n: '03',
    label: 'Molienda',
    title: 'Punto exacto, recién molido',
    body: 'Molemos al pedido según tu método. El aroma se libera en el momento, nunca antes de tiempo.',
    img: 'https://images.unsplash.com/photo-1521302200778-33500795e128?q=80&w=1400&auto=format&fit=crop',
  },
  {
    n: '04',
    label: 'Taza',
    title: 'El instante que importa',
    body: 'Dulzura larga, cuerpo aterciopelado y un final limpio. El ritual termina donde empieza tu mañana.',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop',
  },
];

export function Ritual() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(STAGES.length - 1, Math.floor(v * STAGES.length));
    setActive(idx);
  });

  return (
    <section id="ritual" ref={ref} className="relative bg-espresso" style={{ height: `${STAGES.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <motion.span
          className="absolute top-0 left-0 h-[3px] bg-copper z-20"
          style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
        />

        <div className="mx-auto max-w-[1500px] w-full px-5 md:px-12 pt-10 md:pt-16 flex items-center justify-between">
          <p className="text-[11px] tracking-[0.4em] uppercase text-copper">Del grano a la taza</p>
          <p className="text-[11px] tracking-[0.4em] uppercase text-muted">
            {STAGES[active].n} / 0{STAGES.length}
          </p>
        </div>

        <div className="flex-1 mx-auto max-w-[1500px] w-full px-5 md:px-12 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.n}
                aria-hidden={active !== i}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: active === i ? 0 : 30,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`${active === i ? 'relative' : 'absolute inset-0'} pointer-events-none`}
              >
                <span className="font-display text-[clamp(5rem,16vw,13rem)] leading-none text-stroke-copper block">
                  {s.n}
                </span>
                <p className="text-copper text-[12px] tracking-[0.4em] uppercase mt-2 mb-4">
                  {s.label}
                </p>
                <h3 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-cream max-w-[14ch]">
                  {s.title}
                </h3>
                <p className="text-cream-soft mt-5 max-w-[44ch] leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.n}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: active === i ? 1 : 1.1,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] w-full px-5 md:px-12 pb-10 md:pb-16 flex gap-3">
          {STAGES.map((s, i) => (
            <span
              key={s.n}
              className={`h-[2px] flex-1 transition-colors duration-500 ${
                i <= active ? 'bg-copper' : 'bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Bean catalog */

const BEANS = [
  {
    origin: 'Brasil · Minas Gerais',
    name: 'Cerrado Mineiro',
    notes: 'Cacao · Caramelo · Naranja',
    price: 'Gs. 95.000',
    tag: 'Nuevo',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1100&q=80&auto=format&fit=crop',
    big: true,
  },
  {
    origin: 'Colombia · Huila',
    name: 'San Agustín Lavado',
    notes: 'Panela · Manzana roja · Almendra',
    price: 'Gs. 110.000',
    img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=900&q=80&auto=format&fit=crop',
  },
  {
    origin: 'Etiopía · Yirgacheffe',
    name: 'Konga Natural',
    notes: 'Frutilla · Jazmín · Durazno',
    price: 'Gs. 145.000',
    tag: 'Edición',
    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&q=80&auto=format&fit=crop',
  },
  {
    origin: 'Blend · Casa',
    name: 'Asunción Blend',
    notes: 'Chocolate · Maní · Miel',
    price: 'Gs. 85.000',
    img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1100&q=80&auto=format&fit=crop',
    big: true,
  },
];

export function Beans() {
  return (
    <section id="cafe" className="bg-espresso py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-4">
              La carta de la semana
            </p>
            <h2 className="font-display uppercase text-[clamp(2.5rem,9vw,8rem)] leading-[0.85] text-cream">
              Nuestros
              <br />
              <span className="text-stroke">granos</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-cream-soft hover:text-cream transition-colors cursor-pointer"
          >
            Ver toda la tienda
            <span className="grid place-items-center w-10 h-10 rounded-full border border-line group-hover:border-copper group-hover:bg-copper group-hover:text-espresso transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M7 17 17 7M17 7H8M17 7v9" />
              </svg>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:auto-rows-fr">
          {BEANS.map((b) => (
            <motion.article
              key={b.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-roast cursor-pointer ${
                b.big ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative ${b.big ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                <Image
                  src={b.img}
                  alt={b.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
                {b.tag && (
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase px-3 py-[6px] rounded-full bg-copper text-espresso font-bold">
                    {b.tag}
                  </span>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-copper mb-2">
                    {b.origin}
                  </p>
                  <h3 className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-tight text-cream">
                    {b.name}
                  </h3>
                  <p className="text-cream-soft text-[14px] mt-1">{b.notes}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display text-[clamp(1.1rem,2vw,1.7rem)] text-cream leading-none">
                    {b.price}
                  </p>
                  <p className="text-[11px] text-muted mt-1 uppercase tracking-[0.14em]">
                    250 g
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Origins */

const ORIGINS = [
  {
    word: 'BRASIL',
    title: 'Cerrado Mineiro',
    body: 'Familia Pereira, Patrocínio. Suelos volcánicos y secado lento al sol producen una taza redonda, dulce y con cuerpo notable. Compramos toda la cosecha 2026.',
    img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1800&auto=format&fit=crop',
  },
  {
    word: 'COLOMBIA',
    title: 'Huila, lavado',
    body: 'Don Edilberto fermenta 36 horas en tanques cerrados y seca en parabólico. Una taza limpia, viva, con final a manzana roja.',
    img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1800&auto=format&fit=crop',
  },
  {
    word: 'ETIOPÍA',
    title: 'Yirgacheffe, natural',
    body: 'Konga reúne a 600 productores pequeños. Proceso natural en cama africana: floral, vibrante, con cuerpo de jugo y final a jazmín.',
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
  body: string;
  img: string;
  index: number;
}) {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <Image src={img} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-espresso/70" />
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display uppercase text-[clamp(4rem,22vw,20rem)] leading-none text-stroke opacity-20 whitespace-nowrap select-none"
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
            <p className="text-[12px] tracking-[0.45em] uppercase text-copper mb-4">
              Origen 0{index + 1}
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-cream">
              {title}
            </h2>
            <p className="text-cream-soft mt-6 leading-relaxed text-[16px]">{body}</p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 mt-8 text-[12px] tracking-[0.2em] uppercase text-cream hover:text-copper transition-colors cursor-pointer"
            >
              Explorar el origen
              <span className="h-px w-10 bg-current transition-all duration-300 group-hover:w-16" />
            </a>
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
              'Preguntas sobre suscripciones',
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

/* ----------------------------------------------------------- Locations */

const LOCS = [
  {
    name: 'Villa Morra',
    addr: 'Senador Long c/ Lillo',
    hours: '7:00 — 21:00',
    img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1000&q=80&auto=format&fit=crop',
  },
  {
    name: 'Centro Histórico',
    addr: 'Palma e/ Chile',
    hours: '7:30 — 19:00',
    img: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=1000&q=80&auto=format&fit=crop',
  },
  {
    name: 'Las Mercedes',
    addr: 'Avda. España c/ Brasilia',
    hours: '7:00 — 22:00',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80&auto=format&fit=crop',
  },
];

export function Locations() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="locales" className="bg-espresso-soft py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
          Visitanos en Asunción
        </p>
        <h2 className="font-display uppercase text-[clamp(2.5rem,9vw,8rem)] leading-[0.85] text-cream mb-12 md:mb-16">
          Tres
          <span className="text-stroke"> mesas</span>
        </h2>

        <div className="relative">
          {LOCS.map((l, i) => (
            <a
              key={l.name}
              href="#"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[5rem_1fr_auto_auto] items-center gap-5 md:gap-10 py-8 md:py-10 border-t border-line last:border-b transition-colors hover:bg-cream/[0.02] cursor-pointer"
            >
              <span className="font-display text-[clamp(1.2rem,2vw,1.8rem)] text-muted group-hover:text-copper transition-colors">
                0{i + 1}
              </span>
              <h3 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-none text-cream group-hover:translate-x-2 transition-transform duration-300">
                {l.name}
              </h3>
              <p className="hidden md:block text-cream-soft text-[15px]">{l.addr}</p>
              <p className="hidden md:block text-[12px] tracking-[0.2em] uppercase text-muted">
                Lun—Dom · {l.hours}
              </p>
              <p className="md:hidden col-start-2 text-cream-soft text-[14px] -mt-4">
                {l.addr} · {l.hours}
              </p>
            </a>
          ))}

          {/* Floating preview (desktop) */}
          <div
            className="hidden md:block pointer-events-none absolute right-[12%] top-1/2 -translate-y-1/2 w-[22rem] aspect-[4/5] rounded-2xl overflow-hidden transition-opacity duration-300"
            style={{ opacity: hover === null ? 0 : 1 }}
          >
            {LOCS.map((l, i) => (
              <div
                key={l.name}
                className="absolute inset-0 transition-opacity duration-300"
                style={{ opacity: hover === i ? 1 : 0 }}
              >
                <Image src={l.img} alt={l.name} fill sizes="22rem" className="object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/15 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Newsletter */

export function Newsletter() {
  return (
    <section className="bg-espresso px-5 md:px-12 py-24 md:py-36 text-center relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 font-display uppercase text-[clamp(4rem,20vw,18rem)] leading-none text-stroke opacity-[0.05] select-none"
      >
        TUESTE
      </span>
      <div className="relative mx-auto max-w-[760px]">
        <h2 className="font-serif text-[clamp(2.2rem,7vw,5.5rem)] leading-[1.05] text-cream">
          Sumate a la
          <br />
          <span className="italic text-copper">lista de tostado</span>
        </h2>
        <p className="text-cream-soft mt-6 mb-10 max-w-[44ch] mx-auto">
          Avisos de nuevos lotes, cosechas limitadas y eventos en nuestros locales.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const btn = e.currentTarget.querySelector('button');
            if (btn) btn.textContent = 'Gracias ✦';
          }}
        >
          <label htmlFor="nl-email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="tu@correo.com"
            className="flex-1 bg-roast border border-line rounded-full px-6 py-4 text-cream placeholder:text-muted outline-none focus:border-copper transition-colors"
          />
          <button
            type="submit"
            className="bg-cream text-espresso rounded-full px-8 py-4 text-[12px] tracking-[0.18em] uppercase font-bold hover:bg-copper transition-colors cursor-pointer"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
