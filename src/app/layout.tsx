import { Metadata } from 'next';

import '@/style/globals.css';

import Favicon from '@/module/favicon';

export const metadata: Metadata = {
  title: 'Lukas Laudrain • Full-Stack Developer',
  description: 'Streamlining operations with custom web apps tailored to your business needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body>{children}</body>
    </html>
  );
}
