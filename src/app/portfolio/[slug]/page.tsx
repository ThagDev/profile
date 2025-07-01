"use client";

import { use } from "react";
import { usePageTitle } from "@/hook/use-page-title";
import { Button } from "@/components/ui/button";
import { ViewCounter } from "@/components/view-counter";
import { IntegratedNavigation } from "@/components/integrated-navigation";
import Image from "next/image";
import { getProjectBySlug } from "@/data/portfolio-details";

// Dữ liệu project từ file data

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const projectData = getProjectBySlug(slug);
  
  // Nếu không tìm thấy project, dùng default
  const project = projectData || {
    id: 1,
    title: "Project",
    image: `/placeholder.svg?height=600&width=1200&text=${slug.replace(/-/g, "+")}`,
    tags: ["Next.js", "React", "Tailwind CSS"],
    description: `Dự án ${slug.replace(/-/g, " ")} sử dụng các công nghệ hiện đại.`,
  };

  usePageTitle(project.title);
  console.log(slug);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mx-auto max-w-5xl space-y-8">
          <IntegratedNavigation variant="elegant" />
          
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {project.title}
              </h1>
              <ViewCounter id={project.id} type="project" increment={true} />
            </div>            <p className="text-xl text-muted-foreground">
              {project.description || `Dự án ${project.title.toLowerCase()} sử dụng các công nghệ hiện đại.`}
            </p>
          </div>          <div className="overflow-hidden rounded-lg border">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2.5 py-1.5 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>Mô tả dự án</h2>
            <p>
              Đây là dự án {project.title} được xây dựng với các công nghệ{" "}
              {project.tags.join(", ")}. Dự án tập trung vào việc tạo ra một
              ứng dụng hiện đại, responsive và thân thiện với người dùng.
            </p>
            
            <h2>Tính năng chính</h2>
            <ul>
              <li>Thiết kế responsive hoạt động trên mọi thiết bị</li>
              <li>UI/UX hiện đại với điều hướng trực quan</li>
              <li>Tối ưu hóa hiệu suất cho tốc độ tải nhanh</li>
              <li>Thân thiện với SEO</li>
            </ul>

            <h2>Công nghệ sử dụng</h2>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <a href={`https://example.com/${slug}`} target="_blank" rel="noopener noreferrer">
                Xem Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`https://github.com/johndoe/${slug}`} target="_blank" rel="noopener noreferrer">
                Xem Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
