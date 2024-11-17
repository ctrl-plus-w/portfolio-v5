import { easeInOut, MotionProps } from 'motion/react';

export const popAnimation = (delay: number): MotionProps => ({
  initial: { opacity: 0, scale: 1.2, background: 'rgb(2 8 30 / 0)', color: 'rgb(2 8 30)' },
  whileInView: { opacity: 1, scale: 1, background: 'rgb(2 8 30 / 1)', color: 'rgb(254 248 241)' },
  viewport: { once: true },
  transition: {
    opacity: { duration: 0.6, delay, easings: easeInOut },
    scale: { duration: 0.6, delay, easings: easeInOut },
    background: { duration: 0.5, delay: delay + 0.2, easings: easeInOut },
    color: { duration: 0.3, delay: delay + 0.2, easings: easeInOut },
  },
});

export const slideDownAnimation = (delay: number): MotionProps => ({
  initial: { opacity: 0, translateY: '-50%' },
  whileInView: { opacity: 1, translateY: 0 },
  viewport: { once: true },
  transition: {
    opacity: { duration: 2, delay },
    translateY: { duration: 0.5, delay },
  },
});
