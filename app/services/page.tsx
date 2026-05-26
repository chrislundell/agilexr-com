import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Container, Section } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld';

export const metadata = {
  title: 'AgileXR Services — API, Mobile, QA, SAP, AWS & Cloud Dev',
  description:
    'AgileXR services: API development, mobile apps, QA testing, web hosting, SAP implementation, and AWS configuration for growth-stage companies.',
  alternates: { canonical: '/services' }
};

const services = [
  {
    id: 'api',
    label: 'API Development',
    headline: 'REST, GraphQL, and microservices built for production.',
    description:
      'We design and ship APIs that power your product at scale. Clean contracts, proper versioning, authentication, rate limiting, and documentation are included from day one — not added later.',
    points: [
      'RESTful and GraphQL API design and implementation',
      'Microservices architecture and service mesh',
      'Authentication and authorization (OAuth 2.0, JWT, API keys)',
      'Third-party integrations (Stripe, Salesforce, HubSpot, and 40+ others)',
      'API documentation with OpenAPI / Swagger',
      'Performance optimization and caching strategy',
      'Monitoring and alerting setup'
    ],
    stacks: ['Node.js', 'Python', 'Go', 'Java', '.NET', 'PostgreSQL', 'Redis', 'AWS', 'GCP']
  },
  {
    id: 'mobile',
    label: 'Mobile App Development',
    headline: 'iOS, Android, and cross-platform with React Native.',
    description:
      'Native performance, App Store and Play Store approval experience, and a full QA pass before every release. We ship mobile apps that users keep and that engineers can maintain.',
    points: [
      'iOS (Swift / SwiftUI) and Android (Kotlin) native development',
      'Cross-platform development with React Native',
      'App Store and Google Play submission and approval management',
      'Push notifications, deep linking, and offline support',
      'In-app purchases and subscription management',
      'Analytics and crash reporting integration',
      'Accessibility and WCAG compliance'
    ],
    stacks: ['Swift', 'SwiftUI', 'Kotlin', 'React Native', 'Expo', 'Firebase', 'AWS Amplify']
  },
  {
    id: 'qa',
    label: 'Quality Assurance (QA Testing)',
    headline: 'Systematic testing that finds the bug before the user does.',
    description:
      'Manual and automated QA across functional, regression, performance, and security surfaces. Your release checklist becomes someone else\'s responsibility — with the documentation to prove every build passed.',
    points: [
      'Manual and exploratory testing',
      'Automated test suite development (Selenium, Cypress, Playwright)',
      'Mobile testing on real device farms (iOS and Android)',
      'Performance and load testing (k6, JMeter)',
      'Security vulnerability scanning (OWASP)',
      'CI/CD pipeline integration for automated test runs',
      'Test coverage reporting and defect tracking'
    ],
    stacks: ['Cypress', 'Playwright', 'Selenium', 'Jest', 'k6', 'JMeter', 'BrowserStack', 'GitHub Actions']
  },
  {
    id: 'cloud',
    label: 'Web Hosting & Cloud Infrastructure',
    headline: 'Managed hosting built around uptime and security.',
    description:
      'Configured, monitored, and maintained cloud infrastructure so your team stops worrying about servers and starts shipping product. We right-size the architecture for where you are now and where you are going.',
    points: [
      'Cloud environment setup and architecture (AWS, Azure, GCP)',
      'Containerization with Docker and orchestration with Kubernetes',
      'Infrastructure as code with Terraform',
      'SSL/TLS configuration and certificate management',
      'CDN setup and performance optimization',
      '24/7 uptime monitoring and incident response',
      'Backup, disaster recovery, and business continuity planning'
    ],
    stacks: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Nginx', 'Cloudflare']
  },
  {
    id: 'sap',
    label: 'SAP Implementation',
    headline: 'SAP rollouts that stay on schedule and on scope.',
    description:
      'Implementation, migration, and integration by certified SAP consultants who have run these projects before. We know where enterprise SAP rollouts break and we build the safeguards in from the start.',
    points: [
      'SAP S/4HANA implementation and migration',
      'SAP ECC to S/4HANA conversion',
      'SAP Business Technology Platform (BTP) development',
      'Custom ABAP and Fiori development',
      'Third-party system integration via SAP Integration Suite',
      'SAP data migration and validation',
      'Post-go-live support and optimization'
    ],
    stacks: ['SAP S/4HANA', 'SAP ECC', 'SAP BTP', 'ABAP', 'Fiori', 'SAP Integration Suite']
  },
  {
    id: 'aws',
    label: 'AWS Configuration',
    headline: 'Right-sized AWS infrastructure for growth-stage companies.',
    description:
      'Architecture review, environment setup, cost optimization, and ongoing operations. Your cloud bill should match your actual usage. We identify and eliminate waste while building infrastructure that scales with you.',
    points: [
      'AWS account structure and IAM policy setup',
      'Architecture review and cost optimization audit',
      'EC2, ECS, EKS, and Lambda workload configuration',
      'RDS, Aurora, and DynamoDB database setup',
      'CloudFront CDN and S3 static asset delivery',
      'VPC, security groups, and network architecture',
      'CloudWatch monitoring, alerting, and log management'
    ],
    stacks: ['EC2', 'ECS', 'EKS', 'Lambda', 'RDS', 'Aurora', 'CloudFront', 'S3', 'CloudWatch', 'IAM']
  }
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      {services.map((svc) => (
        <ServiceJsonLd
          key={svc.id}
          name={svc.label}
          description={svc.description}
          url={`/services#${svc.id}`}
        />
      ))}

      <section className="bg-paper pt-16 pb-12 sm:pt-22 sm:pb-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="heading-xl mt-3">
              Six capabilities. One offshore team.
            </h1>
            <p className="body-lg mt-5 max-w-2xl">
              We cover the full development stack — API through mobile through QA
              through cloud through SAP. Pick what you need and we staff accordingly.
              Senior engineers, agile process, transparent communication.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ variant: 'gold', size: 'lg' })}>
                Book a discovery call
              </Link>
              <Link href="/about" className={buttonVariants({ variant: 'secondary', size: 'lg' })}>
                About AgileXR
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {services.map((svc, idx) => {
        const altBackground = idx % 2 === 1;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={altBackground ? 'bg-warm-50' : 'bg-paper'}
          >
            <Container className="py-16 sm:py-22 lg:py-24">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                    {svc.label}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tighter text-coown-800">
                    {svc.headline}
                  </h2>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700 mb-3">
                      Tech stacks
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.stacks.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-coown-100 bg-paper px-2.5 py-1 text-xs font-medium text-coown-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-lg text-mist-700 leading-relaxed">{svc.description}</p>
                  <ul className="mt-6 space-y-3">
                    {svc.points.map((point) => (
                      <li key={point} className="flex gap-3 text-base text-mist-700 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-coown-950">
        <Container className="py-20 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tighter text-paper">
              Not sure which service you need?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-paper/80 leading-relaxed">
              Book a thirty-minute discovery call. We will diagnose the gap, tell you
              what team makes sense, and give you a realistic cost range before any
              commitment.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className={buttonVariants({ variant: 'gold', size: 'xl' })}
              >
                Book a discovery call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
