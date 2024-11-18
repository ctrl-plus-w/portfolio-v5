'use client';

import { memo, ReactNode } from 'react';

import useBreakpoint, { Config } from 'use-breakpoint';

const BREAKPOINTS: Config = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export interface BreakpointDisplayProps {
  breakpoints: (keyof typeof BREAKPOINTS)[];
  children?: ReactNode;
}

const BreakpointDisplay = memo(({ breakpoints, children }: BreakpointDisplayProps) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile');
  return breakpoints.includes(breakpoint) ? children : <></>;
});
BreakpointDisplay.displayName = 'BreakpointDisplay';

export default BreakpointDisplay;
