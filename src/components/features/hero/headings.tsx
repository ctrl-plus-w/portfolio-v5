'use client';

import React from 'react';

import Button from '@/element/button';
import Heading1 from '@/element/heading1';
import Heading2 from '@/element/heading2';

import useBlurAnimation from '@/hook/use-blur-animation';

import { popAnimation, slideDownAnimation } from '@/util/motion.util';

const Headings = () => {
  const { scope, mapChildren } = useBlurAnimation();

  return (
    <div className="flex flex-col items-start gap-5 pl-16 pt-16">
      <Heading2 {...slideDownAnimation(0.4)}>Lukas Laudrain • Full-Stack Developer</Heading2>

      <Heading1 ref={scope}>
        {mapChildren('Streamlining operations with custom web apps tailored to your business needs')}
      </Heading1>

      <Button className="mt-3" {...popAnimation(2.5)}>
        Let&apos;s talk
      </Button>
    </div>
  );
};

export default Headings;
