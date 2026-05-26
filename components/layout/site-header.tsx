import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Wordmark } from '@/components/brand/wordmark';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-coown-100 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="AgileXR home">
          <Wordmark className="text-2xl sm:text-3xl" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist-500 hover:text-coown-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={buttonVariants({ variant: 'gold', size: 'md' })}
          >
            Get a quote
          </Link>
        </div>
      </Container>
    </header>
  );
}
