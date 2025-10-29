import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// AIDEV-NOTE: Dynamic blog post page - will integrate with tRPC to fetch post by slug
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// AIDEV-NOTE: TODO - Replace with tRPC query: api.post.getBySlug.useQuery()
async function getPost(slug: string) {
  // Placeholder data - replace with actual tRPC query
  const posts: Record<string, any> = {
    'getting-started-with-nextjs-14': {
      title: 'Getting Started with Next.js 14',
      slug: 'getting-started-with-nextjs-14',
      content: `
        <h2>Introduction</h2>
        <p>Next.js 14 introduces exciting new features and improvements that make building web applications even better.</p>

        <h2>What's New</h2>
        <p>The App Router is now stable and brings powerful features like:</p>
        <ul>
          <li>React Server Components</li>
          <li>Streaming and Suspense</li>
          <li>Improved data fetching</li>
          <li>Better performance</li>
        </ul>

        <h2>Getting Started</h2>
        <p>Create a new Next.js 14 project with the following command:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>
      `,
      publishedAt: '2025-10-15',
      author: 'John Doe',
    },
  };

  return posts[slug] || null;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12 md:py-24">
      {/* Back Link */}
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <div className="mt-6 flex items-center gap-4 text-muted-foreground">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>By {post.author}</span>
        </div>
      </header>

      {/* Article Content */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div
          className="dark:prose-invert prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Article Footer */}
      <footer className="mx-auto mt-16 max-w-3xl border-t pt-8">
        <div className="flex items-center justify-between">
          <Button asChild variant="outline">
            <Link href="/blog">← Back to Blog</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </footer>
    </article>
  );
}
