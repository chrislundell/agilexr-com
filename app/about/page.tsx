import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'About AgileXR — Offshore Development Team, Senior Engineers',
  description:
    'Senior offshore software engineers for mobile, API, QA, cloud, and SAP. AgileXR deploys inside your existing workflow with full agile process.',
  alternates: { canonical: '/about' }
};

const values = [
  {
    title: 'Senior engineers only.',
    body:
      'We staff every engagement with engineers who have shipped production software at scale. Your project is not a training ground. If we cannot find the right seniority for your stack, we tell you on the discovery call, not after kickoff.'
  },
  {
    title: 'Your process, not ours.',
    body:
      'We work inside your existing tools — Jira, Linear, GitHub, Slack, whatever your team already uses. We do not impose a proprietary framework. Agile methodology means two-week sprints, shared backlog ownership, and a demo at the end of every cycle.'
  },
  {
    title: 'Transparent communication.',
    body:
      'Weekly written status reports, a shared Slack channel with direct engineer access, and one dedicated technical lead as your primary point of contact. No account manager layer between you and the people doing the work.'
  },
  {
    title: 'Ownership over delivery.',
    body:
      'We co-own the outcome, not just the hours. If a sprint is off track, we name it before the demo, not after. If a scoping estimate is wrong, we tell you before you find out from a missed deadline.'
  },
  {
    title: 'Build to hand off.',
    body:
      'Every engagement is documented and code-reviewed with the assumption that your internal team, or a different team, will inherit the work. No proprietary tooling, no knowledge silos, no lock-in.'
  }
];

const capabilities = [
  'API development (REST, GraphQL, microservices)',
  'Mobile app development (iOS, Android, React Native)',
  'Quality assurance and automated testing',
  'Web hosting and cloud infrastructure',
  'SAP implementation and integration',
  'AWS architecture and configuration',
  'DevOps and CI/CD pipeline setup',
  'Database design and optimization',
  'Third-party API integrations',
  'Performance audits and optimization'
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]} />

      <Section size="tight">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-coown-800 shadow-elevated">
              <span className="font-display text-4xl font-bold tracking-tighter text-electric-400 select-none">AXR</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Eyebrow>About AgileXR</Eyebrow>
            <h1 className="heading-xl mt-3">
              World-class engineering teams, delivered offshore.
            </h1>
            <div className="mt-6 space-y-5 body-lg">
              <p>
                AgileXR was built around a single observation: most companies at the growth
                stage need senior engineering capacity, not more process overhead. Offshore
                outsourcing has a reputation problem — junior engineers staffed behind an
                account management layer, with communication that goes through five people
                before it reaches anyone who can actually answer a technical question.
              </p>
              <p>
                We built the opposite. Senior engineers, your tools, direct access, agile
                process that your team already understands. A technical lead on every
                engagement who is accountable for the outcome, not just the hours. And a
                firm that covers the full stack — API, mobile, QA, cloud, and SAP — so you
                do not need six vendors to ship one product.
              </p>
              <p>
                Eight years in, more than a hundred projects delivered across three global
                delivery centers. Growth-stage Series A through Series C companies who
                needed to move fast and enterprise teams with a specific capability gap.
                The common thread across all of them: they needed engineers who had shipped
                before, who could be trusted to own a deliverable, and who communicated
                like adults.
              </p>
              <p>
                That is what AgileXR delivers. Senior engineers. Agile process. Transparent
                communication. Sprint kickoff in under two weeks.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ variant: 'gold', size: 'lg' })}>
                Book a discovery call
              </Link>
              <Link href="/services" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                See all services
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section background="warm">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="heading-md mt-3">Five principles. Non-negotiable.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-coown-100 bg-paper p-7 shadow-card">
              <h3 className="font-display text-xl font-semibold tracking-tighter text-coown-800">
                {v.title}
              </h3>
              <p className="mt-3 text-base text-mist-700 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Full-spectrum capability</Eyebrow>
            <h2 className="heading-md mt-3">What we cover.</h2>
            <p className="body-base mt-3">
              The full development stack in one firm. If your project touches any of these,
              we have engineers who have shipped in that domain before.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="text-sm font-semibold text-coown-800 hover:underline">
                Ask about your specific stack on the discovery call
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-lg border border-coown-100 bg-warm-50 p-8">
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex gap-3 text-base text-mist-700 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
