export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured online store built with Next.js and Stripe integration.",
    image: "https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=1600x1200&vertical=center",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    link: "/portfolio/e-commerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with team collaboration features.",
    image: "https://cdn.dribbble.com/userupload/37204675/file/original-c485781787c10e8555529bbe033c0efc.jpg?resize=1600x1200&vertical=center",
    tags: ["React", "Firebase", "Material UI"],
    link: "/portfolio/task-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A custom portfolio website for a photographer showcasing their work with a beautiful gallery.",
    image: "https://cdn.dribbble.com/userupload/11836430/file/original-8696facb39b0641248efdeb31bc641db.png?resize=1600x1200&vertical=center",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "/portfolio/photographer",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A content management system for bloggers with markdown support and SEO optimization.",
    image: "https://cdn.dribbble.com/userupload/3938480/file/original-bc82079ee75f91f4e5f01be2366ac76b.png?resize=2400x1800&vertical=center",
    tags: ["Next.js", "Sanity CMS", "Vercel"],
    link: "/portfolio/blog-platform",
  },
  {
    id: 5,
    title: "Real Estate Listing",
    description:
      "A property listing website with advanced search and filtering capabilities.",
    image: "https://cdn.dribbble.com/userupload/5779728/file/original-02887eee802d54333afb3aab085dcc73.png?resize=1600x1200&vertical=center",
    tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
    link: "/portfolio/real-estate",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "A weather application with real-time updates and interactive visualizations.",
    image: "https://cdn.dribbble.com/userupload/14053387/file/original-facc18652933f6abb2ec9fe1214bd5be.png?resize=2048x1536&vertical=center",
    tags: ["React", "Chart.js", "Weather API"],
    link: "/portfolio/weather-app",
  },
];

export type Project = typeof projects[0];
