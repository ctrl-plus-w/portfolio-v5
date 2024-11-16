import { ComponentProps } from 'react';

import { cn } from '@/util/style.util';

export type Heading1Props = ComponentProps<'h1'>;

const Heading1 = ({ className, ...props }: Heading1Props) => {
  return <h1 className={cn('text-5xl text-primary', className)} {...props} />;
};

export default Heading1;
