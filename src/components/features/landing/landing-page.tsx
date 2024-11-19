'use client';

import { useCallback, useLayoutEffect, useRef } from 'react';

import { useAnimationFrame } from 'motion/react';

import Footer from '@/feature/footer/footer';
import HeroSection from '@/feature/hero/hero';

import { lerp } from '@/util/three.util';

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const heroTop = useRef(0);
  const footerTop = useRef(0);
  const footerScrollPercentage = useRef(0);

  const setupScrollBehavior = useCallback(() => {
    if (!heroRef.current || !footerRef.current) return () => undefined;

    const { height: mainHeight } = heroRef.current.getBoundingClientRect();
    const { height: footerHeight } = footerRef.current.getBoundingClientRect();

    document.body.style.height = mainHeight + footerHeight + 'px';

    const onScroll = () => {
      if (!heroRef.current || !footerRef.current) return;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop = mainHeight - window.innerHeight;

      const { height: footerHeight } = footerRef.current.getBoundingClientRect();

      const mainScrollTop = Math.min(scrollTop, maxScrollTop);
      heroTop.current = -mainScrollTop;

      const footerScrollTop = Math.max(scrollTop - mainScrollTop, 0);
      footerTop.current = window.innerHeight - footerScrollTop;

      footerScrollPercentage.current = footerScrollTop / footerHeight;
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

  useAnimationFrame((timestamp) => {
    const enableLerp = timestamp > 100;
    if (!heroRef.current || !footerRef.current) return;

    const ifNaN = (value: number, fallback = 0) => (isNaN(value) ? fallback : value);
    const px = (value: number) => `${value}px`;

    // --- Hero section
    const currentHeroTop = ifNaN(parseFloat(heroRef.current.style.top));
    const newHeroTopValue = enableLerp ? lerp(currentHeroTop, heroTop.current, 0.1) : heroTop.current;
    heroRef.current.style.top = px(newHeroTopValue);

    // --- Footer
    const currentFooterTop = ifNaN(parseFloat(footerRef.current.style.top));
    const newFooterTopValue = enableLerp ? lerp(currentFooterTop, footerTop.current, 0.1) : footerTop.current;
    footerRef.current.style.top = px(newFooterTopValue);

    // > Blur
    const blur = footerScrollPercentage.current * 10;
    const currentHeroBlur = ifNaN(parseFloat(heroRef.current.style.filter.replace('blur(', '').replace('px)', '')));
    const newBlurValue = enableLerp ? lerp(currentHeroBlur, blur, 0.1) : blur;
    heroRef.current.style.filter = `blur(${px(newBlurValue)})`;

    // Box Shadow
    const shadowBlur = 64 * footerScrollPercentage.current;
    const opacity = footerScrollPercentage.current / 2;
    footerRef.current.style.boxShadow = `0 -20px ${px(shadowBlur)} rgb(var(--color-primary-darker) / ${opacity})`;
  });

  return (
    <>
      <HeroSection ref={heroRef} />
      <Footer ref={footerRef} />
    </>
  );
};

export default LandingPage;
