import { Metadata } from 'next';

import LandingPage from '@/feature/landing/landing-page';

export const metadata: Metadata = {
  title: 'Lukas Laudrain • Full-Stack Developer',
  description: 'Streamlining operations with custom web apps tailored to your business needs.',
};

const Page = () => {
  return <LandingPage />;
};

export default Page;
