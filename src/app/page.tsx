import { Metadata } from 'next';

import AnimatedGradient from '@/feature/gradient/animated-gradient';
import Headings from '@/feature/hero/headings';
import SelectedProjects from '@/feature/hero/selected-projects';

export const metadata: Metadata = {
  title: 'Lukas Laudrain • Full-Stack Developer',
  description: 'Streamlining operations with custom web apps tailored to your business needs.',
};

const Page = () => {
  return (
    <div className="w-svh h-svh overflow-y-scroll overscroll-none">
      <main className="sticky top-0 z-10 grid h-svh w-full grid-cols-[2fr_1fr] grid-rows-[auto_1fr_auto] gap-x-32 p-8">
        <Headings />
        <SelectedProjects />

        <AnimatedGradient />
      </main>

      <footer className="relative z-20 h-svh bg-primary"></footer>
    </div>
  );
};

export default Page;
