import { ComponentProps } from 'react';

import { cn } from '@/util/style.util';

export type TextProps = ComponentProps<'p'>;

const Text = ({ className, ...props }: TextProps) => {
  return <p className={cn('text-primary/70', className)} {...props} />;
};

export default Text;
