import { ComponentProps } from 'react';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/util/style.util';

export type ButtonProps = ComponentProps<'button'>;

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn('flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-secondary', className)}
      {...props}
    >
      {children}
      <ArrowRightIcon className="h-6 w-6" />
    </button>
  );
};

export default Button;
