import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// AIDEV-NOTE: Blog listing page - will integrate with tRPC to fetch posts
export default function BlogPage() {
  // AIDEV-NOTE: TODO - Replace with tRPC query: api.post.getAll.useQuery()
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      slug: 'getting-started-with-nextjs-14',
      excerpt: 'Learn how to build modern web applications with Next.js 14 and the App Router.',
      publishedAt: '2025-10-15',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Building Type-Safe APIs with tRPC',
      slug: 'building-type-safe-apis-with-trpc',
      excerpt: 'Discover how tRPC provides end-to-end type safety for your API layer.',
      publishedAt: '2025-10-10',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Mastering Tailwind CSS',
      slug: 'mastering-tailwind-css',
      excerpt: 'Tips and tricks for building beautiful UIs with Tailwind CSS utility classes.',
      publishedAt: '2025-10-05',
      author: 'Mike Johnson',
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Blog</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Insights, tutorials, and updates from the Sumdnc team
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="mb-2 text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">By {post.author}</span>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/blog/${post.slug}`}>Read more →</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-12 flex justify-center gap-2">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
