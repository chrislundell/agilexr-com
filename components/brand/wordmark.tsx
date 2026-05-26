import { cn } from '@/lib/utils';

interface WordmarkProps {
  className?: string;
  variant?: 'navy' | 'paper';
}

export function Wordmark({ className, variant = 'navy' }: WordmarkProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-display font-bold uppercase tracking-[0.04em] leading-none',
        variant === 'navy' ? 'text-coown-800' : 'text-paper',
        className
      )}
      aria-label="AgileXR"
    >
      <span>Agile</span>
      <WordmarkChevron />
      <span>XR</span>
    </span>
  );
}

function WordmarkChevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline-block text-electric-500"
      style={{ width: '0.6em', height: '0.6em', margin: '0 0.12em' }}
    >
      <polyline points="5 14 12 8 19 14" />
    </svg>
  );
}
