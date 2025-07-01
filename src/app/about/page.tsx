import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { CVPreviewDialog } from "@/components/cv-preview-dialog";
import type { Metadata } from "next";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Thang Dev - a passionate full-stack developer with 1+ year of experience in React, Next.js, and modern web technologies.",
  keywords: ["About Thang Dev", "Full Stack Developer", "React", "Next.js", "Web Development", "Biography"],
  openGraph: {
    title: "About Thang Dev - Full Stack Developer",
    description: "Learn more about Thang Dev - a passionate full-stack developer with 1+ year of experience in React, Next.js, and modern web technologies.",
    type: "profile",
  },
  twitter: {
    title: "About Thang Dev - Full Stack Developer",
    description: "Learn more about Thang Dev - a passionate full-stack developer with 1+ year of experience in React, Next.js, and modern web technologies.",
  },
};
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h1>
            <p className="text-muted-foreground">
              Learn more about my background, skills, and interests
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Background</h2>
                <p>
                  I&apos;m Thang Dev, a passionate full-stack developer with 1+ year of
                  experience building modern web applications and websites. I
                  specialize in React, Next.js, Node.js, and modern web
                  technologies.
                </p>
                <p>
                  After completing my studies in Computer Science, I began my journey
                  in web development with a focus on creating user-friendly and scalable
                  applications. I&apos;m constantly learning new technologies and best
                  practices to deliver high-quality solutions for clients and projects.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    "React",
                    "Next.js", 
                    "TypeScript",
                    "Node.js",
                    "Tailwind CSS",
                    "UI/UX Design"
                  ].map((skill) => (
                    <div key={skill} className="rounded-lg border bg-card p-3 text-center shadow-sm">
                      <p className="font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">
                        Full-Stack Developer
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        2024 - Present
                      </p>
                    </div>
                    <p className="text-muted-foreground">Freelance & Personal Projects</p>
                    <p>
                      Developing modern web applications using React, Next.js, and Node.js.
                      Building responsive user interfaces with Tailwind CSS and implementing
                      full-stack solutions with clean, maintainable code.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Learning & Development</h3>
                      <p className="text-sm text-muted-foreground">
                        2023 - 2024
                      </p>
                    </div>
                    <p className="text-muted-foreground">Self-taught & Online Courses</p>
                    <p>
                      Intensive learning of modern web development technologies including
                      React ecosystem, TypeScript, and backend development. Built multiple
                      projects to practice and improve coding skills.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">Interests</h2>
                <p>
                  Outside of coding, I enjoy hiking, photography, and reading
                  science fiction novels. I&#39;m also passionate about
                  continuous learning and regularly attend tech conferences and
                  workshops.
                </p>
              </section>
            </div>

            <div className="space-y-6">
              {/* <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  width={400}
                  height={600}
                  alt="Thang Dev"
                  className="aspect-[2/3] object-cover"
                />
              </div> */}

              <div className="space-y-4 rounded-lg border bg-card p-4 shadow-sm">
                <h3 className="font-semibold">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <p>Email: hoquocthang150722@gmail.com</p>
                  <p>Location: HCM City, VN</p>
                </div>
                <div className="pt-2 space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <div className="grid grid-cols-2 gap-2">                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/Ho-Quoc-Thang-CV.pdf" download="Ho-Quoc-Thang-CV.pdf">
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                    <CVPreviewDialog
                      buttonVariant="outline"
                      triggerClassName="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border bg-card p-4 shadow-sm">
                <h3 className="font-semibold">Education</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">BSc in Computer Science</p>
                    <p className="text-muted-foreground">
                      University of Technology
                    </p>
                    <p className="text-muted-foreground">2012 - 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
