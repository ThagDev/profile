"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ViewCounter } from "@/components/view-counter";
import { ExpandableContent } from "@/components/expandable-content";
import { memo } from "react";
import { blogPosts, getBlogContentFromSlug } from "@/data/blog-posts";

// Memoized BlogPost component to prevent unnecessary re-renders
const BlogPost = memo(({ post }: { post: typeof blogPosts[0] }) => {
  // Get full content for the post
  const fullContent = getBlogContentFromSlug(post.slug);
  
  return (
    <Card className="flex flex-col h-fit">
      <div className="aspect-video overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <div className="flex items-center gap-2">
            <ViewCounter id={post.id} type="blog" />
            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>
        </div>
        <CardTitle className="line-clamp-2 min-h-[3rem]">{post.title}</CardTitle>
        <CardDescription className="flex-grow">
          <ExpandableContent
            excerpt={post.excerpt}
            fullContent={fullContent}
            maxExcerptLength={100}
            isInsideDescription={true}
          />
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-0">
        <Button variant="outline" asChild className="w-full">
          <Link href={`/blog/${post.slug}`}>Read Full Article</Link>
        </Button>
      </CardFooter>
    </Card>
  );
});

BlogPost.displayName = "BlogPost";

export function HomeBlogPreview() {
  // Use first 3 posts from shared data source
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-max items-start">
      {featuredPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
