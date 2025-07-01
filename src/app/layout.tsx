import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollManager } from "@/components/scroll-manager";
import ErrorBoundary from "@/components/error-boundary";
import "@/lib/suppress-warnings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ThagDev - Full Stack Developer",
    template: "%s | ThagDev"
  },
  description: "Full-stack developer passionate about creating beautiful, functional, and user-friendly websites and applications. Specialized in React, Next.js, and modern web technologies.",
  keywords: ["ThagDev", "Full Stack Developer", "React", "Next.js", "Web Development", "Portfolio"],
  authors: [{ name: "ThagDev" }],
  creator: "ThagDev",
  publisher: "ThagDev",
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com', // Replace with your actual domain
    title: 'ThagDev - Full Stack Developer Portfolio',
    description: 'Full-stack developer passionate about creating beautiful, functional, and user-friendly websites and applications.',
    siteName: 'ThagDev Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThagDev - Full Stack Developer Portfolio',
    description: 'Full-stack developer passionate about creating beautiful, functional, and user-friendly websites and applications.',
    creator: '@thagdev', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Remove logo preload - Next.js Image will handle it optimally */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ErrorBoundary>
            <ScrollManager />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <SiteFooter />
            </div>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
