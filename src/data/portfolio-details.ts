export interface ProjectDetail {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description?: string;
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  client?: string;
}

export const portfolioDetails: Record<string, ProjectDetail> = {
  "e-commerce": {
    id: 1,
    title: "E-commerce Website",
    image:
      "https://cdn.dribbble.com/userupload/9643919/file/original-964e7c7ed9c77cfa90cf565645804613.png?resize=1600x1200&vertical=center",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    description:
      "A modern e-commerce platform built with Next.js and React, featuring secure payment processing with Stripe integration.",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Stripe payment integration",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Stripe API",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    duration: "3 months",
    client: "Tech Startup",
  },
  "task-app": {
    id: 2,
    title: "Task Management App",
    image:
      "https://cdn.dribbble.com/userupload/37204675/file/original-c485781787c10e8555529bbe033c0efc.jpg?resize=1600x1200&vertical=center",
    tags: ["React", "Firebase", "Material UI"],
    description:
      "A comprehensive task management application with real-time collaboration features powered by Firebase.",
    features: [
      "Real-time task updates",
      "Team collaboration and sharing",
      "Project organization and categorization",
      "Due date reminders and notifications",
      "Progress tracking and analytics",
      "Drag-and-drop task management",
    ],
    technologies: ["React", "Firebase", "Material UI", "Redux", "TypeScript"],
    duration: "2 months",
    client: "Small Business",
  },
  photographer: {
    id: 3,
    title: "Portfolio Website",
    image:
      "https://cdn.dribbble.com/userupload/11836430/file/original-8696facb39b0641248efdeb31bc641db.png?resize=1600x1200&vertical=center",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    description:
      "An elegant portfolio website for a professional photographer, featuring smooth animations and optimized image galleries.",
    features: [
      "Responsive image galleries",
      "Smooth page transitions",
      "Contact form integration",
      "SEO optimization",
      "Fast loading times",
      "Mobile-first design",
    ],
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Cloudinary",
      "Vercel",
    ],
    duration: "1.5 months",
    client: "Professional Photographer",
  },
  "blog-platform": {
    id: 4,
    title: "Blog Platform",
    image:
      "https://cdn.dribbble.com/userupload/3938480/file/original-bc82079ee75f91f4e5f01be2366ac76b.png?resize=2400x1800&vertical=center",
    tags: ["Next.js", "Sanity CMS", "Vercel"],
    description:
      "A modern blog platform with headless CMS integration, providing an excellent writing and reading experience.",
    features: [
      "Rich text editor with Sanity CMS",
      "Content management system",
      "SEO-friendly URLs and meta tags",
      "Comment system",
      "Search functionality",
      "Social media integration",
    ],
    technologies: [
      "Next.js",
      "Sanity CMS",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
    duration: "2.5 months",
    client: "Content Creator",
  },
  "real-estate": {
    id: 5,
    title: "Real Estate Listing",
    image:
      "https://cdn.dribbble.com/userupload/5779728/file/original-02887eee802d54333afb3aab085dcc73.png?resize=1600x1200&vertical=center",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "A comprehensive real estate listing platform with advanced search capabilities and property management features.",
    features: [
      "Property search with filters",
      "Interactive maps integration",
      "Property comparison tools",
      "Agent profiles and contact system",
      "Mortgage calculator",
      "Saved searches and favorites",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Maps API",
      "AWS S3",
    ],
    duration: "4 months",
    client: "Real Estate Agency",
  },
  "weather-app": {
    id: 6,
    title: "Weather Dashboard",
    image:
      "https://cdn.dribbble.com/userupload/14053387/file/original-facc18652933f6abb2ec9fe1214bd5be.png?resize=2048x1536&vertical=center",
    tags: ["React", "Weather API", "Chart.js"],
    description:
      "An interactive weather dashboard providing detailed weather information with beautiful data visualizations.",
    features: [
      "Current weather conditions",
      "5-day weather forecast",
      "Interactive weather charts",
      "Location-based weather data",
      "Weather alerts and notifications",
      "Historical weather data",
    ],
    technologies: [
      "React",
      "Weather API",
      "Chart.js",
      "TypeScript",
      "Styled Components",
    ],
    duration: "1 month",
    client: "Personal Project",
  },
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return portfolioDetails[slug];
};

// Helper function to get all project slugs
export const getAllProjectSlugs = (): string[] => {
  return Object.keys(portfolioDetails);
};
