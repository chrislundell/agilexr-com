import * as React from 'react';
import { cn } from '@/lib/utils';

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p className={cn('eyebrow', className)} {...props}>
      {children}
    </p>
  );
}
