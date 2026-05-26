import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/json-ld';
import { GA4 } from '@/components/analytics/ga4';
import { Cookiebot } from '@/components/analytics/cookiebot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.longName} | ${siteConfig.hero}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'offshore software development',
    'offshore development team',
    'outsourced software development',
    'mobile app development',
    'API development company',
    'QA testing services',
    'SAP implementation',
    'AWS configuration',
    'web hosting services',
    'agile development outsourcing'
  ],
  authors: [{ name: 'AgileXR', url: siteConfig.url }],
  creator: 'AgileXR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.longName} | ${siteConfig.hero}`,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.hero}` }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.longName} | ${siteConfig.hero}`,
    description: siteConfig.description,
    images: ['/opengraph-image']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export const viewport: Viewport = {
  themeColor: '#1a2b4a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <Cookiebot />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://consent.cookiebot.com" />
        <link rel="me" href={siteConfig.social.linkedin} />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-electric-600 focus:px-4 focus:py-2 focus:text-paper focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <GA4 />
      </body>
    </html>
  );
}
