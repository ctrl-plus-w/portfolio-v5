import { forwardRef } from 'react';

import AnimatedGradient from '@/feature/gradient/animated-gradient';
import Headings from '@/feature/hero/headings';
import SelectedProjects from '@/feature/hero/selected-projects';

import BreakpointDisplay from '@/element/breakpoint-display';

import { cn } from '@/util/style.util';

export interface HeroSectionProps {}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((_, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        'fixed top-0 z-10 w-full bg-secondary p-8 md:min-h-[100svh]',
        'grid grid-rows-[auto_auto_auto] gap-x-32 gap-y-8 md:grid-cols-[2fr_1fr]',
      )}
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
