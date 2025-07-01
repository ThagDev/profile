import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Thang Dev. Let's discuss your next web development project or collaboration opportunity.",
  keywords: ["Contact Thang Dev", "Web Development Services", "Freelance Developer", "Project Inquiry"],
  openGraph: {
    title: "Contact - Thang Dev",
    description: "Get in touch with Thang Dev. Let's discuss your next web development project or collaboration opportunity.",
    type: "website",
  },
  twitter: {
    title: "Contact - Thang Dev",
    description: "Get in touch with Thang Dev. Let's discuss your next web development project or collaboration opportunity.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
