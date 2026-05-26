import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Wordmark } from '@/components/brand/wordmark';
import { FaqJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'AgileXR — World-Class Offshore Software Development & Outsourcing',
  description:
    'AgileXR delivers senior offshore development teams for mobile apps, API development, QA testing, AWS, and SAP. Build faster without the full-time overhead.',
  alternates: { canonical: '/' }
};

const services = [
  {
    id: 'api',
    label: 'API Development',
    headline: 'REST, GraphQL, and microservices built for production.',
    description:
      'We design and ship APIs that power your product at scale — clean contracts, versioning, authentication, and documentation included from day one.',
    href: '/services#api'
  },
  {
    id: 'mobile',
    label: 'Mobile App Development',
    headline: 'iOS, Android, and cross-platform with React Native.',
    description:
      'Native performance, App Store approval experience, and a QA pass before every release. We ship mobile apps that users keep.',
    href: '/services#mobile'
  },
  {
    id: 'qa',
    label: 'QA Testing',
    headline: 'Systematic testing that finds the bug before the user does.',
    description:
      'Manual and automated QA across functional, regression, performance, and security surfaces. Your release checklist becomes someone else\'s job.',
    href: '/services#qa'
  },
  {
    id: 'hosting',
    label: 'Web Hosting',
    headline: 'Managed hosting built around uptime and security.',
    description:
      'Configured, monitored, and maintained so your team stops worrying about infrastructure and starts shipping product.',
    href: '/services#cloud'
  },
  {
    id: 'sap',
    label: 'SAP Implementation',
    headline: 'SAP rollouts that stay on schedule and on scope.',
    description:
      'Implementation, migration, and integration by certified SAP consultants who have run these projects before and know where they break.',
    href: '/services#sap'
  },
  {
    id: 'aws',
    label: 'AWS Configuration',
    headline: 'Right-sized AWS infrastructure for growth-stage companies.',
    description:
      'Architecture review, environment setup, cost optimization, and ongoing operations — so your cloud bill matches your usage, not your ambition.',
    href: '/services#aws'
  }
];

const stats = [
  { value: '100+', label: 'Projects delivered' },
  { value: '50+', label: 'Senior engineers' },
  { value: '8+', label: 'Years operating' },
  { value: '3', label: 'Global delivery centers' }
];

const differentiators = [
  {
    title: 'Senior engineers, not junior outsourcing.',
    body:
      'Every engagement is staffed with engineers who have shipped production software. We do not use your project to train anyone.'
  },
  {
    title: 'Agile methodology built in.',
    body:
      'Two-week sprints, daily standups in your timezone, and a shared backlog you own. The process is yours, not ours.'
  },
  {
    title: 'Transparent communication.',
    body:
      'One point of contact, weekly written status reports, and a Slack channel where your team can reach engineers directly. No account manager middlemen.'
  },
  {
    title: 'Full-spectrum capability.',
    body:
      'Frontend, backend, mobile, QA, cloud, and SAP in one firm. You do not need six vendors to build one product.'
  }
];

const howItWorksSteps = [
  {
    step: '01',
    title: 'Discovery call.',
    body: 'Thirty minutes. We ask about your stack, timeline, and where your current team has gaps. You get a clear picture of fit before any commitment.'
  },
  {
    step: '02',
    title: 'Team scoping and match.',
    body: 'We identify the right engineers for your specific project — tech stack, domain experience, and timezone overlap — and present the team for your review.'
  },
  {
    step: '03',
    title: 'Sprint kickoff within two weeks.',
    body: 'Onboarding, access setup, and the first sprint kicked off in under 14 days. Your team is building before most vendors finish their proposal.'
  }
];

