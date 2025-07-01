"use client";

import Link from "next/link";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScaleOnHover } from "@/components/framer-animations";
import { cn } from "@/lib/utils";
import OptimizedLogo from "@/components/optimized-logo";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = memo(() => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  // Navigation links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Reusable NavLink component
  const NavLink = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium transition-colors hover:text-primary ",
        isActive(href) ? "text-primary gradientSpan" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4 mx-auto max-w-5xl px-4 lg:px-0">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <m.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
                style={{ transformOrigin: "center center" }}
              >
                <OptimizedLogo size={43} priority={true} />
              </m.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <ScaleOnHover>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </ScaleOnHover>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className=""
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b bg-background z-30 sticky top-16"
          >
            <div className="container mx-auto max-w-5xl py-4 space-y-4 px-4 lg:px-0">
              {navLinks.map(({ href, label }) => (
                <div key={href} className="block">
                  <NavLink
                    href={href}
                    label={label}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
              ))}
            </div>
            <div className="pt-2 border-t px-4 ">
              <Button asChild className="w-full">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
});

Header.displayName = "Header";

export { Header };
