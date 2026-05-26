import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'tight' | 'narrow';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        size === 'default' && 'container',
        size === 'tight' && 'container-tight',
        size === 'narrow' && 'container-narrow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'default' | 'tight' | 'narrow';
  background?: 'paper' | 'navy' | 'warm';
}

export function Section({
  size,
  background = 'paper',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'section-padding',
        background === 'paper' && 'bg-paper text-ink',
        background === 'navy' && 'bg-coown-950 text-paper',
        background === 'warm' && 'bg-warm-50 text-ink',
        className
      )}
      {...props}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
