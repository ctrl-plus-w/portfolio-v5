import { ComponentProps } from 'react';

import { cn } from '@/util/style.util';

export type Heading3Props = ComponentProps<'h3'>;

const Heading3 = ({ className, ...props }: Heading3Props) => {
  return <h3 className={cn('text-lg text-primary', className)} {...props} />;
};

export default Heading3;
