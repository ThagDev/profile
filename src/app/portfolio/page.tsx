import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ViewCounter } from "@/components/view-counter";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Thang Dev's portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
  keywords: ["ThagDev Portfolio", "Web Development Projects", "React Apps", "Next.js Projects", "Full Stack Development"],
  openGraph: {
    title: "Portfolio - Thang Dev",
    description: "Explore Thang Dev's portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
    type: "website",
  },
  twitter: {
    title: "Portfolio - Thang Dev",
    description: "Explore Thang Dev's portfolio showcasing modern web applications built with React, Next.js, and cutting-edge technologies.",
  },
};

export default function PortfolioPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent projects and work
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    width={500}
                    height={300}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <ViewCounter id={project.id} type="project" />
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
