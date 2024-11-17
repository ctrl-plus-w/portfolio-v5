import { ComponentProps, forwardRef } from 'react';

import { motion, MotionProps } from 'motion/react';

import { cn } from '@/util/style.util';

export interface Heading1Props extends Omit<ComponentProps<'h1'>, keyof MotionProps | 'ref'>, MotionProps {}

const Heading1 = forwardRef<HTMLHeadingElement, Heading1Props>(({ className, ...props }, ref) => {
  return <motion.h1 className={cn('text-5xl text-primary', className)} {...props} ref={ref} />;
});
Heading1.displayName = 'Heading1';

export default Heading1;
