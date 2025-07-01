"use client";

import { use } from "react";
import { usePageTitle } from "@/hook/use-page-title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ViewCounter } from "@/components/view-counter";
import { ExpandableContent } from "@/components/expandable-content";
import { IntegratedNavigation } from "@/components/integrated-navigation";
import Image from "next/image";
import {
  getBlogPostBySlug,
  getBlogIdFromSlug,
  getBlogTitleFromSlug,
  getBlogExcerptFromSlug,
  getBlogContentFromSlug,
} from "@/data/blog-posts";

// Note: generateMetadata doesn't work with "use client", so metadata will be handled by the layout
// For better SEO, consider making this a server component if possible

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Unwrap params using React.use()
  const { slug } = use(params);

  // Get blog post data from imported functions
  const postData = getBlogPostBySlug(slug);
  const postId = getBlogIdFromSlug(slug);

  const post = postData || {
    id: postId,
    title: getBlogTitleFromSlug(slug),
    excerpt: getBlogExcerptFromSlug(slug),
    date: "April 15, 2023",
    author: "Thang Dev",
    category: "Development",
    image: `/placeholder.svg?height=600&width=1200&text=${slug.replace(
      /-/g,
      "+"
    )}`,
    slug: slug,
  };

  const content = getBlogContentFromSlug(slug);

  usePageTitle(post.title);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mx-auto max-w-5xl space-y-8">
          <IntegratedNavigation variant="elegant" />
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1.5 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <ViewCounter id={post.id} type="blog" increment={true} />
            </div>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>{" "}
          <div className="prose prose-lg max-w-none">
            <ExpandableContent
              excerpt={content.slice(0, 500)}
              fullContent={content}
              maxExcerptLength={500}
            />
          </div>
          <div className="flex items-center justify-between border-t pt-8">
            <Link href="/blog">
              <Button variant="outline" size="sm">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <ViewCounter id={post.id} type="blog" increment={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
