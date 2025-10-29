// AIDEV-NOTE: Site navigation configuration - centralized nav structure
export const siteConfig = {
  name: 'Sumdnc',
  description: 'Modern web platform for digital solutions',
  url: 'https://sumdnc.com',
  links: {
    github: 'https://github.com/davidjbl/sumdnc-website',
    twitter: 'https://twitter.com/sumdnc',
    linkedin: 'https://linkedin.com/company/sumdnc',
  },
};

export const mainNav = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const footerNav = {
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Team', href: '/team' },
    { title: 'Contact', href: '/contact' },
  ],
  services: [
    { title: 'Web Development', href: '/services/web-development' },
    { title: 'Consulting', href: '/services/consulting' },
    { title: 'Analytics', href: '/services/analytics' },
    { title: 'Support', href: '/services/support' },
  ],
  resources: [
    { title: 'Blog', href: '/blog' },
    { title: 'Documentation', href: '/docs' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'API Reference', href: '/api-docs' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'Accessibility', href: '/accessibility' },
  ],
};
