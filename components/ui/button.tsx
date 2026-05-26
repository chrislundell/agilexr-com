import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-coown-800 text-paper hover:bg-coown-700 active:bg-coown-900 shadow-card',
        gold:
          'bg-gold-500 text-coown-900 hover:bg-gold-400 active:bg-gold-600 shadow-card',
        electric:
          'bg-electric-600 text-white hover:bg-electric-500 active:bg-electric-700 shadow-card',
        secondary:
          'bg-paper text-coown-800 border border-coown-200 hover:border-coown-400 hover:bg-warm-100',
        ghost: 'text-coown-800 hover:bg-warm-100',
        outline:
          'bg-transparent text-paper border border-paper/40 hover:border-gold-400 hover:text-gold-300',
        link: 'text-coown-700 underline-offset-4 hover:underline'
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-7 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild: _asChild, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
