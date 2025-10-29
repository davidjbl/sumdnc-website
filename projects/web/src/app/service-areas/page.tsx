import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

// AIDEV-NOTE: Service Areas page - showing geographic coverage for Sumdnc
export default function ServiceAreasPage() {
  const serviceAreas = {
    california: {
      state: 'California',
      cities: [
        'Los Angeles',
        'San Francisco',
        'San Diego',
        'Sacramento',
        'San Jose',
        'Fresno',
        'Long Beach',
        'Oakland',
        'Bakersfield',
        'Anaheim',
      ],
    },
    arizona: {
      state: 'Arizona',
      cities: [
        'Phoenix',
        'Tucson',
        'Mesa',
        'Chandler',
        'Scottsdale',
        'Glendale',
        'Gilbert',
        'Tempe',
        'Peoria',
        'Surprise',
      ],
    },
    nevada: {
      state: 'Nevada',
      cities: [
        'Las Vegas',
        'Henderson',
        'Reno',
        'North Las Vegas',
        'Sparks',
        'Carson City',
        'Fernley',
        'Elko',
        'Mesquite',
        'Boulder City',
      ],
    },
  };

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Service Areas</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Sumdnc proudly serves businesses across California, Arizona, and Nevada with expert IT
          infrastructure, communications, and networking solutions. Plus nationwide remote services.
        </p>
      </div>

      {/* Service Areas Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {Object.entries(serviceAreas).map(([key, area]) => (
          <Card key={key}>
            <CardHeader>
              <div className="mb-2">
                <MapPin className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>{area.state}</CardTitle>
              <CardDescription>Major metropolitan areas we serve</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {area.cities.map((city) => (
                  <li key={city} className="flex items-center text-sm">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Remote Services Section */}
      <div className="mt-16">
        <Card className="border-2">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:p-12">
            <div className="rounded-full bg-primary/10 p-4">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Nationwide Remote Services</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Beyond our core service areas, we provide remote IT support, consultation, and
              solutions to businesses across the United States. Distance is no barrier to quality
              service.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-muted-foreground">
          Contact us today to discuss your IT infrastructure needs.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
