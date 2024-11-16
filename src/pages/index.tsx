import type { ReactElement } from 'react';

import Link from 'next/link';

import { cn } from '@/util/style.util';

const HomePage = (): ReactElement => {
  return (
    <div
      className={cn(
        'grid place-items-center w-screen h-screen',
        'bg-gradient-to-br from-indigo-300 to-pink-200 font-mono',
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-8 p-32 rounded',
          'border-4 border-white backdrop-blur-3xl bg-white/10',
          'hover:transform hover:scale-110',
          'transition-all duration-300 ease-in-out',
        )}
      >
        <h1 className="text-white text-9xl font-bold">Hello world !</h1>

        <p className="text-4xl text-white italic">
          Template by{' '}
          <Link href="https://github.com/ctrl-plus-w" target="_blank">
            <span className="underline">Lukas Laudrain</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
