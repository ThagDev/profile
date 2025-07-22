export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  author?: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js and React.",
    date: "April 15, 2023",
    image: "https://nextjs.org/api/learn-og?title=Getting%20Started&chapter=1",
    category: "Development",
    slug: "getting-started-with-nextjs",
    author: "Thang Dev",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and boost productivity.",
    date: "March 28, 2023",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftbi5298kz9usxb5lrtmq.png",
    category: "Design",
    slug: "power-of-tailwind-css",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating web applications that everyone can use, regardless of ability.",
    date: "March 10, 2023",
    image:
      "https://cdn-media-0.freecodecamp.org/size/w2000/2022/12/ben-kolde-bs2Ba7t69mM-unsplash-1.jpg",
    category: "Accessibility",
    slug: "building-accessible-web-applications",
    author: "Alex Johnson",
  },
  {
    id: 4,
    title: "State Management in React",
    excerpt:
      "Comparing different state management solutions for React applications.",
    date: "February 22, 2023",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    category: "Development",
    slug: "state-management-in-react",
    author: "Mike Wilson",
  },
  {
    id: 5,
    title: "Optimizing Website Performance",
    excerpt:
      "Techniques to improve loading times and overall performance of your websites.",
    date: "February 5, 2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    category: "Performance",
    slug: "optimizing-website-performance",
    author: "Sarah Davis",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "January 18, 2023",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
    category: "Trends",
    slug: "future-of-web-development",
    author: "Chris Brown",
  },
];

export const blogCategories = [
  "All",
  "Development",
  "Design",
  "Accessibility",
  "Performance",
  "Trends",
];

// Helper functions để tìm blog post theo slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getBlogIdFromSlug = (slug: string): number => {
  const slugToId: Record<string, number> = {
    "getting-started-with-nextjs": 1,
    "power-of-tailwind-css": 2,
    "building-accessible-web-applications": 3,
    "state-management-in-react": 4,
    "optimizing-website-performance": 5,
    "future-of-web-development": 6,
  };
  return slugToId[slug] || 1;
};

export const getBlogTitleFromSlug = (slug: string): string => {
  const post = getBlogPostBySlug(slug);
  return post?.title || "Blog Post";
};

export const getBlogExcerptFromSlug = (slug: string): string => {
  const post = getBlogPostBySlug(slug);
  return post?.excerpt || "This is a sample blog post excerpt.";
};

export const getBlogContentFromSlug = (slug: string): string => {
  const post = getBlogPostBySlug(slug);
  const title = post?.title || "Blog Post";
  const excerpt = post?.excerpt || "This is a sample blog post excerpt.";

  return `Welcome to this comprehensive guide on ${title}. In this article, we'll explore the key concepts, best practices, and practical examples to help you master this topic.

Introduction

${excerpt}

Getting Started

Before diving into the details, let's understand the basics. This section will provide you with the foundational knowledge needed to grasp the more advanced concepts later in the article.

When working with web development technologies, it's important to understand how they fit into the broader ecosystem. Each tool and framework has its strengths and weaknesses, and knowing when to use each one is a crucial skill for any developer.

Key Concepts

Let's explore some of the key concepts related to this topic:

• Concept 1: Description of the first important concept.
• Concept 2: Description of the second important concept.  
• Concept 3: Description of the third important concept.
• Concept 4: Description of the fourth important concept.

Best Practices

Following best practices can significantly improve the quality of your work. Here are some recommendations:

1. Practice 1: Description of the first best practice.
2. Practice 2: Description of the second best practice.
3. Practice 3: Description of the third best practice.

Advanced Techniques

Once you've mastered the basics, you can explore these advanced techniques to take your skills to the next level:

Advanced techniques require a solid understanding of the fundamentals. Make sure you're comfortable with the basic concepts before attempting these more complex approaches.

Common Pitfalls

Here are some common mistakes to avoid:

• Mistake 1: Description of a common mistake and how to avoid it.
• Mistake 2: Description of another common mistake and how to avoid it.
• Mistake 3: Description of a third common mistake and how to avoid it.

Real-World Applications

Let's look at how these concepts apply in real-world scenarios:

Understanding how to apply theoretical knowledge to practical situations is crucial for becoming a successful developer. These examples will help bridge the gap between learning and doing.

Performance Considerations

When implementing these techniques, keep performance in mind:

• Optimization tip 1: Description of a performance optimization.
• Optimization tip 2: Description of another performance optimization.
• Optimization tip 3: Description of a third performance optimization.

Conclusion

In this article, we've covered the essential aspects of ${title}. By following the guidelines and best practices outlined here, you'll be well-equipped to tackle similar challenges in your own projects.

Remember that learning is an ongoing process. Keep practicing, stay curious, and don't be afraid to experiment with new ideas and approaches.

Happy coding!`;
};