const faqs = [
  {
    q: 'What does offshore development cost?',
    a: 'Engagements typically run 40 to 80 percent below equivalent US or Western European rates for the same seniority. We share specific rates on the discovery call once we understand your scope. We do not post blanket rate cards because the right team size and composition matters more than the hourly number.'
  },
  {
    q: 'How do you handle time zone differences?',
    a: 'Our engineers work a four-hour overlap window with US business hours as a standard. For clients who need more overlap, we staff accordingly. Daily async standups and a shared Slack channel keep communication continuous regardless of timezone.'
  },
  {
    q: 'What tech stacks do you cover?',
    a: 'Node.js, Python, Java, .NET, Go, React, React Native, iOS (Swift), Android (Kotlin), PostgreSQL, MongoDB, AWS, Azure, GCP, SAP — and most of the ecosystems built around each. If you have a specific stack, ask us on the discovery call. We will tell you honestly if we have the right depth.'
  },
  {
    q: 'Do you work with startups or enterprises?',
    a: 'Both. We work best with growth-stage companies — typically Series A through Series C — who need to ship fast, and with enterprise teams who have a specific capability gap they need filled quickly. We are not the right fit for very early pre-product ideation.'
  },
  {
    q: 'What is the minimum engagement size?',
    a: 'A single senior engineer on a three-month minimum is our floor. Most clients start there and expand as the engagement proves out. We do not take two-week projects or single-feature sprints.'
  },
  {
    q: 'Who manages the team day to day?',
    a: 'You do. We provide a dedicated technical lead on every engagement who is your primary point of contact and runs the team internally. You set the priorities, own the backlog, and approve the releases. We make the work happen on schedule.'
  }
];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-coown-950">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-coown-900 via-coown-800 to-coown-950" />
        <Container className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40">
          <div className="max-w-4xl">
            <Wordmark variant="paper" className="text-4xl sm:text-5xl lg:text-6xl" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
              Offshore Development & Outsourcing
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-paper">
              Build faster with world-class engineering teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85">
              Senior engineers across mobile, API, QA, cloud, and SAP. Agile process,
              transparent communication, and a sprint kickoff in under two weeks.
              The output of a large team at the cost of one hire.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'gold', size: 'xl' })}
              >
                Book a discovery call
              </Link>
              <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'xl' })}>
                See our services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="border-b border-coown-100 bg-warm-50">
        <Container className="py-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold tracking-tighter text-coown-800">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-mist-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <Section background="paper">
        <div className="max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="heading-lg mt-3">Six capabilities. One team.</h2>
          <p className="body-lg mt-4">
            Most development shops do one or two things. We do the full stack —
            API through mobile through QA through cloud through SAP. Pick the
            capabilities you need and we staff accordingly.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.id}
              href={svc.href}
              className="group flex flex-col rounded-lg border border-coown-100 bg-warm-50 p-7 shadow-card hover:border-gold-400 hover:shadow-elevated transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                {svc.label}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tighter text-coown-800">
                {svc.headline}
              </h3>
              <p className="mt-3 flex-1 text-base text-mist-700 leading-relaxed">
                {svc.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-coown-800 group-hover:underline">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why AgileXR */}
      <Section background="warm">
        <div className="max-w-2xl">
          <Eyebrow>Why AgileXR</Eyebrow>
          <h2 className="heading-md mt-3">Four things that separate us from the alternatives.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-lg border border-coown-100 bg-paper p-7 shadow-card"
            >
              <h3 className="font-display text-xl font-semibold tracking-tighter text-coown-800">
                {d.title}
              </h3>
              <p className="mt-3 text-base text-mist-700 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section background="paper">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="heading-md mt-3">From discovery call to first sprint in under two weeks.</h2>
          <p className="body-base mt-3">
            No multi-month procurement process. No ten-page statements of work before
            anyone writes a line of code. Three steps and you are building.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {howItWorksSteps.map((s) => (
            <div key={s.step} className="relative">
              <p className="font-display text-5xl font-bold tracking-tighter text-coown-100 select-none">
                {s.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tighter text-coown-800">
                {s.title}
              </h3>
              <p className="mt-3 text-base text-mist-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech stacks */}
      <Section background="warm" size="tight">
        <div className="max-w-2xl">
          <Eyebrow>Tech stacks</Eyebrow>
          <h2 className="heading-md mt-3">The technologies we ship in every day.</h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            'Node.js', 'Python', 'Java', '.NET', 'Go',
            'React', 'React Native', 'Swift (iOS)', 'Kotlin (Android)',
            'PostgreSQL', 'MongoDB', 'Redis',
            'AWS', 'Azure', 'GCP',
            'Docker', 'Kubernetes', 'Terraform',
            'SAP S/4HANA', 'SAP ECC', 'SAP BTP',
            'REST', 'GraphQL', 'gRPC'
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-coown-100 bg-paper px-3 py-1.5 text-sm font-medium text-coown-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="paper" size="tight">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="heading-md mt-3">Six questions, straight answers.</h2>
        </div>
        <div className="mt-8 divide-y divide-coown-100">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-5">
              <p className="font-display font-semibold tracking-tight text-coown-800">{q}</p>
              <p className="mt-2 text-base text-mist-700 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-coown-950">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tighter text-paper">
              Ready to build faster?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-paper/80 leading-relaxed">
              Book a thirty-minute discovery call. We will tell you what the right
              team looks like for your project and what it costs. No pitch, no proposal
              before the call.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'gold', size: 'xl' })}
              >
                Book a discovery call
              </Link>
              <Link href="/services" className={buttonVariants({ variant: 'outline', size: 'xl' })}>
                See all services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
