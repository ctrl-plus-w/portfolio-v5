import { ComponentProps, forwardRef } from 'react';

import { motion, MotionProps } from 'motion/react';

import { cn } from '@/util/style.util';

export interface Heading2Props extends Omit<ComponentProps<'h2'>, keyof MotionProps | 'ref'>, MotionProps {}

const Heading2 = forwardRef<HTMLHeadingElement, Heading2Props>(({ className, ...props }, ref) => {
  return <motion.h2 className={cn('text-lg text-primary/60', className)} {...props} ref={ref} />;
});
Heading2.displayName = 'Heading2';

export default Heading2;
