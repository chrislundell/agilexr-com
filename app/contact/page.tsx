import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'Contact AgileXR — Book a Discovery Call',
  description:
    'Book a 30-minute discovery call with AgileXR. Tell us your project, stack, and timeline. We will tell you what the right team looks like and what it costs.',
  alternates: { canonical: '/contact' }
};

const contactPaths = [
  {
    label: 'Start a project',
    headline: 'New development engagement',
    description:
      'API, mobile, QA, cloud, SAP, or AWS. Tell us your stack, timeline, and team gap. We scope the right team size and send an engagement proposal within 48 hours.',
    cta: 'Book a 30-minute discovery call',
    href: 'mailto:info@agilexr.com?subject=New%20project%20inquiry',
    variant: 'gold' as const
  },
  {
    label: 'Staff augmentation',
    headline: 'Add engineers to an existing team',
    description:
      'One to five senior engineers embedded in your existing workflow. Same tools, same sprints, same standups. The fastest way to add capacity without a full outsourcing model.',
    cta: 'Staff augmentation inquiry',
    href: 'mailto:info@agilexr.com?subject=Staff%20augmentation%20inquiry',
    variant: 'primary' as const
  },
  {
    label: 'General inquiry',
    headline: 'Not sure which model fits',
    description:
      'Send us a brief description of your project and where you are stuck. We will respond within one business day and suggest the right conversation to have next.',
    cta: 'Send a note',
    href: 'mailto:info@agilexr.com?subject=General%20inquiry',
    variant: 'primary' as const
  }
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />

      <section className="bg-paper pt-16 pb-12 sm:pt-22 sm:pb-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="heading-xl mt-3">
              Three ways to start.
            </h1>
            <p className="body-lg mt-5 max-w-2xl">
              Tell us which one fits and the next step is clear. If none of these are the
              right shape, email us directly at{' '}
              <a href="mailto:info@agilexr.com" className="font-semibold text-coown-800 hover:underline">
                info@agilexr.com
              </a>{' '}
              and we will figure it out.
            </p>
          </div>
        </Container>
      </section>

      <Section background="warm">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactPaths.map((path) => (
            <div
              key={path.label}
              className="flex h-full flex-col rounded-lg border border-coown-100 bg-paper p-7 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                {path.label}
              </p>
              <h2 className="mt-3 font-display text-xl font-semibold tracking-tighter text-coown-800">
                {path.headline}
              </h2>
              <p className="mt-3 flex-1 text-base text-mist-700 leading-relaxed">
                {path.description}
              </p>
              <div className="mt-6">
                <a
                  href={path.href}
                  className={buttonVariants({ variant: path.variant, size: 'md' })}
                >
                  {path.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>What to expect</Eyebrow>
          <h2 className="heading-md mt-3">The discovery call in plain terms.</h2>
          <div className="mt-6 space-y-4 text-base text-mist-700 leading-relaxed">
            <p>
              Thirty minutes. No pitch, no slide deck. We ask three things: what are you
              building, what does your current team look like, and where is the gap. You
              tell us what you know and we tell you what we see.
            </p>
            <p>
              By the end of the call you will know whether AgileXR is the right fit for
              your project. If we are not, we will tell you and point you toward something
              that is. If we are, we send an engagement proposal within 48 hours.
            </p>
            <p>
              The proposal covers team composition, tech lead assignment, sprint cadence,
              communication structure, and total monthly cost. No surprise line items, no
              retainer fees on top of the engagement rate.
            </p>
          </div>
        </div>
      </Section>

      <Section background="warm" size="tight">
        <div className="max-w-2xl">
          <Eyebrow>Elsewhere</Eyebrow>
          <h2 className="heading-md mt-3">Other ways to reach us.</h2>
          <p className="body-base mt-3">
            Email is the fastest for a substantive inquiry. LinkedIn for quick public
            questions about our capabilities or team.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:info@agilexr.com"
              className="rounded-lg border border-coown-100 bg-paper p-5 hover:border-gold-400"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                Email
              </p>
              <p className="mt-2 text-base text-coown-800">info@agilexr.com</p>
            </a>
            <Link
              href="https://www.linkedin.com/company/agilexr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-coown-100 bg-paper p-5 hover:border-gold-400"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                LinkedIn
              </p>
              <p className="mt-2 text-base text-coown-800">linkedin.com/company/agilexr</p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
