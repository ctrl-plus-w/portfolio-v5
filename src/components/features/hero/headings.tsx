'use client';

import React from 'react';

import Button from '@/element/button';
import Heading1 from '@/element/heading1';
import Heading2 from '@/element/heading2';

import useBlurAnimation from '@/hook/use-blur-animation';

import { popAnimation, slideDownAnimation } from '@/util/motion.util';

const Headings = () => {
  const { scope, mapChildren } = useBlurAnimation();

  const onClick = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="flex flex-col items-start gap-5 pt-4 md:pl-16 md:pt-16">
      <Heading2 {...slideDownAnimation(0.4)}>Lukas Laudrain • Full-Stack Developer</Heading2>

      <Heading1 ref={scope}>
        {mapChildren('Streamlining operations with custom web apps tailored to your business needs')}
      </Heading1>

      <Button onClick={onClick} className="mt-3" {...popAnimation(2.5)}>
        Let&apos;s talk
      </Button>
    </div>
  );
};

export default Headings;
