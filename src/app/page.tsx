"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/framer-animations";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";
import { HomeBlogPreview } from "@/components/home-blog-preview";
import { ViewCounter } from "@/components/view-counter";
import { CVPreviewDialog } from "@/components/cv-preview-dialog";
import { projects, type Project } from "@/data/projects";

// Memoized project item
const ProjectItem = memo(({ project }: { project: Project }) => (
  <StaggerItem>
    <ScaleOnHover>
      <div className="group relative overflow-hidden rounded-lg border bg-background">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            width={500}
            height={300}
            alt={project.title}
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold tracking-tight">{project.title}</h3>
            <ViewCounter id={project.id} type="project" />
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScaleOnHover>
  </StaggerItem>
));

ProjectItem.displayName = "ProjectItem";

export default function HomePage() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Using useInView for performance
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.3 });
  const blogInView = useInView(blogRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-6xl">
            {" "}
            <div className="text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <FadeIn>
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold  sm:text-5xl xl:text-6xl">
                      <span className="text-primary font-bold">
                        Hi, I&apos;m <span className="gradientSpan">Thang Dev</span>
                      </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                      A passionate full-stack developer who loves creating
                      beautiful, functional, and user-friendly web applications.
                    </p>
                  </div>
                </FadeIn>

                <SlideIn direction="up" delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/portfolio">
                        View My Work
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <CVPreviewDialog
                      triggerClassName="w-full sm:w-auto"
                      buttonVariant="outline"
                    />
                  </div>
                </SlideIn>

                <SlideIn direction="up" delay={0.4}>
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>Available for work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileDown className="h-4 w-4" />
                      <span>Open to opportunities</span>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {aboutInView && (
              <>
                {" "}
                <FadeIn>
                  <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      About Me
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A passionate full-stack developer with 1+ year of
                      experience creating modern web applications. I love
                      learning new technologies and turning creative ideas into
                      functional, beautiful websites.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>React & Next.js</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Node.js</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="mt-4"
                    >
                      <Link href="/about">
                        Learn More About Me
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {portfolioInView && (
              <>
                <FadeIn>
                  <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      A showcase of my recent work and achievements
                    </p>
                  </div>
                </FadeIn>

                <StaggerContainer>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, 3).map((project) => (
                      <ProjectItem key={project.id} project={project} />
                    ))}
                  </div>
                </StaggerContainer>

                <FadeIn delay={0.6}>
                  <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg">
                      <Link href="/portfolio">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={blogRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {blogInView && (
              <>
                <FadeIn>
                  <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Latest Blog Posts
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Thoughts, tutorials, and insights on web development
                    </p>
                  </div>
                </FadeIn>

                <HomeBlogPreview />

                <FadeIn delay={0.4}>
                  <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg">
                      <Link href="/blog">
                        Read All Posts
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {contactInView && (
              <>
                <FadeIn>
                  <div className="space-y-4 mb-8">
                    {" "}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Ready to turn your ideas into reality? Let&apos;s discuss
                      your next project.
                    </p>
                  </div>
                </FadeIn>

                <SlideIn direction="up" delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/contact">
                        Get In Touch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="mailto:hoquocthang1507@gmail.com">Send Email</a>
                    </Button>
                  </div>
                </SlideIn>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
