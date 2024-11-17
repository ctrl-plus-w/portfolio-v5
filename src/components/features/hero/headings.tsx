'use client';

import React, { Children, ReactNode, useLayoutEffect } from 'react';

import { easeInOut, motion, stagger, useAnimate } from 'motion/react';

import Button from '@/element/button';
import Heading1 from '@/element/heading1';
import Heading2 from '@/element/heading2';

type IPropsWithChildren = { children: ReactNode };

const AnimatedBlurHeading = ({ children }: IPropsWithChildren) => {
  const [scope, animate] = useAnimate();

  const mappedChildren = Children.map(children, (child) => {
    if (typeof child !== 'string') return child;
    return child.split(' ').map((word, index) => (
      <motion.span initial={{ opacity: 0, filter: 'blur(10px)' }} key={index}>
        {word}{' '}
      </motion.span>
    ));
  });

  useLayoutEffect(() => {
    animate('span', { opacity: 1 }, { duration: 0.9, delay: stagger(0.13) });
    animate('span', { filter: 'blur(0)' }, { duration: 0.9, delay: stagger(0.15) });
  }, []);

  return <Heading1 ref={scope}>{mappedChildren}</Heading1>;
};

const AnimatedSlideHeading = ({ children }: IPropsWithChildren) => {
  return (
    <Heading2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ opacity: { duration: 2, delay: 0.4 }, translateY: { duration: 0.5, delay: 0.4 } }}
      variants={{
        hidden: { opacity: 0, translateY: '-50%' },
        visible: { opacity: 1, translateY: 0 },
      }}
    >
      {children}
    </Heading2>
  );
};

const AnimatedPopButton = ({ children }: IPropsWithChildren) => {
  return (
    <Button
      initial={{ opacity: 0, scale: 1.2, background: 'rgb(2 8 30 / 0)', color: 'rgb(2 8 30)' }}
      animate={{ opacity: 1, scale: 1, background: 'rgb(2 8 30 / 1)', color: 'rgb(254 248 241)' }}
      transition={{
        opacity: { duration: 0.6, delay: 2.5, easings: easeInOut },
        scale: { duration: 0.6, delay: 2.5, easings: easeInOut },
        background: { duration: 0.5, delay: 2.7, easings: easeInOut },
        color: { duration: 0.3, delay: 2.7, easings: easeInOut },
      }}
      className="mt-3"
    >
      {children}
    </Button>
  );
};

const Headings = () => {
  return (
    <div className="flex flex-col items-start gap-5 pl-16 pt-16">
      <AnimatedSlideHeading>Lukas Laudrain • Full-Stack Developer</AnimatedSlideHeading>

      <AnimatedBlurHeading>
        Streamlining operations with custom web apps tailored to your business needs
      </AnimatedBlurHeading>

      <AnimatedPopButton>Let&apos;s talk</AnimatedPopButton>
    </div>
  );
};

export default Headings;
