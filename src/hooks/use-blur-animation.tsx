import { Children, ReactNode, useCallback, useLayoutEffect } from 'react';

import { motion, stagger, useAnimate } from 'motion/react';

const useBlurAnimation = () => {
  const [scope, animate] = useAnimate();

  const mapChildren = useCallback(
    (children: ReactNode) =>
      Children.map(children, (child) => {
        if (typeof child !== 'string') return child;
        return child.split(' ').map((word, index) => (
          <motion.span initial={{ opacity: 0, filter: 'blur(10px)' }} key={index}>
            {word}{' '}
          </motion.span>
        ));
      }),
    [],
  );

  useLayoutEffect(() => {
    animate('span', { opacity: 1 }, { duration: 0.9, delay: stagger(0.13) });
    animate('span', { filter: 'blur(0)' }, { duration: 0.9, delay: stagger(0.15) });
  }, []);

  return { scope, mapChildren };
};

export default useBlurAnimation;
