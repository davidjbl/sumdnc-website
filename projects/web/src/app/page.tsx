import { Button } from '@/components/ui/button';import Link from 'next/link';import { Button } from '@/components/ui/button';import { Button } from '@/components/ui/button';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Server, Phone, Shield, Video, Wifi } from 'lucide-react';import { Button } from '@/components/ui/button';

import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// AIDEV-NOTE: Homepage - Sumdnc networking and IT infrastructure services showcase

export default function HomePage() {import { ArrowRight, Network, Wifi, Shield, Video, Server } from 'lucide-react';

  return (

    <main>import { ArrowRight, Network, Wifi, Shield, Video, Server } from 'lucide-react';import { ArrowRight, Network, Wifi, Shield, Video, Server } from 'lucide-react';

      {/* Hero Section */}

      <section className="flex flex-col justify-center items-center gap-6 py-24 md:py-32 container">// AIDEV-NOTE: Homepage - Sumdnc networking and IT infrastructure services

        <div className="flex flex-col items-center gap-4 max-w-4xl text-center">

          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">export default function HomePage() {import Link from 'next/link';import Link from 'next/link';

            Summit - Dynamic <span className="text-primary">Networking</span> Connections

          </h1>  return (

          <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">

            Expert IT infrastructure, communications, and networking solutions for businesses across    <main>

            California, Arizona, and Nevada. Transform your technology with Sumdnc.

          </p>      {/* Hero Section */}

        </div>

      <section className="flex flex-col justify-center items-center gap-6 py-24 md:py-32 container">// AIDEV-NOTE: Homepage - Sumdnc networking and IT infrastructure services// AIDEV-NOTE: Homepage - Sumdnc networking and IT infrastructure services

        <div className="flex sm:flex-row flex-col gap-4">

          <Button asChild size="lg">        <div className="flex flex-col items-center gap-4 max-w-[980px] text-center">

            <Link href="/contact">Get Started</Link>

          </Button>          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">export default function HomePage() {export default function HomePage() {

          <Button asChild size="lg" variant="outline">

            <Link href="/services">View Services</Link>            Summit - Dynamic <span className="text-primary">Networking</span> Connections

          </Button>

        </div>          </h1>  return (  return (

      </section>

          <p className="max-w-[750px] text-muted-foreground text-lg sm:text-xl">

      {/* Core Services Grid */}

      <section className="py-16 md:py-24 container">            Comprehensive IT infrastructure, communications, and networking solutions for businesses    <main>    <main>

        <div className="mb-12 text-center">

          <h2 className="font-bold text-3xl sm:text-4xl">Core Services</h2>            across California, Arizona, and Nevada. Expert services tailored to your needs.

          <p className="mt-4 text-muted-foreground text-lg">

            Comprehensive solutions for all your networking and IT infrastructure needs          </p>      {/* Hero Section */}      {/* Hero Section */}

          </p>

        </div>        </div>



        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">        <div className="flex sm:flex-row flex-col gap-4">      <section className="flex flex-col justify-center items-center gap-6 py-24 md:py-32 container">      <section className="flex flex-col justify-center items-center gap-6 py-24 md:py-32 container">

          <Card>

            <CardHeader>          <Button asChild size="lg">

              <Server className="w-10 h-10 text-primary" />

              <CardTitle>IT Infrastructure (IaaS)</CardTitle>            <Link href="/contact">        <div className="flex flex-col items-center gap-4 max-w-[980px] text-center">        <div className="flex flex-col items-center gap-4 max-w-[980px] text-center">

              <CardDescription>

                Complete network design, structured cabling, and data center solutions              Get Started <ArrowRight className="ml-2 w-4 h-4" />

              </CardDescription>

            </CardHeader>            </Link>          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">

            <CardContent>

              <p className="text-muted-foreground text-sm">          </Button>

                Comprehensive IT infrastructure services including network implementation, wireless

                setup, and security solutions tailored to your business needs.          <Button asChild size="lg" variant="outline">            Summit - Dynamic <span className="text-primary">Networking</span> Connections            Summit - Dynamic <span className="text-primary">Networking</span> Connections

              </p>

            </CardContent>            <Link href="/services">View Services</Link>

          </Card>

          </Button>          </h1>          </h1>

          <Card>

            <CardHeader>        </div>

              <Phone className="w-10 h-10 text-primary" />

              <CardTitle>Communications (CCaaS)</CardTitle>      </section>          <p className="max-w-[750px] text-muted-foreground text-lg sm:text-xl">          <p className="max-w-[750px] text-muted-foreground text-lg sm:text-xl">

              <CardDescription>

                VoIP, unified communications, and collaboration platforms

              </CardDescription>

            </CardHeader>      {/* Core Services Grid */}            Comprehensive IT infrastructure, communications, and networking solutions for businesses            Comprehensive IT infrastructure, communications, and networking solutions for businesses

            <CardContent>

              <p className="text-muted-foreground text-sm">      <section className="py-16 md:py-24 container">

                Advanced communication systems including cloud-based phone systems, video

                conferencing, and contact center solutions.        <div className="mx-auto max-w-[980px] text-center">            across California, Arizona, and Nevada. Expert services tailored to your needs.            across California, Arizona, and Nevada. Expert services tailored to your needs.

              </p>

            </CardContent>          <h2 className="font-bold text-3xl sm:text-4xl">Core Services</h2>

          </Card>

          <p className="mt-4 text-muted-foreground text-lg">          </p>          </p>

          <Card>

            <CardHeader>            Comprehensive solutions for all your networking and IT infrastructure needs

              <Shield className="w-10 h-10 text-primary" />

              <CardTitle>Security (SSaaS)</CardTitle>          </p>        </div>        </div>

              <CardDescription>

                IP surveillance, access control, and cybersecurity solutions        </div>

              </CardDescription>

            </CardHeader>        <div className="flex sm:flex-row flex-col gap-4">        <div className="flex sm:flex-row flex-col gap-4">

            <CardContent>

              <p className="text-muted-foreground text-sm">        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-12">

                Comprehensive security solutions including video surveillance systems, intrusion

                detection, and cloud-based monitoring.          <Card>          <Button asChild size="lg">          <Button asChild size="lg">

              </p>

            </CardContent>            <CardHeader>

          </Card>

              <Server className="w-10 h-10 text-primary" />            <Link href="/contact">            <Link href="/contact">

          <Card>

            <CardHeader>              <CardTitle className="mt-4">IT Infrastructure (IaaS)</CardTitle>

              <Video className="w-10 h-10 text-primary" />

              <CardTitle>Audio Visual (AVSaaS)</CardTitle>              <CardDescription>              Get Started <ArrowRight className="ml-2 w-4 h-4" />              Get Started <ArrowRight className="ml-2 w-4 h-4" />

              <CardDescription>

                Conference rooms, digital signage, and presentation systems                Network design, structured cabling, fiber optics & data centers

              </CardDescription>

            </CardHeader>              </CardDescription>            </Link>            </Link>

            <CardContent>

              <p className="text-muted-foreground text-sm">            </CardHeader>

                Professional audio-visual systems for modern workspaces including conference room

                solutions and interactive displays.            <CardContent>          </Button>          </Button>

              </p>

            </CardContent>              <p className="text-muted-foreground text-sm">

          </Card>

                Comprehensive IT infrastructure services including network implementation, wireless          <Button asChild size="lg" variant="outline">          <Button asChild size="lg" variant="outline">

          <Card>

            <CardHeader>                solutions, and ongoing maintenance & support.

              <Wifi className="w-10 h-10 text-primary" />

              <CardTitle>Wireless Solutions (WSaaS)</CardTitle>              </p>            <Link href="/services">View Services</Link>            <Link href="/services">View Services</Link>

              <CardDescription>

                Enterprise Wi-Fi, outdoor wireless, and IoT connectivity            </CardContent>

              </CardDescription>

            </CardHeader>          </Card>          </Button>          </Button>

            <CardContent>

              <p className="text-muted-foreground text-sm">

                Enterprise-grade wireless connectivity including Wi-Fi design, guest network

                management, and network optimization.          <Card>        </div>        </div>

              </p>

            </CardContent>            <CardHeader>

          </Card>

              <Video className="w-10 h-10 text-primary" />      </section>      </section>

          <Card>

            <CardHeader>              <CardTitle className="mt-4">Communications (CCaaS)</CardTitle>

              <div className="flex justify-center items-center bg-primary rounded-lg w-10 h-10 text-primary-foreground">

                <span className="font-bold text-xl">+</span>              <CardDescription>

              </div>

              <CardTitle>Custom Solutions</CardTitle>                VoIP systems, video conferencing & unified communications

              <CardDescription>

                Tailored services for your unique business requirements              </CardDescription>      {/* Core Services Grid */}      {/* Core Services Grid */}

              </CardDescription>

            </CardHeader>            </CardHeader>

            <CardContent>

              <p className="text-muted-foreground text-sm">            <CardContent>      <section className="py-16 md:py-24 container">      <section className="py-16 md:py-24 container">

                We work with you to design and implement custom networking and IT solutions that

                perfectly fit your business needs.              <p className="text-muted-foreground text-sm">

              </p>

            </CardContent>                Advanced communication solutions including cloud PBX, SIP trunking, and integrated        <div className="mx-auto max-w-[980px] text-center">        <div className="mx-auto max-w-[980px] text-center">

          </Card>

        </div>                collaboration platforms.

      </section>

              </p>          <h2 className="font-bold text-3xl sm:text-4xl">Core Services</h2>          <h2 className="font-bold text-3xl sm:text-4xl">Core Services</h2>

      {/* CTA Section */}

      <section className="py-16 md:py-24 container">            </CardContent>

        <Card className="border-2">

          <CardContent className="flex flex-col items-center gap-4 p-8 md:p-12 text-center">          </Card>          <p className="mt-4 text-muted-foreground text-lg">          <p className="mt-4 text-muted-foreground text-lg">

            <h2 className="font-bold text-3xl sm:text-4xl">Ready to Transform Your Infrastructure?</h2>

            <p className="max-w-2xl text-muted-foreground text-lg">

              Let&apos;s discuss how Sumdnc can help modernize your IT infrastructure, enhance

              communications, and secure your business.          <Card>            Comprehensive solutions for all your networking and IT infrastructure needs            Comprehensive solutions for all your networking and IT infrastructure needs

            </p>

            <div className="flex sm:flex-row flex-col gap-4 mt-4">            <CardHeader>

              <Button asChild size="lg">

                <Link href="/contact">Contact Us Today</Link>              <Shield className="w-10 h-10 text-primary" />          </p>          </p>

              </Button>

              <Button asChild size="lg" variant="outline">              <CardTitle className="mt-4">Security (SSaaS)</CardTitle>

                <Link href="/about">Learn More</Link>

              </Button>              <CardDescription>        </div>        </div>

            </div>

          </CardContent>                Access control, surveillance & comprehensive security solutions

        </Card>

      </section>              </CardDescription>

    </main>

  );            </CardHeader>

}

            <CardContent>        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-12">        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-12">

              <p className="text-muted-foreground text-sm">

                Complete security services including CCTV installation, intrusion detection, and          <Card>          <Card>

                compliance management.

              </p>            <CardHeader>            <CardHeader>

            </CardContent>

          </Card>              <Server className="w-10 h-10 text-primary" />              <Server className="w-10 h-10 text-primary" />



          <Card>              <CardTitle className="mt-4">IT Infrastructure (IaaS)</CardTitle>              <CardTitle className="mt-4">IT Infrastructure (IaaS)</CardTitle>

            <CardHeader>

              <Video className="w-10 h-10 text-primary" />              <CardDescription>              <CardDescription>

              <CardTitle className="mt-4">Audio Visual (AVSaaS)</CardTitle>

              <CardDescription>                Network design, structured cabling, fiber optics & data centers                Network design, structured cabling, fiber optics & data centers

                Conference rooms, digital signage & entertainment systems

              </CardDescription>              </CardDescription>              </CardDescription>

            </CardHeader>

            <CardContent>            </CardHeader>            </CardHeader>

              <p className="text-muted-foreground text-sm">

                Professional AV solutions including video walls, audio systems, control integration,            <CardContent>            <CardContent>

                and event support.

              </p>              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

            </CardContent>

          </Card>                Comprehensive IT infrastructure services including network implementation, wireless                Comprehensive IT infrastructure services including network implementation, wireless



          <Card>                solutions, and ongoing maintenance & support.                solutions, and ongoing maintenance & support.

            <CardHeader>

              <Wifi className="w-10 h-10 text-primary" />              </p>              </p>

              <CardTitle className="mt-4">Wireless Solutions (WSaaS)</CardTitle>

              <CardDescription>            </CardContent>            </CardContent>

                Wi-Fi design, site surveys & access point installation

              </CardDescription>          </Card>          </Card>

            </CardHeader>

            <CardContent>

              <p className="text-muted-foreground text-sm">

                Expert wireless networking including heatmapping, performance optimization, and          <Card>          <Card>

                outdoor bridge solutions.

              </p>            <CardHeader>            <CardHeader>

            </CardContent>

          </Card>              <Video className="w-10 h-10 text-primary" />              <Video className="w-10 h-10 text-primary" />



          <Card>              <CardTitle className="mt-4">Communications (CCaaS)</CardTitle>              <CardTitle className="mt-4">Communications (CCaaS)</CardTitle>

            <CardHeader>

              <Network className="w-10 h-10 text-primary" />              <CardDescription>              <CardDescription>

              <CardTitle className="mt-4">Unified Communications</CardTitle>

              <CardDescription>                VoIP systems, video conferencing & unified communications                VoIP systems, video conferencing & unified communications

                Integrated communication solutions for seamless collaboration

              </CardDescription>              </CardDescription>              </CardDescription>

            </CardHeader>

            <CardContent>            </CardHeader>            </CardHeader>

              <p className="text-muted-foreground text-sm">

                Complete unified communication services integrating voice, video, and messaging for            <CardContent>            <CardContent>

                enhanced productivity.

              </p>              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

            </CardContent>

          </Card>                Advanced communication solutions including cloud PBX, SIP trunking, and integrated                Advanced communication solutions including cloud PBX, SIP trunking, and integrated

        </div>

      </section>                collaboration platforms.                collaboration platforms.



      {/* Service Areas Section */}              </p>              </p>

      <section className="bg-muted/50 py-16 md:py-24 border-y">

        <div className="container">            </CardContent>            </CardContent>

          <div className="mx-auto max-w-[980px] text-center">

            <h2 className="font-bold text-3xl sm:text-4xl">Service Areas</h2>          </Card>          </Card>

            <p className="mt-4 text-muted-foreground text-lg">

              Proudly serving businesses across the Western United States

            </p>

          </div>          <Card>          <Card>



          <div className="gap-8 grid md:grid-cols-3 mt-12">            <CardHeader>            <CardHeader>

            <Card>

              <CardHeader>              <Shield className="w-10 h-10 text-primary" />              <Shield className="w-10 h-10 text-primary" />

                <CardTitle>California</CardTitle>

                <CardDescription>Major cities across the Golden State</CardDescription>              <CardTitle className="mt-4">Security (SSaaS)</CardTitle>              <CardTitle className="mt-4">Security (SSaaS)</CardTitle>

              </CardHeader>

              <CardContent>              <CardDescription>              <CardDescription>

                <p className="text-muted-foreground text-sm">

                  Los Angeles, San Francisco, San Diego, Sacramento, San Jose, and more                Access control, surveillance & comprehensive security solutions                Access control, surveillance & comprehensive security solutions

                </p>

              </CardContent>              </CardDescription>              </CardDescription>

            </Card>

            </CardHeader>            </CardHeader>

            <Card>

              <CardHeader>            <CardContent>            <CardContent>

                <CardTitle>Arizona</CardTitle>

                <CardDescription>Throughout the Grand Canyon State</CardDescription>              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

              </CardHeader>

              <CardContent>                Complete security services including CCTV installation, intrusion detection, and                Complete security services including CCTV installation, intrusion detection, and

                <p className="text-muted-foreground text-sm">

                  Phoenix, Tucson, Mesa, Chandler, Scottsdale, Gilbert, and surrounding areas                compliance management.                compliance management.

                </p>

              </CardContent>              </p>              </p>

            </Card>

            </CardContent>            </CardContent>

            <Card>

              <CardHeader>          </Card>          </Card>

                <CardTitle>Nevada</CardTitle>

                <CardDescription>Serving the Silver State</CardDescription>

              </CardHeader>

              <CardContent>          <Card>          <Card>

                <p className="text-muted-foreground text-sm">

                  Las Vegas, Henderson, Reno, North Las Vegas, Sparks, Carson City, and more            <CardHeader>            <CardHeader>

                </p>

              </CardContent>              <Video className="w-10 h-10 text-primary" />              <Video className="w-10 h-10 text-primary" />

            </Card>

          </div>              <CardTitle className="mt-4">Audio Visual (AVSaaS)</CardTitle>              <CardTitle className="mt-4">Audio Visual (AVSaaS)</CardTitle>



          <div className="mt-8 text-center">              <CardDescription>              <CardDescription>

            <p className="text-muted-foreground text-sm">

              Plus nationwide remote services to support clients across the country                Conference rooms, digital signage & entertainment systems                Conference rooms, digital signage & entertainment systems

            </p>

          </div>              </CardDescription>              </CardDescription>

        </div>

      </section>            </CardHeader>            </CardHeader>



      {/* CTA Section */}            <CardContent>            <CardContent>

      <section className="py-16 md:py-24 container">

        <Card className="bg-primary text-primary-foreground">              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

          <CardContent className="p-8 md:p-12 text-center">

            <h2 className="font-bold text-3xl sm:text-4xl">Ready to Get Started?</h2>                Professional AV solutions including video walls, audio systems, control integration,                Professional AV solutions including video walls, audio systems, control integration,

            <p className="opacity-90 mt-4 text-lg">

              Let&apos;s build your network infrastructure and communication solutions                and event support.                and event support.

            </p>

            <div className="flex sm:flex-row flex-col sm:justify-center gap-4 mt-8">              </p>              </p>

              <Button asChild size="lg" variant="secondary">

                <Link href="/contact">            </CardContent>            </CardContent>

                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />

                </Link>          </Card>          </Card>

              </Button>

              <Button asChild size="lg" variant="outline">

                <Link href="/about">Learn More About Us</Link>

              </Button>          <Card>          <Card>

            </div>

          </CardContent>            <CardHeader>            <CardHeader>

        </Card>

      </section>              <Wifi className="w-10 h-10 text-primary" />              <Wifi className="w-10 h-10 text-primary" />

    </main>

  );              <CardTitle className="mt-4">Wireless Solutions (WSaaS)</CardTitle>              <CardTitle className="mt-4">Wireless Solutions (WSaaS)</CardTitle>

}

              <CardDescription>              <CardDescription>

                Wi-Fi design, site surveys & access point installation                Wi-Fi design, site surveys & access point installation

              </CardDescription>              </CardDescription>

            </CardHeader>            </CardHeader>

            <CardContent>            <CardContent>

              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

                Expert wireless networking including heatmapping, performance optimization, and                Expert wireless networking including heatmapping, performance optimization, and

                outdoor bridge solutions.                outdoor bridge solutions.

              </p>              </p>

            </CardContent>            </CardContent>

          </Card>          </Card>



          <Card>          <Card>

            <CardHeader>            <CardHeader>

              <Network className="w-10 h-10 text-primary" />              <Network className="w-10 h-10 text-primary" />

              <CardTitle className="mt-4">Unified Communications</CardTitle>              <CardTitle className="mt-4">Unified Communications</CardTitle>

              <CardDescription>              <CardDescription>

                Integrated communication solutions for seamless collaboration                Integrated communication solutions for seamless collaboration

              </CardDescription>              </CardDescription>

            </CardHeader>            </CardHeader>

            <CardContent>            <CardContent>

              <p className="text-muted-foreground text-sm">              <p className="text-muted-foreground text-sm">

                Complete unified communication services integrating voice, video, and messaging for                Complete unified communication services integrating voice, video, and messaging for

                enhanced productivity.                enhanced productivity.

              </p>              </p>

            </CardContent>            </CardContent>

          </Card>          </Card>

        </div>        </div>

      </section>      </section>



      {/* Service Areas Section */}      {/* Service Areas Section */}

      <section className="bg-muted/50 py-16 md:py-24 border-y">      <section className="bg-muted/50 py-16 md:py-24 border-y">

        <div className="container">        <div className="container">

          <div className="mx-auto max-w-[980px] text-center">          <div className="mx-auto max-w-[980px] text-center">

            <h2 className="font-bold text-3xl sm:text-4xl">Service Areas</h2>            <h2 className="font-bold text-3xl sm:text-4xl">Service Areas</h2>

            <p className="mt-4 text-muted-foreground text-lg">            <p className="mt-4 text-muted-foreground text-lg">

              Proudly serving businesses across the Western United States              Proudly serving businesses across the Western United States

            </p>            </p>

          </div>          </div>



          <div className="gap-8 grid md:grid-cols-3 mt-12">          <div className="gap-8 grid md:grid-cols-3 mt-12">

            <Card>            <Card>

              <CardHeader>              <CardHeader>

                <CardTitle>California</CardTitle>                <CardTitle>California</CardTitle>

                <CardDescription>Major cities across the Golden State</CardDescription>                <CardDescription>Major cities across the Golden State</CardDescription>

              </CardHeader>              </CardHeader>

              <CardContent>              <CardContent>

                <p className="text-muted-foreground text-sm">                <p className="text-muted-foreground text-sm">

                  Los Angeles, San Francisco, San Diego, Sacramento, San Jose, and more                  Los Angeles, San Francisco, San Diego, Sacramento, San Jose, and more

                </p>                </p>

              </CardContent>              </CardContent>

            </Card>            </Card>



            <Card>            <Card>

              <CardHeader>              <CardHeader>

                <CardTitle>Arizona</CardTitle>                <CardTitle>Arizona</CardTitle>

                <CardDescription>Throughout the Grand Canyon State</CardDescription>                <CardDescription>Throughout the Grand Canyon State</CardDescription>

              </CardHeader>              </CardHeader>

              <CardContent>              <CardContent>

                <p className="text-muted-foreground text-sm">                <p className="text-muted-foreground text-sm">

                  Phoenix, Tucson, Mesa, Chandler, Scottsdale, Gilbert, and surrounding areas                  Phoenix, Tucson, Mesa, Chandler, Scottsdale, Gilbert, and surrounding areas

                </p>                </p>

              </CardContent>              </CardContent>

            </Card>            </Card>



            <Card>            <Card>

              <CardHeader>              <CardHeader>

                <CardTitle>Nevada</CardTitle>                <CardTitle>Nevada</CardTitle>

                <CardDescription>Serving the Silver State</CardDescription>                <CardDescription>Serving the Silver State</CardDescription>

              </CardHeader>              </CardHeader>

              <CardContent>              <CardContent>

                <p className="text-muted-foreground text-sm">                <p className="text-muted-foreground text-sm">

                  Las Vegas, Henderson, Reno, North Las Vegas, Sparks, Carson City, and more                  Las Vegas, Henderson, Reno, North Las Vegas, Sparks, Carson City, and more

                </p>                </p>

              </CardContent>              </CardContent>

            </Card>            </Card>

          </div>          </div>



          <div className="mt-8 text-center">          <div className="mt-8 text-center">

            <p className="text-muted-foreground text-sm">            <p className="text-muted-foreground text-sm">

              Plus nationwide remote services to support clients across the country              Plus nationwide remote services to support clients across the country

            </p>            </p>

          </div>          </div>

        </div>        </div>

      </section>      </section>



      {/* CTA Section */}

      <section className="py-16 md:py-24 container">          <div className="mt-8 text-center">

        <Card className="bg-primary text-primary-foreground">            <p className="text-muted-foreground text-sm">

          <CardContent className="p-8 md:p-12 text-center">              Plus nationwide remote services to support clients across the country

            <h2 className="font-bold text-3xl sm:text-4xl">Ready to Get Started?</h2>            </p>

            <p className="opacity-90 mt-4 text-lg">          </div>

              Let&apos;s build your network infrastructure and communication solutions        </div>

            </p>      </section>

            <div className="flex sm:flex-row flex-col sm:justify-center gap-4 mt-8">

              <Button asChild size="lg" variant="secondary">      {/* CTA Section */}

                <Link href="/contact">      <section className="py-16 md:py-24 container">

                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />        <Card className="bg-primary text-primary-foreground">

                </Link>          <CardContent className="p-8 md:p-12 text-center">

              </Button>            <h2 className="font-bold text-3xl sm:text-4xl">Ready to Get Started?</h2>

              <Button asChild size="lg" variant="outline">            <p className="opacity-90 mt-4 text-lg">

                <Link href="/about">Learn More About Us</Link>              Let&apos;s build your network infrastructure and communication solutions

              </Button>            </p>

            </div>            <div className="flex sm:flex-row flex-col sm:justify-center gap-4 mt-8">

          </CardContent>              <Button asChild size="lg" variant="secondary">

        </Card>                <Link href="/contact">

      </section>                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />

    </main>                </Link>

  );              </Button>

}              <Button asChild size="lg" variant="outline">

                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 container">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl">Ready to Get Started?</h2>
            <p className="opacity-90 mt-4 text-lg">Let&apos;s build something amazing together</p>
            <div className="flex sm:flex-row flex-col sm:justify-center gap-4 mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
