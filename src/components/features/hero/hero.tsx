import { forwardRef } from 'react';

import AnimatedGradient from '@/feature/gradient/animated-gradient';
import Headings from '@/feature/hero/headings';
import SelectedProjects from '@/feature/hero/selected-projects';

import BreakpointDisplay from '@/element/breakpoint-display';

export interface HeroSectionProps {}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((_, ref) => {
  return (
    <main
      ref={ref}
      className="fixed top-0 z-10 grid w-full grid-rows-[auto_1fr_auto] gap-x-32 gap-y-8 p-8 md:h-svh md:grid-cols-[2fr_1fr]"
    >
      <Headings />
      <SelectedProjects />

      <BreakpointDisplay breakpoints={['lg', 'xl', '2xl']}>
        <AnimatedGradient />
      </BreakpointDisplay>
    </main>
  );
});
HeroSection.displayName = 'HeroSection';

export default HeroSection;
