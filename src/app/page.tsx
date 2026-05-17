'use client';

import { useEffect } from 'react';
import { SiteHeader, SiteFooter } from '@/components/sections/site-chrome';
import { Hero } from '@/components/creative/hero';
import {
  Ritual,
  Beans,
  Catering,
  Origins,
  Manifesto,
  Subscribe,
} from '@/components/creative/urbano-creative';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top" className="grain min-h-screen bg-espresso text-cream">
      <SiteHeader />
      <main>
        <Hero />
        <Beans />
        <Catering />
        <Ritual />
        <Origins />
        <Manifesto />
        <Subscribe />
      </main>
      <SiteFooter />
    </div>
  );
}
