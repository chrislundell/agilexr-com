import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <section className="bg-paper">
      <Container className="py-32 sm:py-40">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">404</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-tighter text-coown-800">
            Page not found.
          </h1>
          <p className="mt-5 text-lg text-mist-700 leading-relaxed">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className={buttonVariants({ variant: 'gold', size: 'lg' })}>
              Go home
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
