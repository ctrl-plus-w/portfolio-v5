import { easeInOut } from 'motion/react';

export const popAnimation = {
  initial: { opacity: 0, scale: 1.2, background: 'rgb(2 8 30 / 0)', color: 'rgb(2 8 30)' },
  animate: { opacity: 1, scale: 1, background: 'rgb(2 8 30 / 1)', color: 'rgb(254 248 241)' },
  transition: {
    opacity: { duration: 0.6, delay: 2.5, easings: easeInOut },
    scale: { duration: 0.6, delay: 2.5, easings: easeInOut },
    background: { duration: 0.5, delay: 2.7, easings: easeInOut },
    color: { duration: 0.3, delay: 2.7, easings: easeInOut },
  },
};

export const slideDownAnimation = {
  initial: { opacity: 0, translateY: '-50%' },
  whileInView: { opacity: 1, translateY: 0 },
  viewport: { once: true },
  transition: {
    opacity: { duration: 2, delay: 0.4 },
    translateY: { duration: 0.5, delay: 0.4 },
  },
};
