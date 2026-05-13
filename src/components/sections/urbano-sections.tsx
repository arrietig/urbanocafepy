'use client';

import Image from 'next/image';

export function FeaturedProducts() {
  const products = [
    {
      origin: 'Brasil · Minas Gerais',
      name: 'Cerrado Mineiro',
      notes: 'Cacao · Caramelo · Naranja',
      price: 'Gs. 95.000',
      tag: 'Nuevo',
      img: 'https://images.unsplash.com/photo-1559525839-d9acfd3919c4?w=900&q=80',
    },
    {
      origin: 'Colombia · Huila',
      name: 'San Agustín Lavado',
      notes: 'Panela · Manzana roja · Almendra',
      price: 'Gs. 110.000',
      img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=900&q=80',
    },
    {
      origin: 'Etiopía · Yirgacheffe',
      name: 'Konga Natural',
      notes: 'Frutilla · Jazmín · Durazno',
      price: 'Gs. 145.000',
      tag: 'Edición',
      tagDark: true,
      img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&q=80',
    },
    {
      origin: 'Blend · Casa',
      name: 'Asunción Blend',
      notes: 'Chocolate · Maní · Miel',
      price: 'Gs. 85.000',
      img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=900&q=80',
    },
  ];

  return (
    <section id="cafe" className="mx-auto max-w-[1400px] py-16 md:py-28 px-6 md:px-14">
      <SectionHead
        eyebrow="Lo más pedido esta semana"
        title="Nuestros granos"
        link="Ver toda la tienda"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((p) => (
          <article key={p.name} className="flex flex-col">
            <a className="relative block aspect-[4/5] overflow-hidden rounded bg-bg-alt group">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {p.tag && (
                <span
                  className={`absolute top-[14px] left-[14px] text-[10px] tracking-[0.18em] uppercase px-[10px] py-[6px] rounded-full font-medium ${
                    p.tagDark ? 'bg-ink text-bg' : 'bg-bg text-ink'
                  }`}
                >
                  {p.tag}
                </span>
              )}
            </a>
            <div className="pt-4">
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-[6px]">{p.origin}</p>
              <h3 className="font-serif text-[26px] leading-tight">{p.name}</h3>
              <p className="text-ink-soft text-[14px] mt-[6px] mb-[10px]">{p.notes}</p>
              <p className="text-[14px] font-medium">
                {p.price}
                <span className="text-muted font-normal"> / 250 g</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OriginShowcase() {
  const blocks = [
    {
      label: 'B R A S I L',
      title: ['Cerrado Mineiro,', 'una planicie alta'],
      body: 'Trabajamos directo con la familia Pereira en Patrocínio. Sus parcelas a más de 1.100 m, suelos volcánicos y secado lento al sol producen una taza redonda, dulce y con cuerpo notable. Compramos toda la cosecha 2026.',
      img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1400&q=80',
    },
    {
      label: 'C O L O M B I A',
      title: ['Huila,', 'cordillera y frescura'],
      body: 'San Agustín nos enseñó la paciencia del lavado. Don Edilberto fermenta 36 horas en tanques cerrados y seca en parabólico. El resultado: una taza limpia, viva y con final a manzana roja.',
      img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1400&q=80',
      reverse: true,
    },
    {
      label: 'E T I O P Í A',
      title: ['Yirgacheffe,', 'la cuna del café'],
      body: 'Konga es una estación que reúne a más de 600 productores pequeños. El proceso natural en cama africana resalta una taza floral, vibrante, con cuerpo de jugo y un final perfumado a jazmín.',
      img: 'https://images.unsplash.com/photo-1559056961-84ee08e1d7d8?w=1400&q=80',
    },
  ];

  return (
    <section className="bg-paper py-16 md:py-28 px-6 md:px-14">
      <div className="mx-auto max-w-[1400px]">
        {blocks.map((b, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-12 md:py-20 ${
              i < blocks.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <div className={`relative aspect-[4/5] overflow-hidden rounded ${b.reverse ? 'md:order-2' : ''}`}>
              <Image src={b.img} alt={b.title.join(' ')} fill sizes="50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[12px] tracking-[0.3em] text-muted mb-[18px]">{b.label}</p>
              <h2 className="font-serif text-[42px] md:text-[64px] leading-none mb-5">
                {b.title[0]}
                <br />
                <em className="italic text-accent">{b.title[1]}</em>
              </h2>
              <p className="text-ink-soft max-w-[480px] mb-5">{b.body}</p>
              <a
                href="#"
                className="text-[12px] tracking-[0.14em] uppercase font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-[6px]"
              >
                Explorar el origen <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Subscribe() {
  return (
    <section id="suscripcion" className="bg-ink text-bg py-16 md:py-28 px-6 md:px-14">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-8 md:gap-20 items-center">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-bg/70 mb-3">
            Suscripción Urbano
          </p>
          <h2 className="font-serif text-[44px] md:text-[72px] leading-none mb-5">
            El mejor café del mes,
            <br />
            <em className="italic text-[#d8c4a3]">en la puerta de tu casa.</em>
          </h2>
          <p className="text-bg/80 max-w-[520px] mb-5">
            Cada cuatro semanas tostamos y enviamos un café cuidadosamente elegido por nuestro
            equipo. Pausá, cambiá o cancelá cuando quieras.
          </p>
          <ul className="flex flex-col gap-[6px] text-bg/85 text-[15px] my-6">
            <li>· Granos tostados el día del envío</li>
            <li>· Curado por nuestro Q-Grader</li>
            <li>· 15 % de descuento sobre tienda</li>
            <li>· Envío gratis en Asunción y Gran Asunción</li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center px-7 py-[14px] rounded-full bg-bg text-ink text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-white transition-transform hover:-translate-y-[1px]"
          >
            Empezar la suscripción
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded">
          <Image
            src="https://images.unsplash.com/photo-1572119865084-43c285814d63?w=1200&q=80"
            alt="Bolsa de café Urbano"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function Methods() {
  const items = [
    {
      title: 'V60',
      desc: 'Una taza limpia y aromática en cuatro minutos.',
      img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&q=80',
    },
    {
      title: 'Espresso',
      desc: 'Receta, presión y rutina para tu máquina en casa.',
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',
    },
    {
      title: 'Prensa francesa',
      desc: 'Cuerpo, simpleza y ritual de la mañana.',
      img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80',
    },
  ];
  return (
    <section id="metodos" className="mx-auto max-w-[1400px] py-16 md:py-28 px-6 md:px-14">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted">Aprender a preparar</p>
        <h2 className="font-serif text-[40px] md:text-[72px] leading-none my-3">Métodos</h2>
        <p className="text-ink-soft max-w-[540px] mx-auto">
          Guías paso a paso para preparar el café en casa como en la barra.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((m) => (
          <a key={m.title} href="#" className="group block">
            <div className="relative aspect-square overflow-hidden rounded mb-4">
              <Image src={m.img} alt={m.title} fill sizes="33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-[30px] leading-tight">{m.title}</h3>
            <p className="text-ink-soft text-[15px] mt-[6px]">{m.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Spotlight() {
  return (
    <section id="historia" className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] min-h-[80vh]">
      <div className="relative aspect-[4/3] md:aspect-auto">
        <Image
          src="https://images.unsplash.com/photo-1545262810-77515befe149?w=1600&q=80"
          alt="Productor en finca"
          fill
          sizes="60vw"
          className="object-cover"
        />
      </div>
      <div className="bg-accent text-[#f5ebd8] px-7 md:px-20 py-14 md:py-24 flex flex-col justify-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#f5ebd8]/70 mb-4">
          Productor en foco
        </p>
        <h2 className="font-serif text-[40px] md:text-[64px] leading-none mb-5">
          Don Juliano
          <br />
          <em className="italic text-[#ffd9b3]">y la fermentación lenta</em>
        </h2>
        <p className="text-[#f5ebd8]/90 max-w-[520px] mb-5">
          Hace tres años Don Juliano dejó el secado convencional y empezó a fermentar la cereza por
          96 horas en tanques anaeróbicos. La primera vez que probamos su microlote en mesa de cata,
          lo compramos entero. Esta es la quinta cosecha que recibimos.
        </p>
        <a
          href="#"
          className="text-[12px] tracking-[0.14em] uppercase font-medium text-[#ffd9b3] hover:text-white transition-colors inline-flex items-center gap-[6px]"
        >
          Leer la historia completa <span>→</span>
        </a>
      </div>
    </section>
  );
}

export function Locations() {
  const locs = [
    {
      name: 'Villa Morra',
      addr: 'Senador Long c/ Lillo',
      hours: 'Lun a Dom · 7:00 — 21:00',
      img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1000&q=80',
    },
    {
      name: 'Centro Histórico',
      addr: 'Palma e/ Chile',
      hours: 'Lun a Sáb · 7:30 — 19:00',
      img: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?w=1000&q=80',
    },
    {
      name: 'Las Mercedes',
      addr: 'Avda. España c/ Brasilia',
      hours: 'Lun a Dom · 7:00 — 22:00',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80',
    },
  ];
  return (
    <section id="locales" className="mx-auto max-w-[1400px] py-16 md:py-28 px-6 md:px-14">
      <SectionHead eyebrow="Visitanos" title="Nuestros locales" link="Ver todos" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {locs.map((l) => (
          <article key={l.name} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded mb-4">
              <Image src={l.img} alt={l.name} fill sizes="33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
            <h3 className="font-serif text-[28px] leading-tight mb-[6px]">{l.name}</h3>
            <p className="text-ink-soft">
              {l.addr}
              <br />
              Asunción
            </p>
            <p className="text-[12px] tracking-[0.15em] uppercase text-muted mt-3">{l.hours}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Press() {
  const items = ['ABC Color', 'Última Hora', 'La Nación', 'Forbes Paraguay', 'Revista PLUS', '5 días'];
  const loop = [...items, ...items, ...items];
  return (
    <section className="bg-bg-alt py-12 border-y border-line text-center overflow-hidden">
      <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">Hablan de nosotros</p>
      <div className="overflow-hidden">
        <div className="marquee font-serif italic text-[26px] text-ink-soft gap-8 pr-8">
          {loop.map((t, i) => (
            <span key={i} className="px-4">
              {t}
              {' · '}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="bg-bg py-16 md:py-28 px-6 md:px-14 text-center">
      <div className="max-w-[720px] mx-auto">
        <h2 className="font-serif text-[40px] md:text-[64px] leading-none mb-3">
          Sumate a nuestra
          <br />
          <em className="italic text-accent">lista de tostado.</em>
        </h2>
        <p className="text-ink-soft mb-8">
          Avisos de nuevos lotes, cosechas limitadas y eventos en nuestros locales.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-2 max-w-[460px] mx-auto bg-paper border border-line rounded-full p-[6px]"
          onSubmit={(e) => {
            e.preventDefault();
            const btn = e.currentTarget.querySelector('button');
            if (btn) btn.textContent = 'Gracias ✓';
          }}
        >
          <input
            type="email"
            required
            placeholder="tu@correo.com"
            className="flex-1 bg-transparent border-0 px-[18px] py-3 outline-none text-ink"
          />
          <button
            type="submit"
            className="bg-ink text-bg rounded-full px-[22px] py-3 text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-accent transition-colors"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, link }: { eyebrow: string; title: string; link: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-end gap-4 md:gap-6 mb-10 md:mb-12 pb-5 border-b border-line">
      <div>
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted">{eyebrow}</p>
        <h2 className="font-serif text-[40px] md:text-[64px] leading-none mt-1">{title}</h2>
      </div>
      <div></div>
      <a
        href="#"
        className="text-[12px] tracking-[0.14em] uppercase font-medium text-muted hover:text-ink transition-colors inline-flex items-center gap-[6px] justify-self-start md:justify-self-end"
      >
        {link} <span>→</span>
      </a>
    </div>
  );
}
