'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { PromoBar, SiteHeader, SiteFooter } from '@/components/sections/site-chrome';
import {
  FeaturedProducts,
  OriginShowcase,
  Subscribe,
  Methods,
  Spotlight,
  Locations,
  Press,
  Newsletter,
} from '@/components/sections/urbano-sections';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-bg text-ink">
      <PromoBar />
      <SiteHeader />

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1920&auto=format&fit=crop"
        title="Urbano Café"
        date="Asunción · Paraguay"
        scrollToExpand="Hacé scroll para descubrir"
        textBlend
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-4">
            Café de especialidad
          </p>
          <h2 className="font-serif text-[40px] md:text-[64px] leading-none mb-6 text-ink">
            Tostado en Asunción,
            <br />
            <em className="italic text-accent">servido en taza desde 2019.</em>
          </h2>
          <p className="text-lg text-ink-soft mb-4">
            Trabajamos con pequeños productores de Brasil, Colombia y Etiopía. Cada lote llega
            trazado, lo tostamos cada semana en nuestro laboratorio de Villa Morra y lo servimos
            fresco en nuestras cafeterías.
          </p>
          <p className="text-lg text-ink-soft">
            Suscribite, conocé los métodos o visitanos abajo.
          </p>
        </div>
      </ScrollExpandMedia>

      <FeaturedProducts />
      <OriginShowcase />
      <Subscribe />
      <Methods />
      <Spotlight />
      <Locations />
      <Press />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
