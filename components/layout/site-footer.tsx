import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Wordmark } from '@/components/brand/wordmark';
import { siteConfig } from '@/lib/utils';

export function SiteFooter() {
  return (
    <footer className="border-t border-coown-100 bg-paper">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark className="text-xl" />
            <p className="mt-4 max-w-sm text-sm text-mist-500 leading-relaxed">
              World-class offshore software development and outsourcing. Mobile apps,
              APIs, QA, cloud infrastructure, and SAP — delivered on schedule.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
              Site
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mist-500">
              <li><Link href="/services" className="hover:text-coown-800">Services</Link></li>
              <li><Link href="/about" className="hover:text-coown-800">About</Link></li>
              <li><Link href="/contact" className="hover:text-coown-800">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mist-500">
              <li><Link href="/services#api" className="hover:text-coown-800">API Development</Link></li>
              <li><Link href="/services#mobile" className="hover:text-coown-800">Mobile App Development</Link></li>
              <li><Link href="/services#qa" className="hover:text-coown-800">QA Testing</Link></li>
              <li><Link href="/services#cloud" className="hover:text-coown-800">Web Hosting & Cloud</Link></li>
              <li><Link href="/services#sap" className="hover:text-coown-800">SAP Implementation</Link></li>
              <li><Link href="/services#aws" className="hover:text-coown-800">AWS Configuration</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-coown-100 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-mist-500">
          <p>© {new Date().getFullYear()} AgileXR. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coown-800"
            >
              LinkedIn
            </Link>
            <p>agilexr.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
