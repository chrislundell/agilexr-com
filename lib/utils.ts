import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: 'AgileXR',
  longName: 'AgileXR',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://agilexr.com',
  description:
    'AgileXR delivers world-class offshore software development and outsourcing — mobile apps, API development, QA testing, cloud infrastructure, and SAP implementation for growth-stage companies.',
  hero: 'World-class offshore development teams.',
  email: 'info@agilexr.com',
  social: {
    linkedin: 'https://www.linkedin.com/company/agilexr'
  }
} as const;
