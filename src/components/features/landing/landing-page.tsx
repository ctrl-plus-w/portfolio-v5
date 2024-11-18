'use client';

import { useCallback, useLayoutEffect, useRef } from 'react';

import Footer from '@/feature/footer/footer';
import HeroSection from '@/feature/hero/hero';

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const setupScrollBehavior = useCallback(() => {
    if (!heroRef.current || !footerRef.current) return () => undefined;

    const { height: mainHeight } = heroRef.current.getBoundingClientRect();
    const { height: footerHeight } = footerRef.current.getBoundingClientRect();

    document.body.style.height = mainHeight + footerHeight + 'px';

    const onScroll = () => {
      if (!heroRef.current || !footerRef.current) return;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop = mainHeight - window.innerHeight;

      const mainScrollTop = Math.min(scrollTop, maxScrollTop);
      heroRef.current.style.top = -mainScrollTop + 'px';

      const footerScrollTop = Math.max(scrollTop - mainScrollTop, 0);
      footerRef.current.style.top = window.innerHeight - footerScrollTop + 'px';
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    let cleanup = setupScrollBehavior();

    const onResize = () => {
      cleanup();

      cleanup = setupScrollBehavior();
    };

    window.addEventListener('resize', onResize);

    return () => {
      cleanup();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <HeroSection ref={heroRef} />
      <Footer ref={footerRef} />
    </>
  );
};

export default LandingPage;
