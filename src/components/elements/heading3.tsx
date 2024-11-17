import { ComponentProps, forwardRef } from 'react';

import { motion, MotionProps } from 'motion/react';

import { cn } from '@/util/style.util';

export interface Heading3Props extends Omit<ComponentProps<'h3'>, keyof MotionProps | 'ref'>, MotionProps {}

const Heading3 = forwardRef<HTMLHeadingElement, Heading3Props>(({ className, ...props }, ref) => {
  return <motion.h3 className={cn('text-lg text-primary', className)} {...props} ref={ref} />;
});
Heading3.displayName = 'Heading3';

export default Heading3;
