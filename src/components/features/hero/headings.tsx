import React, { Children, ReactNode, useLayoutEffect } from 'react';

import { motion, stagger, useAnimate } from 'motion/react';

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

const Headings = () => {
  return (
    <div className="flex flex-col items-start gap-5 pl-16 pt-16">
      <AnimatedSlideHeading>Lukas Laudrain • Full-Stack Developer</AnimatedSlideHeading>

      <AnimatedBlurHeading>
        Streamlining operations with custom web apps tailored to your business needs
      </AnimatedBlurHeading>

      <Button
        initial={{ opacity: 0, color: 'rgb(254 248 241 / 0)' }}
        animate={{ opacity: 1, color: 'rgb(254 248 241 / 1)' }}
        transition={{ opacity: { duration: 0.7, delay: 2.1, easings: 'easeIn' }, color: { duration: 0.7, delay: 2.3 } }}
        className="mt-3"
      >
        Let&apos;s talk
      </Button>
    </div>
  );
};

export default Headings;
