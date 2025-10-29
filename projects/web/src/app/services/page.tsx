import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Server, Shield, Video, Wifi } from 'lucide-react';
import Link from 'next/link';

// AIDEV-NOTE: Services page - showcase Sumdnc's IT infrastructure and networking services
export default function ServicesPage() {
  const services = [
    {
      title: 'IT Infrastructure as a Service (IaaS)',
      icon: Server,
      description: 'Comprehensive IT infrastructure solutions for businesses of all sizes.',
      features: [
        'Network Design and Implementation',
        'Structured Cabling Solutions',
        'Fiber Optic Installation',
        'Wireless Network Setup',
        'Network Security',
        'Data Center Solutions',
      ],
    },
    {
      title: 'Communications & Collaboration as a Service (CCaaS)',
      icon: Phone,
      description: 'Advanced communication systems to connect your team and customers.',
      features: [
        'VoIP and Unified Communications',
        'Cloud-Based Phone Systems',
        'Video Conferencing Solutions',
        'Collaboration Platforms',
        'Contact Center Solutions',
        'Mobile Integration',
      ],
    },
    {
      title: 'Security & Surveillance as a Service (SSaaS)',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your business and assets.',
      features: [
        'IP Video Surveillance Systems',
        'Access Control Systems',
        'Intrusion Detection',
        'Cloud-Based Video Storage',
        'Remote Monitoring',
        'Cybersecurity Solutions',
      ],
    },
    {
      title: 'Audio Visual as a Service (AVSaaS)',
      icon: Video,
      description: 'Professional audio-visual systems for modern workspaces.',
      features: [
        'Conference Room Solutions',
        'Digital Signage',
        'Presentation Systems',
        'Sound System Installation',
        'Video Wall Solutions',
        'Interactive Displays',
      ],
    },
    {
      title: 'Wireless Solutions as a Service (WSaaS)',
      icon: Wifi,
      description: 'Enterprise-grade wireless connectivity for seamless operations.',
      features: [
        'Enterprise Wi-Fi Design',
        'Outdoor Wireless Solutions',
        'Guest Network Management',
        'IoT Connectivity',
        'Wireless Site Surveys',
        'Network Optimization',
      ],
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Comprehensive IT infrastructure, communications, and networking solutions tailored to your
          business needs. From design to deployment and ongoing support, we deliver excellence.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 md:mt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title}>
                <CardHeader>
                  <div className="mb-2">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven approach to delivering successful projects
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {[
            { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
            { step: '02', title: 'Planning', description: 'Creating a detailed project roadmap' },
            {
              step: '03',
              title: 'Development',
              description: 'Building your solution with best practices',
            },
            { step: '04', title: 'Launch', description: 'Deploying and supporting your project' },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {phase.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 md:mt-24">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg opacity-90">
              Let&apos;s discuss how we can help bring your project to life.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
