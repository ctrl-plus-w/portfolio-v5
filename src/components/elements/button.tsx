import { ComponentProps } from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { motion, MotionProps } from 'motion/react';

import { cn } from '@/util/style.util';

type MotionPropsWithoutChildren = Omit<MotionProps, 'children'>;
export interface ButtonProps
  extends Omit<ComponentProps<'button'>, keyof MotionPropsWithoutChildren | 'ref'>,
    MotionPropsWithoutChildren {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <motion.button
      className={cn('flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-secondary', className)}
      {...props}
    >
      {children}
      <ArrowRightIcon className="h-6 w-6" />
    </motion.button>
  );
};

export default Button;
