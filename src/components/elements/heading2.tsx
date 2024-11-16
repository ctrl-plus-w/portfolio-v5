import { ComponentProps } from 'react';

import { cn } from '@/util/style.util';

export type Heading2Props = ComponentProps<'h2'>;

const Heading2 = ({ className, ...props }: Heading2Props) => {
  return <h2 className={cn('text-lg text-primary/60', className)} {...props} />;
};

export default Heading2;
