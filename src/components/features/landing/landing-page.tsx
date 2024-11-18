'use client';

import { useLayoutEffect, useRef } from 'react';

import AnimatedGradient from '@/feature/gradient/animated-gradient';
import Headings from '@/feature/hero/headings';
import SelectedProjects from '@/feature/hero/selected-projects';

import BreakpointDisplay from '@/element/breakpoint-display';

const LandingPage = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!mainRef.current || !footerRef.current) return;

    const { height: mainHeight } = mainRef.current.getBoundingClientRect();
    const { height: footerHeight } = footerRef.current.getBoundingClientRect();

    document.body.style.height = mainHeight + footerHeight + 'px';

    const onScroll = () => {
      if (!mainRef.current || !footerRef.current) return;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop = mainHeight - window.innerHeight;

      const mainScrollTop = Math.min(scrollTop, maxScrollTop);
      mainRef.current.style.top = -mainScrollTop + 'px';

      const footerScrollTop = Math.max(scrollTop - mainScrollTop, 0);
      footerRef.current.style.top = window.innerHeight - footerScrollTop + 'px';
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <main
        ref={mainRef}
        className="fixed top-0 z-10 grid w-full grid-rows-[auto_1fr_auto] gap-x-32 gap-y-8 p-8 md:h-svh md:grid-cols-[2fr_1fr]"
      >
        <Headings />
        <SelectedProjects />

        <BreakpointDisplay breakpoints={['lg', 'xl', '2xl']}>
          <AnimatedGradient />
        </BreakpointDisplay>
      </main>

      <footer ref={footerRef} className="fixed top-[100svh] z-20 h-svh w-svw bg-primary"></footer>
    </>
  );
};

export default LandingPage;
