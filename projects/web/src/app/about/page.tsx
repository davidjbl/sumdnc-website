import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// AIDEV-NOTE: About page - Summit Dynamic Networking Connections company info
export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Summit - Dynamic Networking Connections
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          An innovative platform that facilitates dynamic networking and connections. We provide
          comprehensive IT infrastructure, communications, and networking solutions tailored to meet
          the diverse needs of modern businesses.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-16 md:mt-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            To provide seamless user experiences across devices through cutting-edge technology and
            expert services. We leverage modern platforms to streamline development and deployment
            processes, ensuring that our clients can focus on their core business operations while
            we manage their technological needs.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-center text-3xl font-bold">Why Choose Sumdnc?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our team of professionals has extensive experience in networking and communication
                solutions across multiple industries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customized Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We tailor our services to meet the unique needs of each client, ensuring optimal
                performance and reliability.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cutting-Edge Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We leverage the latest technologies to provide innovative solutions that keep your
                business ahead of the curve.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We are committed to providing exceptional customer service and support throughout
                your project lifecycle.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We prioritize reliability and performance in all our services, ensuring your systems
                run smoothly 24/7.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scalability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our solutions are designed to grow with your business needs, from small startups to
                large enterprises.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-center text-3xl font-bold">Our Team</h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Meet the talented people behind Sumdnc
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {/* Placeholder team members */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-muted" />
              <h3 className="mt-4 font-semibold">Team Member {i}</h3>
              <p className="text-sm text-muted-foreground">Position Title</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 md:mt-24">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold">Join Our Journey</h2>
            <p className="mt-4 text-lg opacity-90">
              Want to work with us or learn more about what we do?
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/careers">View Careers</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
