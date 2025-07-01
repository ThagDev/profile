import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ViewCounter } from "@/components/view-counter";
import Image from "next/image";
import { blogPosts, blogCategories } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles by Thang Dev about web development, React, Next.js, and modern programming techniques.",
  keywords: ["ThagDev Blog", "Web Development", "React", "Next.js", "Programming", "Tech Articles"],
  openGraph: {
    title: "Blog - Thang Dev",
    description: "Read the latest articles by Thang Dev about web development, React, Next.js, and modern programming techniques.",
    type: "website",
  },
  twitter: {
    title: "Blog - Thang Dev",
    description: "Read the latest articles by Thang Dev about web development, React, Next.js, and modern programming techniques.",
  },
};

export default function BlogPage() {
  // Use imported blog data
  const posts = blogPosts;
  const categories = blogCategories;

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, ideas, and insights on web development and design
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    width={500}
                    height={300}
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-start">
                    <CardTitle>{post.title}</CardTitle>
                    <ViewCounter id={post.id} type="blog" />
                  </div>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="icon">
              <span className="sr-only">Previous page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Next page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
