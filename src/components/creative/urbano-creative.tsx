'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────── Sección 03 · Socios / Partners */

export function Ritual() {
  return (
    <section id="seccion-03" className="bg-espresso py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px]">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase text-copper mb-12 md:mb-20"
        >
          Alianzas y socios
        </motion.p>

        {/* Socio 01 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Socio 01
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>Descripción del socio o partner. Contá brevemente la relación, qué aporta y cómo beneficia a tus clientes.</p>
              <p>Segunda línea de descripción. Podés ampliar un poco más el detalle de la alianza.</p>
              <p className="text-cream">Frase de cierre o call to action.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&q=80&auto=format&fit=crop"
              alt="Socio 01"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
          </motion.div>
        </div>

        {/* Socio 02 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden md:order-1 order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=1000&q=80&auto=format&fit=crop"
              alt="Socio 02"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:order-2 order-1"
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Socio 02
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>Descripción del segundo socio. Si tienen un video de presentación, irá en el bloque de la izquierda.</p>
              <p className="text-cream">Completá con los detalles más relevantes de esta alianza.</p>
            </div>
          </motion.div>
        </div>

        {/* Socio 03 */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] text-cream">
              Socio 03
            </h3>
            <div className="mt-7 space-y-5 text-cream-soft max-w-[46ch] leading-relaxed text-[16px]">
              <p>Tercer socio o alianza estratégica. Describí en pocas palabras qué hacen y por qué son importantes para tu marca.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=1000&q=80&auto=format&fit=crop"
              alt="Socio 03"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10 rounded-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ──────────────────────────────── Sección 01 · Productos / Menú */

const CATEGORIES = [
  { name: 'Categoría 01', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 02', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 03', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 04', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 05', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 06', img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 07', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 08', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 09', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=1000&q=80&auto=format&fit=crop' },
  { name: 'Categoría 10', img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=1000&q=80&auto=format&fit=crop' },
];

export function Beans() {
  return (
    <section id="seccion-01" className="bg-espresso py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1500px] w-full px-5 md:px-12 mb-10 md:mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-4">
          Tu eyebrow o subtítulo de sección
        </p>
        <h2 className="font-display uppercase text-[clamp(2rem,7vw,5.5rem)] leading-[0.85] text-cream">
          Título de <span className="text-stroke">sección</span>
        </h2>
      </div>

      <div className="flex gap-3 md:gap-4 px-5 md:px-12 overflow-x-auto snap-x snap-mandatory
        [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((c) => (
          <article
            key={c.name}
            className="group relative snap-start shrink-0 w-[78vw] sm:w-[44vw] lg:w-[30vw] h-[70vh] max-h-[680px] overflow-hidden rounded-2xl cursor-pointer"
          >
            <Image
              src={c.img}
              alt={c.name}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
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

/* ──────────────────────────────── Sección 02 · Servicio destacado */

const CATERING_IMGS = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=1000&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1000&q=80&auto=format&fit=crop',
];

export function Catering() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % CATERING_IMGS.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="seccion-02" className="bg-espresso py-20 md:py-32 px-5 md:px-12">
      <div className="mx-auto max-w-[1500px] grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
            Tu servicio o categoría especial
          </p>
          <h2 className="font-display uppercase text-[clamp(2.4rem,8vw,7rem)] leading-[0.85] text-cream">
            <span className="line-through decoration-copper decoration-[0.08em] text-cream/60">
              Servicio
            </span>
            <br />
            <span className="font-alexandria font-normal normal-case text-gold text-[clamp(1.8rem,5vw,4rem)]">
              Tu propuesta de valor aquí
            </span>
          </h2>
          <p className="mt-8 text-cream-soft max-w-[42ch] leading-relaxed text-[16px]">
            Describí este servicio o producto en dos o tres líneas. Resaltá lo que lo hace especial y por qué tu cliente debería elegirlo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden ring-1 ring-inset ring-cream/10"
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={CATERING_IMGS[active]}
                alt={`Servicio ${active + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {CATERING_IMGS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Foto ${i + 1}`} className="cursor-pointer">
                <span className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === active ? 'w-8 bg-copper' : 'w-3 bg-cream/40 hover:bg-cream/70'
                }`} />
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ──────────────────────────────── Sección 04 · Locales / Sucursales */

const LOCATIONS = [
  {
    word:  'Local',
    title: 'Local 01',
    body:  ['Dirección o nombre del local', 'Horario de atención', 'Días disponibles'],
    img:   'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&h=1200&q=80&auto=format&fit=crop',
  },
  {
    word:  'Local',
    title: 'Local 02',
    body:  ['Dirección o nombre del local', 'Horario de atención'],
    img:   'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&h=1200&q=80&auto=format&fit=crop',
  },
  {
    word:  'Local',
    title: 'Local 03',
    body:  ['Dirección o nombre del local', 'Horario de atención'],
    img:   'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1800&h=1200&q=80&auto=format&fit=crop',
  },
];

export function Origins() {
  return (
    <section id="seccion-04" className="bg-espresso-soft">
      {LOCATIONS.map((loc, i) => (
        <LocationPanel key={i} {...loc} index={i} />
      ))}
    </section>
  );
}

function LocationPanel({
  word, title, body, img, index,
}: {
  word: string; title: string; body: string[]; img: string; index: number;
}) {
  return (
    <div className="relative min-h-[90vh] flex items-end overflow-hidden border-b border-line pb-16 md:pb-24">
      <div className="absolute inset-0">
        <Image src={img} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-espresso/65" />
      </div>

      <span
        aria-hidden
        style={{ WebkitTextStroke: '1.5px #E0D3A6', color: 'transparent' }}
        className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 px-4 text-center font-display uppercase text-[clamp(2.25rem,13vw,15rem)] leading-none opacity-[0.45] whitespace-nowrap select-none"
      >
        {word} {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative mx-auto max-w-[1500px] w-full px-5 md:px-12">
        <div className={`max-w-[34rem] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}
          >
            <h2 className="font-anton text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-cream">
              {title}
            </h2>
            <div className="text-cream-soft mt-6 leading-relaxed text-[17px] space-y-1">
              {body.map((line) => <p key={line}>{line}</p>)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── Manifiesto / Historia */

const MANIFESTO_LINES = [
  'Acá va el mensaje central de tu marca.',
  'Lo que te hace diferente, lo que creés',
  'y por qué hacés lo que hacés.',
  'Tres o cuatro líneas poderosas',
  'que resuman tu identidad',
  'y conecten con tu cliente.',
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

/* ──────────────────────────────────────────────────── Contacto / CTA */

export function Subscribe() {
  return (
    <section id="contacto" className="bg-espresso-soft px-5 md:px-12 py-20 md:py-32 border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[760px] text-center"
      >
        <p className="text-[11px] tracking-[0.4em] uppercase text-copper mb-6">
          Sección de contacto o CTA
        </p>
        <h2 className="font-anton uppercase text-[clamp(2.6rem,9vw,7rem)] leading-[0.84] text-cream">
          Contáctanos
        </h2>
        <p className="text-cream-soft mt-8 max-w-[44ch] mx-auto text-[16px] leading-relaxed">
          Breve descripción del CTA. Invitá a tu cliente a escribirte, reservar o consultar lo que necesite.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { label: 'Botón de acción 01', href: '#' },
            { label: 'Botón de acción 02', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3D4336] text-[#E0D3A6] border border-line pl-7 pr-3 py-4 text-[13px] tracking-[0.16em] uppercase font-bold hover:bg-[#454c3c] transition-colors cursor-pointer"
            >
              {label}
              <span className="grid place-items-center w-9 h-9 rounded-full bg-[#E0D3A6] text-[#3D4336] transition-transform duration-300 group-hover:rotate-12">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
