import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Factory, Home, Store } from 'lucide-react';
import Link from 'next/link';

// AIDEV-NOTE: Solutions page - showcasing solutions for different business segments
export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: 'Business Solutions',
      description: 'Scalable IT infrastructure for growing businesses',
      features: [
        'Office network design and implementation',
        'Cloud-based communication systems',
        'Data backup and disaster recovery',
        'Managed IT services',
        'Cybersecurity solutions',
        'Remote work enablement',
      ],
    },
    {
      icon: Factory,
      title: 'Industry Solutions',
      description: 'Specialized solutions for manufacturing and industrial facilities',
      features: [
        'Industrial network infrastructure',
        'IoT and automation connectivity',
        'Warehouse management systems',
        'Security and surveillance',
        'VoIP and communication systems',
        'Process monitoring networks',
      ],
    },
    {
      icon: Home,
      title: 'Residential Solutions',
      description: 'Smart home technology and connectivity',
      features: [
        'Home network setup',
        'Smart home integration',
        'Home security systems',
        'Whole-home Wi-Fi',
        'Home entertainment systems',
        'Remote monitoring',
      ],
    },
    {
      icon: Store,
      title: 'Commercial Solutions',
      description: 'Retail and commercial space technology',
      features: [
        'Point of sale systems',
        'Customer Wi-Fi networks',
        'Digital signage solutions',
        'Security camera systems',
        'Access control systems',
        'Network infrastructure',
      ],
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Solutions for Every Need
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether you&apos;re a small business, industrial facility, residential client, or
          commercial space, Sumdnc delivers tailored IT infrastructure solutions that fit your
          unique requirements.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="mt-16 md:mt-24">
        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card key={solution.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-16 md:mt-24">
        <Card className="border-2">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Why Choose Sumdnc?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We bring expertise, reliability, and cutting-edge technology to every project
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 font-semibold">Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced professionals with deep knowledge across all IT infrastructure domains
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 font-semibold">Customization</h3>
                <p className="text-sm text-muted-foreground">
                  Solutions tailored to your specific needs, budget, and business objectives
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 font-semibold">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing support and maintenance to keep your systems running at peak performance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Ready to Transform Your Infrastructure?</h2>
        <p className="mt-4 text-muted-foreground">
          Let&apos;s discuss how we can help you achieve your technology goals
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
